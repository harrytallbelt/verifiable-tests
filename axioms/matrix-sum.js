module.exports.onIntegerExpression = onIntegerExpression

// Applies axiom to expressions of form
// (SUM i : from1 <= i <= to1 : (SUM j : from2 <= j <= to2 : a[i][j])),
// where variable's names can be different, and condition expression is
// a three variable cmp chain that can use <, <=, >, >=.
// Returns '(msum from1 to1 from2 to2 a)'.
function onIntegerExpression(expression, convertPredicate, convertIntegerExpression, convertVariable) {
  if (expression.type !== 'sum' || expression.inner.type !== 'sum') {
    return null
  }
  const parsedBoundaries1 = parseCondition(expression.condition, expression.boundVar.name)
  const parsedBoundaries2 = parseCondition(expression.inner.condition, expression.inner.boundVar.name)
  const lowerBoundary1 = parsedBoundaries1.lowerBoundary, upperBoundary1 = parsedBoundaries1.upperBoundary
  const lowerBoundary2 = parsedBoundaries2.lowerBoundary, upperBoundary2 = parsedBoundaries2.upperBoundary
  if (!lowerBoundary1 || !upperBoundary1 || !lowerBoundary2 || !upperBoundary2) {
    return null
  }
  const { arr, row, col } = parseDoubleSelect(expression.inner.inner)
  if (!arr || !row || !col
    || !intExprIsName(row, expression.boundVar.name)
    || !intExprIsName(col, expression.inner.boundVar.name))
  {
    return null
  }
  const ifrom = convertIntegerExpression(lowerBoundary1)
  const ito = convertIntegerExpression(upperBoundary1)
  const jfrom = convertIntegerExpression(lowerBoundary2)
  const jto = convertIntegerExpression(upperBoundary2)
  const matrix = convertVariable(arr)
  return `(msum ${ifrom} ${ito} ${jfrom} ${jto} ${matrix})`
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
