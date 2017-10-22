module.exports.onIntegerExpression = onIntegerExpression

function onIntegerExpression(expression, convertPredicate, convertIntegerExpression, convertVariable) {
  if (expression.type !== 'sum' || expression.inner.type !== 'mult') {
    return null
  }
  const { lowerBoundary, upperBoundary } = parseCondition(expression.condition, expression.boundVar.name)
  if (!lowerBoundary || !upperBoundary) {
    return null
  }
  const parsedArr1 = parseDoubleSelect(expression.inner.left)
  const parsedArr2 = parseDoubleSelect(expression.inner.right)
  const arr1 = parsedArr1.arr, ind11 = parsedArr1.row, ind12 = parsedArr1.col
  const arr2 = parsedArr2.arr, ind21 = parsedArr2.row, ind22 = parsedArr2.col
  if (!arr1 || !arr2 || !ind11 || !ind12 || !ind21 || !ind22) {
    return null
  }
  let row = null, col = null
  if (intExprIsName(ind12, expression.boundVar.name) && intExprIsName(ind21, expression.boundVar.name)) {
    row = ind11; col = ind22
  } else if (intExprIsName(ind11, expression.boundVar.name) && intExprIsName(ind22, expression.boundVar.name)) {
    row = ind21; col = ind12
  } else {
    return null
  }
  const from = convertIntegerExpression(lowerBoundary)
  const to = convertIntegerExpression(upperBoundary)
  const _row = convertIntegerExpression(row)
  const _col = convertIntegerExpression(col)
  const _arr1 = convertVariable(arr1)
  const _arr2 = convertVariable(arr2)
  return `(rowcolprod ${from} ${to} ${_row} ${_col} ${_arr1} ${_arr2})`
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
