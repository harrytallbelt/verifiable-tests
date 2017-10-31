module.exports.onIntegerExpression = onIntegerExpression

// Applies axiom to expressions of form
// (SUM k : from <= k <= to : a[i][k] * x[k]),
// where variable's names can be different,
// multiplication order reversed, and condition expression
// is a three variable cmp chain that can use <, <=, >, >=.
// Returns '(rowvecprod from to i a x)'.
function onIntegerExpression(expression, convertPredicate, convertIntegerExpression, convertVariable) {
  if (expression.type !== 'sum' || expression.inner.type !== 'mult') {
    return null
  }
  const { lowerBoundary, upperBoundary } = parseCondition(expression.condition, expression.boundVar.name)
  if (!lowerBoundary || !upperBoundary) {
    return null
  }
  let aExpr = null, xExpr = null
  if (isSingleSelect(expression.inner.left)) {
    xExpr = expression.inner.left
    aExpr = expression.inner.right
  } else if (isSingleSelect(expression.inner.right)) {
    xExpr = expression.inner.right
    aExpr = expression.inner.left
  } else {
    return null
  }
  const x = xExpr.var.base, j_x = xExpr.var.selector
  const parsedA = parseDoubleSelect(aExpr)
  const a = parsedA.arr, i = parsedA.row, j_a = parsedA.col
  if (!a || !i || !j_a) {
    return null
  }
  if (!intExprIsName(j_a, expression.boundVar.name) || !intExprIsName(j_x, expression.boundVar.name)) {
    return null
  }
  const from = convertIntegerExpression(lowerBoundary)
  const to = convertIntegerExpression(upperBoundary)
  const row = convertIntegerExpression(i)
  const _a = convertVariable(a)
  const _x = convertVariable(x)
  return `(rowvecprod ${from} ${to} ${row} ${_a} ${_x})`
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

function intExprIsName(expr, name) {
  return expr.type === 'var'
    && expr.var.type === 'name'
    && expr.var.name === name
}

function parseDoubleSelect(intExpr) {
  if (intExpr.type !== 'var' && intExpr.var.type !== 'select') {
    return { arr: null, row: null, col: null }
  }
  const col = intExpr.var.selector
  if (intExpr.var.base.type !== 'select') {
    return { arr: null, row: null, col }
  }
  const row = intExpr.var.base.selector
  const arr = intExpr.var.base.base
  return { arr, row, col }
}

function isSingleSelect(intExpr) {
  return intExpr.type === 'var'
    && intExpr.var.type === 'select'
    && intExpr.var.base.type !== 'select'
}
