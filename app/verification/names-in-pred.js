/**
 * Returns a string array, representing the set of all the names,
 * used in a predicate.
 * @param pred A predicate representation object.
 * @param options An object, that can contain boolean fields:
 * - includeBoundVars,
 * - includeShorthandNames.
 * The default value for both options is `false`.
 * @returns A string array, representing the set of all the names,
 * used in a predicate.
 */
function allNamesInPredicate(pred, options = {}) {
  return Object.keys(allNamesInPredicateImpl(pred, options))
}

/**
 * Returns a string array, representing the set of all the names,
 * used in an integer expression.
 * @param pred An integer expression representation object.
 * @param options An object, that can contain boolean fields:
 * - includeBoundVars,
 * - includeShorthandNames.
 * The default value for both options is `false`.
 * @returns A string array, representing the set of all the names,
 * used in an integer expression.
 */
function allNamesInIntExpr(expr, options = {}) {
  return Object.keys(allNamesInIntExprImpl(expr, options))
}

/**
 * Returns a string array, representing the set of all the names,
 * used in a variable.
 * @param pred A variable representation object.
 * @param options An object, that can contain boolean fields:
 * - includeBoundVars,
 * - includeShorthandNames.
 * The default value for both options is `false`.
 * @returns A string array, representing the set of all the names,
 * used in a variable.
 */
function allNamesInVariable(variable, options = {}) {
  return Object.keys(allNamesInVariableImpl(variable, options))
}

function allNamesInPredicateImpl(pred, options) {
  switch (pred.type) {
    case 'const':
      return {}
    case 'not':
      return allNamesInPredicateImpl(pred.inner, options)
    case 'and':
    case 'or':
    case 'implies':
    case 'iff':
      return Object.assign(
        allNamesInPredicateImpl(pred.left, options),
        allNamesInPredicateImpl(pred.right, options))
    case 'comp':
      return Object.assign(
        allNamesInIntExprImpl(pred.left, options),
        allNamesInIntExprImpl(pred.right, options))
    case 'call': {
      const namesInArgs = pred.args
        .map(arg => allNamesForExprOrStore(arg, options))
      const names = Object.assign(... namesInArgs)
      if (options.includeShorthandNames) {
        names[pred.name] = true
      }
      return names
    }
    case 'exists':
    case 'forall':{
      const names = Object.assign(
        allNamesInPredicateImpl(pred.condition, options),
        allNamesInPredicateImpl(pred.inner, options))
      if (!options.includeBoundVars) {
        delete names[pred.boundVar.name]
      }
      return names
    }
    default:
      throw new Error(`Unexpected type of predicate: ${pred.type}.`)
  }
}

function allNamesInIntExprImpl(expr, options) {
  switch (expr.type) {
    case 'const':
      return {}
    case 'var':
      return allNamesInVariableImpl(expr.var, options)
    case 'negate':
      return allNamesInIntExprImpl(expr.inner, options)
    case 'plus':
    case 'minus':
    case 'mult':
      return Object.assign(
        allNamesInIntExprImpl(expr.left, options),
        allNamesInIntExprImpl(expr.right, options))
    case 'call': {
      const namesInArgs = expr.args
        .map(arg => allNamesForExprOrStore(arg, options))
      const names = Object.assign(... namesInArgs)
      if (options.includeShorthandNames) {
        names[expr.name] = true
      }
      return names
    }
    case 'sum':
    case 'prod': {
      const names = Object.assign(
        allNamesInPredicateImpl(expr.condition, options),
        allNamesInIntExprImpl(expr.inner, options))
      if (!options.includeBoundVars) {
        delete names[expr.boundVar.name]
      }
      return names
    }
    case 'count': {
      const names = Object.assign(
        allNamesInPredicateImpl(expr.condition, options),
        allNamesInPredicateImpl(expr.inner, options))
      if (!options.includeBoundVars) {
        delete names[expr.boundVar.name]
      }
      return names
    }
    default:
      throw new Error(`Unexpected type of expression: ${expr.type}.`)
  }
}

function allNamesInVariableImpl(variable, options) {
  switch (variable.type) {
    case 'name':{
      const names = {}
      names[variable.name] = true
      return names
    }
    case 'select':
      return Object.assign(
        allNamesInVariableImpl(variable.base, options),
        allNamesInIntExprImpl(variable.selector, options))
    case 'store':
      return Object.assign(
        allNamesInVariableImpl(variable.base, options),
        allNamesInIntExprImpl(variable.selector, options),
        allNamesForExprOrStore(variable.value, options))
    default:
      throw new Error(`Unexpected type of variable: ${variable.type}.`)
  }
}

function allNamesForExprOrStore(exprOrStore, options) {
  return exprOrStore.type === 'store'
    ? allNamesInVariableImpl(exprOrStore, options)
    : allNamesInIntExprImpl(exprOrStore, options)
}

module.exports.allNamesInPredicate = allNamesInPredicate
module.exports.allNamesInIntExpr = allNamesInIntExpr
module.exports.allNamesInVariable = allNamesInVariable
