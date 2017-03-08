// TODO: 'impl' for bool expr of impliation
// TODO: if negated is undefined, then int or bool expr isn't negated

// TODO: This really is not implemented in Array.prototype :(
function findLastIndex(predicate, arr) {
  for (let i = arr.length - 1; i >= 0; --i) {
    if (predicate(arr[i], i, arr)) {
      return i
    }
  }
  return -1
}

// TODO: This does not implemented in js library. Should I use
// lodash or underscore? Or just create a 'utils.js' file?
function flatten(arr) {
  return arr.reduce((acc, subArr) => acc.concat(subArr), [])
}



function wp(spec) {
  const Q = spec.precondition
  const R = spec.postcondition
  const S = spec.program.statements

  if (S.length == 0) {
    throw new Error('Not implemented')  // wp for skip    
  }

  const lastLoopIndex = S.findLastIndex(({ type }) => type === 'do')
  if (lastLoopIndex > 0) {
    const DO = S[lastLoopIndex]
    const P = spec.invariants.pop()
    const t = spec.boundaryFunctions.pop()
    const I = S.slice(0, lastLoopIndex)   // commands before the loop
    const J = S.slice(lastLoopIndex + 1)  // commands after the loop

    return doTheorem(Q, R, P, t, I, DO, J, spec)
  }

  const firstIfIndex = S.findIndex(({ type }) => type === 'if')
  if (firstIfIndex > 0) {
    const IF = S[firstIfIndex]
    const I = S.slice(0, firstIfIndex)    // commands before if
    const J = S.slice(firstIfIndex + 1)   // commands after if

    return ifTheorem(Q, R, I, IF, J, spec)
  }

  throw new Error('Not implemented')  // wp for elementary command seq
  return
}



/* Uses DO theorem to generate proof for {Q} I; DO; J {R}
 * with invariant P and boundary function t.
 * specBase is used to keep track of context,
 * invariants and boundary functions.
*/
function doTheorem(Q, R, P, t, I, DO, J, specBase) {
  const BB = DO.guards.reduce((conj, g) => ({
    type: 'and',
    leftBool: conj,
    rightBool: g
  }))
  
  const specs = [
    doTheoremPt1(Q, I, P, specBase),
    doTheoremPt2(P, DO, specBase),
    doTheoremPt3(P, R, BB, J),
    doTheoremPt5(P, t, DO, specBase) ]
  .map(wp)

  specs.push(doTheoremPt4(P, t, BB, DO, specBase))  // pt. 4 returns predicate

  return flatten(specs)
}


function doTheoremPt1(Q, I, P, specBase) {
  const contextObject = Object.assign(getCommandsTextRange(I), {
    cause: {
      type: 'do',
      step: 1
    }
  })

  return Object.assign({}, specBase, {
    precondition: Q,
    postcondition: P,
    program: I,
    context: [contextObject, ... specBase.context]
  })
}


function doTheoremPt2(P, DO, specBase) {
  const subSpecs = DO.guards.map((guard, i) => {
      const command = DO.commands[i]
      const contextObject = Object.assign(getCommandsTextRange(command), {
        cause: {
          type: 'do',
          step: 2,
          branch: i + 1
        }
      })
      
      return Object.assign({}, specBase, {
        precondition: {
          type: 'and',
          leftBool: P,
          rightBool: guard,
        },
        postcondition: P,
        program: command,
        context: [contextObject, ... specBase.context]
      })
    })

  return flatten(subSpecs)
}


function doTheoremPt3(P, R, BB, J, specBase) {
  const contextObject = Object.assign(getCommandsTextRange(J), {
    cause: {
      type: 'do',
      step: 3
    }
  })

  return Object.assign({}, specBase, {
    precondition: {
      type: 'and',
      leftBool: P,
      rightBool: BB
    },
    postcondition: R,
    program: J,
    context: [contextObject, ... specBase.context]
  })
}


function doTheoremPt4(P, t, BB, DO, specBase) {
  const contextObject = Object.assign({}, DO.textRange, {
    cause: {
      type: 'do',
      step: 4
    }
  })
  
  const predicate = {
    type: 'implies',
    leftBool: {
      type: 'and',
      leftBool: P,
      rightBool: BB
    },
    rightBool: {
      type: 'comp',
      comp: '>',
      left: t,
      right: {
        type: 'const',
        const: 0
      }
    }
  }

  return {
    predicates: [predicate],
    context: [contextObject, ... specBase.context]
  }
}


function doTheoremPt5(P, t, DO, specBase) {
  const stats = DO.guards.map((guard, i) => {
    const tInit = {
      name: '@t_init',
      selectors: []
    }
    const fakeCommand = {
      textRange: command[0].textRange,
      type: 'assign',
      lvalues: [tInit],
      rvalues: [t]
    }
    const command = [fakeCommand, ... DO.commands[i]]
    const contextObject = Object.assign({}, getCommandsTextRange(command), {
      cause: {
        type: 'do',
        step: 5,
        branch: i
      }
    })

    return Object.assign({}, specBase, {
      precondition: {
        type: 'and',
        leftBool: P,
        rightBool: guard
      },
      postcondition: {
        type: 'comp',
        comp: '<',
        left: t,
        right: tInit
      },
      program: command,
      context: [contextObject, ... specBase.context]
    })
  })

  return flatten(stats)
}



/* Uses IF theorem to generate proof for {Q} I; IF; J {R}
 * with invariant P and boundary function t.
 * specBase is used to keep track of context,
 * invariants and boundary functions.
*/
function ifTheorem(Q, R, I, IF, J, specBase) {
  const BB = IF.guards.reduce((conj, g) => ({
    type: 'and',
    leftBool: conj,
    rightBool: g
  }))
  
  const specs = [
    ifTheoremPt1(Q, BB, I, specBase),
    ifTheoremPt2(Q, R, I, IF, J, specBase) ]
  .map(wp)

  return flatten(specs)
}


function ifTheoremPt1(Q, BB, I, specBase) {
  const context = Object.assign({}, getCommandsTextRange(I), {
    cause: {
      type: 'if',
      step: 1
    }
  })

  return Object.assign({}, specBase, {
    precondition: Q,
    postcondition: BB,
    program: I,
    context: [contextObject, ... specBase.context]
  })
}


function ifTheoremPt2(Q, R, I, IF, J, specBase) {
  const specs = IF.guards.map((guard, i) => {
    const commands = null // TODO
    const precondition = null // TODO

    const contextObject = Object.assign({},
      getCommandsTextRange(commands), {
        cause: {
          type: 'if',
          step: 2,
          branch: i
        }
    })

    return Object.assign({}, specBase, {
      precondition: precondition,
      postcondition: guard,
      program: commands,
      context: [contextObject, ... specBase.context]
    })
  })

  return flatten(specs)
}


/* Generates proof of elementary command sequence.
*/
function elementarySequenceWp(Q, S, R, specBase) {
  const seqWp = S.reverse().reduce((predicate, command) => {
    switch (command.type) {
      case 'abort':
        return { type: 'const', const: false }

      case 'skip':
        return predicate

      case 'assign':
       return substitute(predicate, command.lvalues, command.rvalues)
    }
  }, R)

  if (seqWp === R) {               // in case there was
    seqWp = Object.assign({}, R)   // nothing but skip's
  }

  return {
    predicates: null,
    context: null
  }
}

/* Substitutes variables from `vars` by
 * expressions from `exprs` in predicate `pred`
 * and returns the result predicate.
*/
function substitute(pred, vars, exprs) {
  switch (pred.type) {
    case 'const':
      return pred

    case 'var':
      // TODO: what if it is bounded??
      const varIndex = vars.findIndex(_var => _var.name == pred.name)
      return varIndex < 0 ? pred : exprs[varIndex]  // TODO: should we copy expr

    // TODO: the quantifiers

    case 'parets':
      return {
        type: 'parets',
        inner: substitute(pred.inner)
      }

    case 'and':
      return {
        type: 'and',
        leftBool: substitute(pred.leftBool),
        rightBool: substitute(pred.rightBool)
      }

    case 'or':
      return {
        type: 'or',
        leftBool: substitute(pred.leftBool),
        rightBool: substitute(pred.rightBool)
      }

    case 'impl':
      return {
        type: 'impl',
        leftBool: substitute(pred.leftBool),
        rightBool: substitute(pred.rightBool)
      }
  }
}



function getCommandsTextRange(commands) {
  // TODO: what if command is empty (this *can* happen)
  return {
    start: commands[0].textRange.start,
    end: commands[commands.length - 1].textRange.end
  }
}


