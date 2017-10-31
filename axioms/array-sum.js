module.exports.onIntegerExpression = onIntegerExpression

// Applies axiom to expressions of form
// (SUM k : from <= k <= to : a[k]),
// where variable's names can be different,
// and condition expression is a three variable
// cmp chain that can use <, <=, >, >=.
// Returns '(sum from to a)'.
function onIntegerExpression(expression, convertPredicate, convertIntegerExpression, convertVariable) {
  if (expression.type !== 'sum') {
    return null
  }
  const array = getArray(expression.inner, expression.boundVar.name)
  if (!array) {
    return null
  }
  const { lowerBoundary, upperBoundary } = parseCondition(expression.condition, expression.boundVar.name)
  if (!lowerBoundary || !upperBoundary) {
    return null
  }
  const from = convertIntegerExpression(lowerBoundary)
  const to = convertIntegerExpression(upperBoundary)
  const arr = convertVariable(array)
  return `(sum ${from} ${to} ${arr})`
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

  if (boundVarOnLeft && boundVarOnRight || !boundVarOnLeft && !boundVarOnRight) {
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
