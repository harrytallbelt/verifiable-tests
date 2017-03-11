const { findLastIndex, flatten } = require('./utils')

/* Processes program and specification to get
 * the list of predicates, prooving which will
 * mean the program's validity.
 * Here `program` is an object tree representation of
 * the program being proven,
 * `spec` is an object, that contains fields
 *  - `precondition` with precondition predicate,
 *  - `postcondition` with postcondition predicate,
 *  - `invariants` with list of loop invariants (may be ommited),
 *  - `boundaryFunctions` with list of boundary functions (may be ommited).
 * `context` field is used by WP to propagate context through recursive calls.
 * You don't need to specify it.
 * WP returns an object of two fields:
 *  - `predicates`, the list of predicates to proove,
 *  - `context`, the that for each predicate of `predicates` provides
 *    a list of context objects, collected while aquiring the predicate.
*/
function wp(program, spec, context) {
  const Q = spec.precondition
  const R = spec.postcondition
  const S = program
  context = context || []

  if (S.length === 0) {     // an empty program acts
    const implication = {   // like a skip statement
      type: 'implies',
      left: Q,
      right: R
    }

    return {
      predicates: [implication],
      context: context
    }
  }

  const lastLoopIndex = findLastIndex(S, st => st.type === 'do')
  if (lastLoopIndex > 0) {
    const DO = S[lastLoopIndex]
    const P = spec.invariants.pop()
    const t = spec.boundaryFunctions.pop()
    const I = S.slice(0, lastLoopIndex)   // commands before the loop
    const J = S.slice(lastLoopIndex + 1)  // commands after the loop

    return doTheorem(Q, R, P, t, I, DO, J, spec, context)
  }

  const firstIfIndex = S.findIndex(st => st.type === 'if')
  if (firstIfIndex > 0) {
    const IF = S[firstIfIndex]
    const I = S.slice(0, firstIfIndex)    // commands before if
    const J = S.slice(firstIfIndex + 1)   // commands after if

    return ifTheorem(Q, R, I, IF, J, spec, context)
  }

  return elementarySequenceWp(Q, S, R, context)
}



/* Uses DO theorem to generate proof for {Q} I; DO; J {R}
 * with invariant P and boundary function t.
 * specBase is used to keep track of context,
 * invariants and boundary functions.
*/
function doTheorem(Q, R, P, t, I, DO, J, innerSpec, context) {
  const BB = conjunction(DO.guards)
  
  const results = flatten([
    doTheoremPt1(Q, I, P, innerSpec, context),
    doTheoremPt2(P, DO, innerSpec, context),
    doTheoremPt3(P, R, BB, J),
    doTheoremPt5(P, t, DO, innerSpec, context)
  ]).map(wp)

  // pt. 4 returns a predicate, so no wp call needed
  results.push(doTheoremPt4(P, t, BB, DO, innerSpec))

  return combineResults(results)
}

// {Q} I {P}
function doTheoremPt1(Q, I, P, innerSpec, context) {
  const contextObject = createContext({ command: I, type: 'do', step: 1 })

  return Object.assign({}, innerSpec, {
    precondition: Q,
    postcondition: P,
    program: I,
    context: [contextObject, ... context]
  })
}

// {P ^ Bi} Ci {P} for i = 1..n
function doTheoremPt2(P, DO, innerSpec, context) {
  const subSpecs = DO.guards.map((guard, i) => {
    const command = DO.commands[i]
    const contextObject =
      createContext({ command: command, type: 'do', step: 2, branch: i + 1})

    return Object.assign({}, innerSpec, {
      precondition: {
        type: 'and',
        left: P,
        right: guard,
      },
      postcondition: P,
      program: command,
      context: [contextObject, ... context]
    })
  })

  return subSpecs
}

// {P ^ ~BB} J {R}
function doTheoremPt3(P, R, BB, J, innerSpec, context) {
  const contextObject = createContext({ command: J, type: 'do', step: 3})

  return Object.assign({}, innerSpec, {
    precondition: {
      type: 'and',
      left: P,
      right: {
        type: 'not',
        inner: BB
      }
    },
    postcondition: R,
    program: J,
    context: [contextObject, ... context]
  })
}

// P ^ BB => t > 0
function doTheoremPt4(P, t, BB, DO, innerSpec, context) {
  const contextObject = createContext({ command: DO, type: 'do', step: 4 })
  const implication = {
    type: 'implies',
    left: { type: 'and', left: P, right: BB },
    right: {
      type: 'comp',
      comp: '>',
      left: t,
      right: { type: 'const', const: 0 }
    }
  }
  return {
    predicates: [implication],
    context: [contextObject, ... context]
  }
}

// {P ^ Bi} @t := t; Ci {t < @t} for i = i..n
function doTheoremPt5(P, t, DO, innerSpec, context) {
  const specs = DO.guards.map((guard, i) => {
    const tInit = {
      type: 'name',
      name: '@t_init',    // NOTE: here we use @ which might cause problems.
    }
    const fakeAssignment = {            // we reuse first command text range
      textRange: command[0].textRange,  // so it would seem like our command
      type: 'assign',                   // takes no space in source code.
      lvalues: [tInit],
      rvalues: [t]
    }
    const command = [fakeAssignment, ... DO.commands[i]]
    const contextObject =
      createContext({ command: command, type: 'do', step: 5, branch: i + 1 })

    return Object.assign({}, innerSpec, {
      precondition: {
        type: 'and',
        left: P,
        right: guard
      },
      postcondition: {
        type: 'comp',
        comp: '<',
        left: t,
        right: tInit
      },
      program: command,
      context: [contextObject, ... context]
    })
  })

  return specs
}



/* Uses IF theorem to generate proof for {Q} I; IF; J {R}
 * with invariant P and boundary function t.
 * specBase is used to keep track of context,
 * invariants and boundary functions.
*/
function ifTheorem(Q, R, I, IF, J, innerSpec, context) {
  const BB = conjunction(IF.guards)
  
  const results = flatten([
    ifTheoremPt1(Q, BB, I, innerSpec, context),
    ifTheoremPt2(Q, R, BB, I, IF, J, innerSpec, context)
  ]).map(wp)

  return combineResults(results)
}


function ifTheoremPt1(Q, BB, I, innerSpec, context) {
  const context = createContext({ command: I, type: 'if', step: 1 })

  return Object.assign({}, innerSpec, {
    precondition: Q,
    postcondition: BB,
    program: I,
    context: [contextObject, ... context]
  })
}


function ifTheoremPt2(Q, R, BB, I, IF, J, innerSpec, context) {
  const specs = IF.guards.map((guard, i) => {
    const commands = I.concat(IF.commands[i]).concat(J)
    const precondition = {
      type: 'and',
      left: Q,
      // we get Q => WP(I, BB) and take the right part
      right: elementarySequenceWp(Q, I, BB).predicates[0].right
    }

    const contextObject =
      createContext({ command: commands, type: 'if', step: 2, branch: i + 1})

    return Object.assign({}, innerSpec, {
      precondition: precondition,
      postcondition: guard,
      program: commands,
      context: [contextObject, ... context]
    })
  })

  return specs
}



/* Generates a proof of elementary command sequence.
*/
function elementarySequenceWp(Q, S, R, context) {
  const seqWp = S.reduceRight((predicate, command) => {
    switch (command.type) {
      case 'abort':
        return { type: 'const', const: false }

      case 'skip':
        return predicate

      case 'assign':
       return substitutePredicate(predicate, command.lvalues, command.rvalues)
    }
  }, R)

  if (seqWp === R) {               // copy R in case there
    seqWp = Object.assign({}, R)   // was nothing but skip's
  }

  const contextObject = createContext({ command: S, type: 'seq' })

  return {
    predicates: [seqWp],
    context: [contextObject, ... context]
  }
}


/* Substitutes variables from `names` by
 * expressions from `exprs` in predicate `pred`
 * and returns the result predicate.
*/
function substitutePredicate(pred, names, exprs) {
  switch (pred.type) {
    case 'const':
      return pred

    case 'not':
    case 'parets':
      return {
        type: pred.type,
        inner: substitutePredicate(pred.inner, names, exprs)
      }

    case 'or':
    case 'implies':
    case 'iff':
    case 'and':
      return {
        type: pred.type,
        left: substitutePredicate(pred.left, names, exprs),
        right: substitutePredicate(pred.right, names, exprs)
      }
    
    case 'comp':
      return {
        type: pred.type,
        op: pred.op,
        leftIntExpr: substituteIntExpr(pred.leftIntExpr, names, exprs),
        rightIntExpr: substituteIntExpr(pred.rightIntExpr, names, exprs)
      }

    case 'exists':
    case 'forall':
      const filteredPairs = names
        .map((n, i) => { 'var': name, expr: exprs[i] })
        .filter(pair => pred.boundedVars.every(bn => bn.name !== pair.var.name))

      const filteredNames = filteredPairs.map(p => p.var)
      const filteredExprs = filteredPairs.map(p => p.expr)

      return {
        type: pred.type,
        boundedVars: pred.boundedVars,
        condition: substitutePredicate(pred.condition, filteredNames, filteredExprs),
        inner: substitutePredicate(pred.inner, filteredNames, filteredExprs)
      }

    default:
      throw new Error('WP error: unknown predicate type:', pred.type)
  }
}


function substituteIntExpr(intExpr, names, exprs) {
  switch (intExpr.type) {
    case 'const':
      return intExpr

    case 'var':
      return {
        type: 'var',
        var: substituteVariable(intExpr.var, names, exprs)
      }
    
    case 'negare':
    case 'parets':
      return {
        type: intExpr.type,
        inner: substituteIntExpr(intExpr.inner, names, exprs)
      }

    case 'plus':
    case 'minus':
    case 'mult':
      return {
        type: intExpr.type,
        leftIntExpr: substituteIntExpr(intExpr.leftIntExpr, names. exprs),
        rightIntExpr: substituteIntExpr(intExpr.rightIntExpr, names. exprs)
      }
    
    default:
     throw new Error('WP error: unknown integer expression type:', intExpr.type)
  }
}

function substituteVariable(variable, names, exprs) {
  switch (variable.type) {
    case 'name':
      const nameIndex = names.findIndex(n => n.name === variable.name)
      return nameIndex < 0 ? variable : exprs[nameIndex]

    case 'select':
      return {
        type: 'select',
        base: substituteVariable(variable.base, names, exprs),
        selector: substituteIntExpr(variable.selector, names, exprs)
      }

    case 'store':
      return {
        type: 'store',
        base: substituteVariable(variable.base, names, exprs),         // TODO: do we need
        selector: substituteIntExpr(variable.selector, names, exprs),  // substitutions
        value: substituteIntExpr(variable.value, names, exprs)         // in all of these??
      }

    default:
      throw new Error('WP error: unknown variable type:', variable.type)
  }
}


function combineResults(results) {
  // TOOD: is there a better way? (maybe concat without creating new array?)
  return results.reduce((acc, res) => {
    predicates: acc.predicates.concat(res.predicates),
    context: acc.context.concat(res.context)
  })
}

function conjunction(predicates) {
  return predicates.reduce((conj, pred) => ({
    type: 'and',
    left: conj,
    right: pred
  }))
}

// You can omit step and branch
function createContext({ command, type, step, branch }) {
  // TODO: either change docs or return to what we had before
  let context = { proofType: type, proofStep: step, proofBranch branch }

  if (Array.isArray(command)) {
    // TODO: what if command is empty (this *can* happen)
    // (past me did not bother to left a note on *when* it can happen)
    context.start = command[0].textRange.start
    context.end = command[commands.length - 1].textRange.end
  } else {
    context.start = command.textRange.start
    context.end = command.textRange.end
  }

  return context
}


module.exports = wp
