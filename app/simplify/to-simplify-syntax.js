// We create exports object before requiring axioms.js,
// because there is a circular dependence between these two modules.
module.exports.convertToSimplifySyntax = convertToSimplifySyntax
module.exports.convertToSimplifyPredicate = convertToSimplifyPredicate
module.exports.convertToSimplifyIntExpr = convertToSimplifyIntExpr
module.exports.convertToSimplifyVar = convertToSimplifyVar

const { Axioms, getAxioms, getParsingFunctions } = require('./axioms')

/* `requiredAxioms` is an optional argument, which
 * is a bitwise-or combination of used axioms from `Axiom` enum.
*/
function convertToSimplifySyntax(predicates, requiredAxioms) {
  requiredAxioms = requiredAxioms || 0
  const axiomTriggers = getParsingFunctions(requiredAxioms)
  return getAxioms(requiredAxioms)
    .concat(predicates.map(p => convertToSimplifyPredicate(p, axiomTriggers)))
    .join(' ')
}

function convertToSimplifyPredicate(predicate, axiomTriggers) {
  const axiomTriggerResults = axiomTriggers
    .map(triggerObj => triggerObj.onPredicate(predicate))
    .filter(res => res !== null)
  
  if (axiomTriggerResults.length > 1) {
    // TODO: or should we just log it and take the first result?
    throw new Error('More than one axiom trigger is set by a predicate.')
  }
  if (axiomTriggerResults.length === 1) {
    return axiomTriggerResults[0]
  }

  switch (predicate.type) {
    case 'const':
      return predicate.const ? 'TRUE' : 'FALSE'
    case 'not':
      return `(NOT ${convertToSimplifyPredicate(predicate.inner, axiomTriggers)})`
    case 'and':
    case 'or':
    case 'implies':
    case 'iff': {
      const op = booleanOperation(predicate.type)
      const left = convertToSimplifyPredicate(predicate.left, axiomTriggers)
      const right = convertToSimplifyPredicate(predicate.right, axiomTriggers)
      return `(${op} ${left} ${right})`
    }
    case 'comp': {
      const op = comparisonOperation(predicate.op)
      const left = convertToSimplifyIntExpr(predicate.left, axiomTriggers)
      const right = convertToSimplifyIntExpr(predicate.right, axiomTriggers)
      return `(${op} ${left} ${right})`
    }
    case 'call': {
      const args = predicate.args.map(arg => arg.type === 'store'
        ? convertToSimplifyVar(arg, axiomTriggers)
        : convertToSimplifyIntExpr(arg, axiomTriggers))
      return `(${predicate.name} ${args.join(' ')})`
    }
    case 'exists': {
      const boundVar = convertToSimplifyVar(predicate.boundVar, axiomTriggers)
      const condition = convertToSimplifyPredicate(predicate.condition, axiomTriggers)
      const inner = convertToSimplifyPredicate(predicate.inner, axiomTriggers)
      return `(EXISTS (${boundVar}) (AND ${condition} ${inner}))`
    }
    case 'forall': {
      const boundVar = convertToSimplifyVar(predicate.boundVar, axiomTriggers)
      const condition = convertToSimplifyPredicate(predicate.condition, axiomTriggers)
      const inner = convertToSimplifyPredicate(predicate.inner, axiomTriggers)
      const selectWithBoundVar = findSelectInPred(predicate.inner, predicate.boundVar.name)
      const pats = selectWithBoundVar
        ? `(PATS ${convertToSimplifyVar(selectWithBoundVar, axiomTriggers)})`
        : ''
      return `(FORALL (${boundVar}) ${pats} (IMPLIES ${condition} ${inner}))`
    }
    default: throw new Error(`Unsupported predicate type '${predicate.type}'.`)
  }
}

function booleanOperation(opName) {
  switch (opName) {
    case 'and':     return 'AND'
    case 'or':      return 'OR'
    case 'implies': return 'IMPLIES'
    case 'iff':     return 'IFF'
    default: throw new Error(`Unsupported logic opperation '${opName}'.`)
  }
}

function comparisonOperation(opName) {
  switch (opName) {
    case '<':  return '<'
    case '>':  return '>'
    case '<=': return '<='
    case '>=': return '>='
    case '=':  return 'EQ'
    case '<>': return 'NEQ'
    default: throw new Error(`Unsupported comparison operation '${opName}'.`)
  }
}

function findSelectInPred(pred, varName) {
  switch(pred.type) {
    case 'const':
      return null
    case 'and':
    case 'or':
    case 'implies':
    case 'iff':
      return findSelectInPred(pred.left, varName)
        || findSelectInPred(pred.right, varName)
    case 'comp':
      return findSelectInIntExpr(pred.left, varName)
        || findSelectInIntExpr(pred.right, varName)
    case 'not':
    case 'forall':
    case 'exists':
      return findSelectInPred(pred.inner, varName)
    case 'call':
      return pred.args.reduce((res, arg) => res || (arg.type === 'store'
        ? findSelectInVar(arg)
        : findSelectInIntExpr(arg)), null)
    default:
      throw new Error(`Unsupported predicate type '${predicate.type}'.`)
  }
}

function findSelectInIntExpr(expr, varName) {
  switch (expr.type) {
    case 'const':
      return null
    case 'var':
      return findSelectInVar(expr.var, varName)
    case 'plus':
    case 'minus':
    case 'mult':
      return findSelectInIntExpr(expr.left, varName)
        || findSelectInIntExpr(expr.right, varName)
    case 'negate':
    case 'sum':
    case 'prod':
      return findSelectInIntExpr(expr.inner, varName)
    case 'call':
      return expr.args.reduce((res, arg) => res || (arg.type === 'store'
        ? findSelectInVar(arg)
        : findSelectInIntExpr(arg)), null)
    default:
      throw new Error(`Unsupported integer expression type '${intExpr.type}'.`)
  }
}

function findSelectInVar(variable, varName) {
  switch (variable.type)  {
    case 'name':
      return null
    case 'select':
      return intExprIsName(variable.selector, varName)
        ? variable
        : findSelectInVar(variable.base, varName)
    case 'store':
      return findSelectInVar(variable.base, varName)
        || findSelectInIntExpr(variable.selector, varName)
        || (variable.value.type === 'store'
              ? findSelectInVar(variable.value, varName)
              : findSelectInIntExpr(variable.value, varName))
    default:
      throw new Error(`Unsupported variable type '${variable.type}'.`)
  }
}

function intExprIsName(expr, name) {
  return expr.type === 'var'
    && expr.var.type === 'name'
    && expr.var.name === name
}

function convertToSimplifyIntExpr(intExpr, axiomTriggers) {
  const axiomTriggerResults = axiomTriggers
    .map(triggerObj => triggerObj.onIntegerExpression(intExpr))
    .filter(res => res !== null)

  if (axiomTriggerResults.length > 1) {
    // TODO: or should we just log it and take the first result?
    throw new Error('More than one axiom trigger is set by an expression.')
  }
  if (axiomTriggerResults.length === 1) {
    return axiomTriggerResults[0]
  }

  switch (intExpr.type) {
    case 'const':
      return intExpr.const.toString()
    case 'var':
      return convertToSimplifyVar(intExpr.var, axiomTriggers)
    case 'negate':
      return `(- 0 ${convertToSimplifyIntExpr(intExpr.inner, axiomTriggers)})`
    case 'plus':
    case 'minus':
    case 'mult': {
      const op = integerOperaion(intExpr.type)
      const left = convertToSimplifyIntExpr(intExpr.left, axiomTriggers)
      const right = convertToSimplifyIntExpr(intExpr.right, axiomTriggers)
      return `(${op} ${left} ${right})`
    }
    case 'call': {
      const args = intExpr.args.map(arg => arg.type === 'store'
        ? convertToSimplifyVar(arg, axiomTriggers)
        : convertToSimplifyIntExpr(arg, axiomTriggers))
      return `(${intExpr.name} ${args.join(' ')})`
    }
    case 'sum':
      throw new Error('No axiom trigger for sum.')
    case 'prod':
      throw new Error('No axiom trigger for prod.')
    default:
      throw new Error(`Unsupported integer expression type '${intExpr.type}'.`)
  }
}

function integerOperaion(opName) {
  switch (opName) {
    case 'plus':  return '+'
    case 'minus': return '-'
    case 'mult':  return '*'
    default: throw new Error(`Unsupported integer operation '${opName}'.`)
  }
}

function convertToSimplifyVar(variable, axiomTriggers) {
  const axiomTriggerResults = axiomTriggers
    .map(triggerObj => triggerObj.onVariable(variable))
    .filter(res => res !== null)

  if (axiomTriggerResults.length > 1) {
    // TODO: or should we just log it and take the first result?
    throw new Error('More than one axiom trigger is set by a variable.')
  }
  if (axiomTriggerResults.length === 1) {
    return axiomTriggerResults[0]
  }

  switch (variable.type) {
    case 'name':
      return variable.name
    case 'select': {
      const base = convertToSimplifyVar(variable.base, axiomTriggers)
      const selector = convertToSimplifyIntExpr(variable.selector, axiomTriggers)
      return `(select ${base} ${selector})`
    }
    case 'store': {
      const base = convertToSimplifyVar(variable.base, axiomTriggers)
      const selector = convertToSimplifyIntExpr(variable.selector, axiomTriggers)
      const value = variable.value.type === 'store'
        ? convertToSimplifyVar(variable.value, axiomTriggers)
        : convertToSimplifyIntExpr(variable.value, axiomTriggers)
      return `(store ${base} ${selector} ${value})`
    }
    default: throw new Error(`Unsupported variable type '${variable.type}'.`)
  }
}

