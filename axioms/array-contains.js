module.exports.onPredicate = onPredicate

function onPredicate(predicate, convertPredicate, convertIntegerExpression, convertVariable) {
  if (predicate.type !== 'exists') {
    return null
  }
  const { lowerBoundary, upperBoundary } = parseCondition(predicate.condition, predicate.boundVar.name)
  const { array, name } = getArrayAndName(predicate.inner, predicate.boundVar.name)
  if (!lowerBoundary || !upperBoundary || !array || !name) {
    return null
  }
  const a = convertIntegerExpression(lowerBoundary)
  const b = convertIntegerExpression(upperBoundary)
  const m = convertVariable(name)
  const arr = convertVariable(array)
  return `(contains ${a} ${b} ${arr} ${m})`
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
