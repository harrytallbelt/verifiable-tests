// We create exports object before requiring axioms.js,
// because there is a circular dependence between these two modules.
module.exports.convertToSimplifySyntax = convertToSimplifySyntax
module.exports.convertToSimplifyPredicate = convertToSimplifyPredicate
module.exports.convertToSimplifyIntExpr = convertToSimplifyIntExpr
module.exports.convertToSimplifyVar = convertToSimplifyVar

const { getAxioms, getParsingFunctions } = require('./axioms')

/* `requiredAxioms` is an optional argument, which
 * is a list of the used axioms' names.
*/
function convertToSimplifySyntax(predicates, requiredAxioms) {
  requiredAxioms = requiredAxioms || []
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
      return `(FORALL (${boundVar}) (IMPLIES ${condition} ${inner}))`
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

