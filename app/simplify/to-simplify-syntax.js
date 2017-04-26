const { Axioms, getAxiomList } = require('./axioms')

/* `requiredAxioms` is an optional argument, which
 * is a bitwise-or combination of used axioms from `Axiom` enum.
*/
function convertToSimplifySyntax(predicates, requiredAxioms) {
  requiredAxioms = requiredAxioms || 0
  return getAxiomList(requiredAxioms)
    .then(axiomList => {
      const preds = predicates
        .map(p => convertToSimplifyPredicate(p, requiredAxioms))
      return axiomList.concat(preds).join(' ')
    })
}

function convertToSimplifyPredicate(predicate, axioms) {
  switch (predicate.type) {
    case 'const':
      return predicate.const ? 'TRUE' : 'FALSE'
    case 'not':
      return `(NOT ${convertToSimplifyPredicate(predicate.inner, axioms)})`
    case 'and':
    case 'or':
    case 'implies':
    case 'iff': {
      const op = booleanOperation(predicate.type)
      const left = convertToSimplifyPredicate(predicate.left, axioms)
      const right = convertToSimplifyPredicate(predicate.right, axioms)
      return `(${op} ${left} ${right})`
    }
    case 'comp': {
      const op = comparisonOperation(predicate.op)
      const left = convertToSimplifyIntExpr(predicate.left, axioms)
      const right = convertToSimplifyIntExpr(predicate.right, axioms)
      return `(${op} ${left} ${right})`
    }
    case 'exists': {
      if (axioms & Axioms.ARRAY_CONTAINS || axioms & Axioms.ARRAY_CONTAINS_REV) {
        const { lowerBoundary, upperBoundary } = parseCondition(predicate.condition, predicate.boundVar.name)
        const { array, name } = getArrayAndName(predicate.inner, predicate.boundVar.name)
        if (lowerBoundary && upperBoundary && array && name) {
          const a = convertToSimplifyIntExpr(lowerBoundary, axioms)
          const b = convertToSimplifyIntExpr(upperBoundary, axioms)
          const m = convertToSimplifyVar(name, axioms)
          const arr = convertToSimplifyVar(array, axioms)
          return `(contains ${a} ${b} ${arr} ${m})`
        }
      }
      const boundVar = convertToSimplifyVar(predicate.boundVar, axioms)
      const condition = convertToSimplifyPredicate(predicate.condition, axioms)
      const inner = convertToSimplifyPredicate(predicate.inner, axioms)
      return `(EXISTS (${boundVar}) (AND ${condition} ${inner}))`
    }
    case 'forall': {
      const boundVar = convertToSimplifyVar(predicate.boundVar, axioms)
      const condition = convertToSimplifyPredicate(predicate.condition, axioms)
      const inner = convertToSimplifyPredicate(predicate.inner, axioms)
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

// TODO: add the argument to each call
function convertToSimplifyIntExpr(intExpr, axioms) {
  switch (intExpr.type) {
    case 'const':
      return intExpr.const.toString()
    case 'var':
      return convertToSimplifyVar(intExpr.var, axioms)
    case 'negate':
      return `(- 0 ${convertToSimplifyIntExpr(intExpr.inner, axioms)})`
    case 'plus':
    case 'minus':
    case 'mult':
      const op = integerOperaion(intExpr.type)
      const left = convertToSimplifyIntExpr(intExpr.left, axioms)
      const right = convertToSimplifyIntExpr(intExpr.right, axioms)
      return `(${op} ${left} ${right})`
    case 'sum': {
      // TODO: should this code be concearned with this??
      if (!(axioms & Axioms.ARRAY_SUM) && !(axioms & Axioms.ARRAY_SUM_REV)) {
        throw new Error('No axiom for SUM quantifier is specified.')
      }
      const { lowerBoundary, upperBoundary } = parseCondition(intExpr.condition, intExpr.boundVar.name)
      if (!lowerBoundary || !upperBoundary) {
        throw new Error('Unsupported quantifier condition format.')
      }
      const array = getArray(intExpr.inner, intExpr.boundVar.name)
      if (!array) {
        throw new Error('Unsupported quantifier inner expression format.')
      }
      const a = convertToSimplifyIntExpr(lowerBoundary, axioms)
      const b = convertToSimplifyIntExpr(upperBoundary, axioms)
      const arr = convertToSimplifyVar(array, axioms)
      return `(sum ${a} ${b} ${arr})`
    }
    case 'prod': {
      // TODO: should this code be concearned with this??
      if (!(axioms & Axioms.ARRAY_PROD) && !(axioms & Axioms.ARRAY_PROD_REV)) {
        throw new Error('No axiom for PROD quantifier is specified.')
      }
      const { lowerBoundary, upperBoundary } = parseCondition(intExpr.condition, intExpr.boundVar.name)
      if (!lowerBoundary || !upperBoundary) {
        throw new Error('Unsupported quantifier condition format.')
      }
      const array = getArray(intExpr.inner, intExpr.boundVar.name)
      if (!array) {
        throw new Error('Unsupported quantifier inner expression format.')
      }
      const a = convertToSimplifyIntExpr(lowerBoundary, axioms)
      const b = convertToSimplifyIntExpr(upperBoundary, axioms)
      const arr = convertToSimplifyVar(array, axioms)
      return `(prod ${a} ${b} ${arr})`
    }
    default: throw new Error(`Unsupported integer expression type '${intExpr.type}'.`)
  }
}

function parseCondition(condition, boundVarName) {
  if (condition.type !== 'and'
   || condition.left.type !== 'comp'
   || condition.right.type !== 'comp')
  {
    return { lowerBoundary: null, upperBoundary: null }
  }

  const left = getBoundary(condition.left, boundVarName)
  const right = getBoundary(condition.right, boundVarName)

  return {
    lowerBoundary: left.lowerBoundary ? left.lowerBoundary : right.lowerBoundary,
    upperBoundary: left.upperBoundary ? left.upperBoundary : right.upperBoundary
  }
}

function getBoundary(comparison, boundVarName) {
  let boundVarOnLeft = intExprIsName(comparison.left, boundVarName)
  let boundVarOnRight = intExprIsName(comparison.right, boundVarName)

  if (boundVarOnLeft && boundVarOnRight) {
    return { lowerBoundary: null, upperBoundary: null }
  }
  const otherExpression = boundVarOnLeft ? comparison.right : comparison.left
  const one = { type: 'const', const: 1 }
  const otherExpressionPlusOne = { type: 'plus', left: otherExpression, right: one }
  const otherExpressionMinusOne = { type: 'minus', left: otherExpression, right: one }

  switch (comparison.op) {
    case '<':
      return {
        lowerBoundary: boundVarOnLeft ? null : otherExpressionPlusOne,
        upperBoundary: boundVarOnLeft ? otherExpressionMinusOne : null
      }
    case '<=':
      return {
        lowerBoundary: boundVarOnLeft ? null : otherExpression,
        upperBoundary: boundVarOnLeft ? otherExpression : null
      }
    case '>':
      return {
        lowerBoundary: boundVarOnLeft ? otherExpressionPlusOne : null,
        upperBoundary: boundVarOnLeft ? null : otherExpressionMinusOne
      }
    case '>=':
      return {
        lowerBoundary: boundVarOnLeft ? otherExpression : null,
        upperBoundary: boundVarOnLeft ? null : otherExpression
      }
    default:
      return { lowerBoundary: null, upperBoundary: null }
  }
}

function getArray(expr, boundVarName) {
  const valid = expr.type === 'var'
             && expr.var.type === 'select'
             && intExprIsName(expr.var.selector, boundVarName)
  return valid ? expr.var.base : null
}

function intExprIsName(expr, name) {
  return expr.type === 'var'
      && expr.var.type === 'name'
      && expr.var.name === name
}

// For expression a[k] = m returns a and m.
function getArrayAndName(pred, boundVarName) {
  let array = null, name = null

  if (pred.type === 'comp' && pred.op === '=') {
    array = getArray(pred.left, boundVarName)
    if (!array) {
      array = getArray(pred.right, boundVarName)
      name = pred.left.type === 'var' ? pred.left.var : null
    } else {
      name = pred.right.type === 'var' ? pred.right.var : null
    }
  }

  return { array, name }
}

function getName(expr) {
  return expr.type === 'var' && expr.var.type === 'name'
    ? expr.var
    : null
}

function integerOperaion(opName) {
  switch (opName) {
    case 'plus':  return '+'
    case 'minus': return '-'
    case 'mult':  return '*'
    default: throw new Error(`Unsupported integer operation '${opName}'.`)
  }
}

function convertToSimplifyVar(variable, axioms) {
  switch (variable.type) {
    case 'name':
      return variable.name
    case 'select': {
      const base = convertToSimplifyVar(variable.base, axioms)
      const selector = convertToSimplifyIntExpr(variable.selector, axioms)
      return `(select ${base} ${selector})`
    }
    case 'store': {
      const base = convertToSimplifyVar(variable.base, axioms)
      const selector = convertToSimplifyIntExpr(variable.selector, axioms)
      const value = convertToSimplifyIntExpr(variable.value, axioms)
      return `(store ${base} ${selector} ${value})`
    }
    default: throw new Error(`Unsupported variable type '${variable.type}'.`)
  }
}


module.exports = convertToSimplifySyntax


// For testing purposes
if (!module.parent) {
  let jsonPredicate = ''
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read()
    if (chunk !== null) {
      jsonPredicate += chunk
    }
  })
  process.stdin.on('end', () => {
    const predicate = JSON.parse(jsonPredicate)
    const allAxioms = -1  // -1 = 0xFFF...F
    const result = convertToSimplifyPredicate(predicate, allAxioms)
    console.log(result)
  })
}
