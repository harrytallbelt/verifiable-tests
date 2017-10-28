function allNamesInPredicate(pred, includeBoundVars = false) {
  return Object.keys(allNamesInPredicateImpl(pred, includeBoundVars))
}

function allNamesInIntExpr(expr, includeBoundVars = false) {
  return Object.keys(allNamesInIntExprImpl(expr, includeBoundVars))
}

function allNamesInVariable(variable, includeBoundVars = false) {
  return Object.keys(allNamesInVariableImpl(variable, includeBoundVars))
}

function allNamesInPredicateImpl(pred, includeBoundVars) {
  switch (pred.type) {
    case 'const':
      return {}
    case 'not':
      return allNamesInPredicateImpl(pred.inner, includeBoundVars)
    case 'and':
    case 'or':
    case 'implies':
    case 'iff':
      return Object.assign(
        allNamesInPredicateImpl(pred.left, includeBoundVars),
        allNamesInPredicateImpl(pred.right, includeBoundVars))
    case 'comp':
      return Object.assign(
        allNamesInIntExprImpl(pred.left, includeBoundVars),
        allNamesInIntExprImpl(pred.right, includeBoundVars))
    case 'call': {
      const namesInArgs = pred.args
        .map(arg => allNamesForExprOrStore(arg, includeBoundVars))
      const names = Object.assign(... namesInArgs)
      names[pred.name] = true
      return names
    }
    case 'perm':
      return Object.assign(
        allNamesInVariableImpl(pred.arr1, includeBoundVars),
        allNamesInVariableImpl(pred.arr2, includeBoundVars),
        allNamesInIntExprImpl(pred.n, includeBoundVars))
    case 'exists':
    case 'forall':{
      const names = Object.assign(
        allNamesInPredicateImpl(pred.condition, includeBoundVars),
        allNamesInPredicateImpl(pred.inner, includeBoundVars))
      if (!includeBoundVars) {
        delete names[pred.boundVar.name]
      }
      return names
    }
    default:
      throw new Error(`Unexpected type of predicate: ${pred.type}.`)
  }
}

function allNamesInIntExprImpl(expr, includeBoundVars) {
  switch (expr.type) {
    case 'const':
      return {}
    case 'var':
      return allNamesInVariableImpl(expr.var, includeBoundVars)
    case 'negate':
      return allNamesInIntExprImpl(expr.inner, includeBoundVars)
    case 'plus':
    case 'minus':
    case 'mult':
      return Object.assign(
        allNamesInIntExprImpl(expr.left, includeBoundVars),
        allNamesInIntExprImpl(expr.right, includeBoundVars))
    case 'call': {
      const namesInArgs = expr.args
        .map(arg => allNamesForExprOrStore(arg, includeBoundVars))
      const names = Object.assign(... namesInArgs)
      names[expr.name] = true
      return names
    }
    case 'sum':
    case 'prod': {
      const names = Object.assign(
        allNamesInPredicateImpl(expr.condition, includeBoundVars),
        allNamesInIntExprImpl(expr.inner, includeBoundVars))
      if (!includeBoundVars) {
        delete names[expr.boundVar.name]
      }
      return names
    }
    case 'count': {
      const names = Object.assign(
        allNamesInPredicateImpl(expr.condition, includeBoundVars),
        allNamesInPredicateImpl(expr.inner, includeBoundVars))
      if (!includeBoundVars) {
        delete names[expr.boundVar.name]
      }
      return names
    }
    default:
      throw new Error(`Unexpected type of expression: ${expr.type}.`)
  }
}

function allNamesInVariableImpl(variable, includeBoundVars) {
  switch (variable.type) {
    case 'name':{
      const names = {}
      names[variable.name] = true
      return names
    }
    case 'select':
      return Object.assign(
        allNamesInVariableImpl(variable.base, includeBoundVars),
        allNamesInIntExprImpl(variable.selector, includeBoundVars))
    case 'store':
      return Object.assign(
        allNamesInVariableImpl(variable.base, includeBoundVars),
        allNamesInIntExprImpl(variable.selector, includeBoundVars),
        allNamesForExprOrStore(variable.value, includeBoundVars))
    default:
      throw new Error(`Unexpected type of variable: ${variable.type}.`)
  }
}

function allNamesForExprOrStore(exprOrStore, includeBoundVars) {
  return exprOrStore.type === 'store'
    ? allNamesInVariableImpl(exprOrStore, includeBoundVars)
    : allNamesInIntExprImpl(exprOrStore, includeBoundVars)
}

module.exports.allNamesInPredicate = allNamesInPredicate
module.exports.allNamesInIntExpr = allNamesInIntExpr
module.exports.allNamesInVariable = allNamesInVariable
