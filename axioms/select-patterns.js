module.exports.onPredicate = onPredicate

function onPredicate(predicate, convertPredicate, convertIntegerExpression, convertVariable) {
  if (predicate.type !== 'forall') {
    return null
  }
  const boundVar = convertVariable(predicate.boundVar)
  const condition = convertPredicate(predicate.condition)
  const inner = convertPredicate(predicate.inner)
  const selectWithBoundVar = findSelectInPred(predicate.inner, predicate.boundVar.name)
  const pats = selectWithBoundVar
    ? `(PATS ${convertVariable(selectWithBoundVar)})`
    : ''
  return `(FORALL (${boundVar}) ${pats} (IMPLIES ${condition} ${inner}))`
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
