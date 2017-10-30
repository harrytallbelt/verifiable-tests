const {allNamesInPredicate, allNamesInIntExpr, allNamesInVariable } = require('./names-in-pred')
const { flatten } = require('./utils')

function substitutePredicate(pred, names, substitutions) {
  const getUniqueName = createUniqueNameGenerator(pred, null, null, names, substitutions)
  return substitutePredicateImpl(pred, names, substitutions, getUniqueName)
}

function substituteIntExpr(expr, names, substitutions) {
  const getUniqueName = createUniqueNameGenerator(null, expr, null, names, substitutions)
  return substituteIntExprImpl(expr, names, substitutions, getUniqueName)
}

function substituteVariable(variable, names, substitutions) {
  const getUniqueName = createUniqueNameGenerator(null, null, variable, names, substitutions)
  return substituteVariableImpl(variable, names, substitutions, getUniqueName)
}

function createUniqueNameGenerator(pred, expr, variable, names, substitutions) {
  const maxNameLenInPred = pred
    ? Math.max(... allNamesInPredicate(pred).map(n => n.length))
    : 0
  const maxNameLenInExpr = expr
    ? Math.max(... allNamesInIntExpr(expr).map(n => n.length))
    : 0
  const maxNameLenInVar = variable
    ? Math.max(... allNamesInVariable(variable).map(n => n.length))
    : 0
  const maxNameLenInNames = Math.max(... names.map(n => n.name.length))
  const maxNameLenInExprs = Math.max(... substitutions
    .map(e => e.type === 'store' ? allNamesInVariable(e) : allNamesInIntExpr(e))
    .map(ns => ns.map(n => n.length))
    .map(lens => Math.max(... lens)))
  
  const maxNameLen = Math.max(maxNameLenInPred, maxNameLenInExpr,
    maxNameLenInVar, maxNameLenInNames, maxNameLenInExprs)
  
  let uniqueName = 'uniqueName'
  const paddingLen = Math.max(maxNameLen - uniqueName.length, 0)
  uniqueName += 'A'.repeat(paddingLen)
  
  let timesUsed = 0
  return () => uniqueName + timesUsed++
}

function substitutePredicateImpl(pred, names, substitutions, getUniqueName) {
  switch (pred.type) {
    case 'const':
      return pred
    case 'not':
      return {
        type: pred.type,
        inner: substitutePredicateImpl(pred.inner, names, substitutions, getUniqueName)
      }
    case 'or':
    case 'implies':
    case 'iff':
    case 'and':
      return {
        type: pred.type,
        left: substitutePredicateImpl(pred.left, names, substitutions, getUniqueName),
        right: substitutePredicateImpl(pred.right, names, substitutions, getUniqueName)
      }
    case 'comp':
      return {
        type: pred.type,
        op: pred.op,
        left: substituteIntExprImpl(pred.left, names, substitutions, getUniqueName),
        right: substituteIntExprImpl(pred.right, names, substitutions, getUniqueName)
      }
    case 'call':
      return {
        type: pred.type,
        name: pred.name,
        args: pred.args.map(arg => substituteInArg(arg, names, substitutions))
      }
    case 'exists':
    case 'forall': {
      const uniqueBoundVar = { type: 'name', name: getUniqueName() }
      const { newNames, newSubstitutions } =
        newNamesExprsForQuantifier(pred, names, substitutions, uniqueBoundVar)
      return {
        type: pred.type,
        boundVar: uniqueBoundVar,
        condition: substitutePredicateImpl(pred.condition, newNames, newSubstitutions, getUniqueName),
        inner: substitutePredicateImpl(pred.inner, newNames, newSubstitutions, getUniqueName)
      }
    }
    default:
      throw new Error(`Unknown predicate type: ${pred.type}.`)
  }
}


function substituteIntExprImpl(intExpr, names, substitutions, getUniqueName) {
  switch (intExpr.type) {
    case 'const':
      return intExpr
    case 'var': {
      let newValue = substituteVariableImpl(intExpr.var, names, substitutions, getUniqueName)
      if (newValue.type === 'store') {
        throw new Error('An attempt to substitute a map in place of integer expression.')
      }
      // `substituteVariableImpl` sometimes returns an integer expression
      // and sometimes a variable. In the second case, the variables should
      // be wrapped in a 'var' integer expression node before proceeding.
      // This is the right place to do this, because `substituteVariableImpl`
      // is recursive, so its result sometimes has to be just a variable.
      if (newValue.type === 'name' || newValue.type === 'select') {
        newValue = { type: 'var', var: newValue }
      }
      return newValue
    }
    case 'negate':
      return {
        type: intExpr.type,
        inner: substituteIntExprImpl(intExpr.inner, names, substitutions, getUniqueName)
      }
    case 'plus':
    case 'minus':
    case 'mult':
      return {
        type: intExpr.type,
        left: substituteIntExprImpl(intExpr.left, names, substitutions, getUniqueName),
        right: substituteIntExprImpl(intExpr.right, names, substitutions, getUniqueName)
      }
    case 'call':
      return {
        type: intExpr.type,
        name: intExpr.name,
        args: intExpr.args.map(arg => substituteInArg(arg, names, substitutions))
      }
    case 'sum':
    case 'prod': {
      const uniqueBoundVar = { type: 'name', name: getUniqueName() }
      const { newNames, newSubstitutions } =
        newNamesExprsForQuantifier(intExpr, names, substitutions, uniqueBoundVar)
      return {
        type: intExpr.type,
        boundVar: uniqueBoundVar,
        condition: substitutePredicateImpl(intExpr.condition, newNames, newSubstitutions, getUniqueName),
        inner: substituteIntExprImpl(intExpr.inner, newNames, newSubstitutions, getUniqueName)
      }
    }
    case 'count': {
      const uniqueBoundVar = { type: 'name', name: getUniqueName() }
      const { newNames, newSubstitutions } =
        newNamesExprsForQuantifier(intExpr, names, substitutions, uniqueBoundVar)
      return {
        type: intExpr.type,
        boundVar: uniqueBoundVar,
        condition: substitutePredicateImpl(intExpr.condition, newNames, newSubstitutions, getUniqueName),
        inner: substitutePredicateImpl(intExpr.inner, newNames, newSubstitutions, getUniqueName)
      }
    }
    default:
     throw new Error(`Unknown integer expression type: ${intExpr.type}.`)
  }
}

function substituteInArg(arg, names, substitutions) {
  if (arg.type === 'store') {
    return substituteVariableImpl(arg, names, substitutions)
  }
  try {
    return substituteIntExprImpl(arg, names, substitutions)
  }
  catch (err) {
    if (arg.type === 'var' && arg.var.type === 'name') {
      // We tried to substitute a name var by some map var, but
      // it didn't work, because it was wrapped in a var int expr.
      return substituteVariableImpl(arg.var, names, substitutions)
    }
    throw err
  }
}

// 1) Removes any substitutions of quantifier.boundVar, because 
// bound var is not objet to substitutions and, if the `names` list
// contains the bound var's name, it actually means some other var.
// 2) Forces a substitution of the bound var for a var with an unique name.
// This handles cases like [(QUANT k : ~ : x)]_{x}^{k+1}, where k is some other var.
function newNamesExprsForQuantifier(quantifier, names, substitutions, uniqueBoundVar) {
  const newPairs = names
    .map((name, i) => ({ var: name, expr: substitutions[i] }))
    .filter(pair => quantifier.boundVar.name !== pair.var.name)

  const newNames = newPairs.map(p => p.var)
  newNames.push(quantifier.boundVar)
  
  const newSubstitutions = newPairs.map(p => p.expr)
  newSubstitutions.push(uniqueBoundVar)
  
  return { newNames, newSubstitutions }
}

function substituteVariableImpl(variable, names, substitutions, getUniqueName) {
  switch (variable.type) {
    case 'name':
      const nameIndex = names.findIndex(n => n.name === variable.name)
      return nameIndex < 0 ? variable : substitutions[nameIndex]
    case 'select': {
      let base = substituteVariableImpl(variable.base, names, substitutions, getUniqueName)
      if (base.type === 'var') { base = base.var }
      if (!isVariable(base)) {
        throw new Error(`An attempt to substitute expr of type ${base.type} instead of a map.`)
      }
      return {
        type: 'select',
        base: base,
        selector: substituteIntExprImpl(variable.selector, names, substitutions, getUniqueName)
      }
    }
    case 'store': {
      const base = substituteVariableImpl(variable.base, names, substitutions, getUniqueName)
      if (base.type === 'var') { base = base.var }
      if (!isVariable(base)) {
        throw new Error(`An attempt to substitute expr of type ${base.type} instead of a map.`)
      }
      return {
        type: 'store',
        base: base,
        selector: substituteIntExprImpl(variable.selector, names, substitutions, getUniqueName),
        value: variable.value.type === 'store'
          ? substituteVariableImpl(variable.value, names, substitutions, getUniqueName)
          : substituteIntExprImpl(variable.value, names, substitutions, getUniqueName)
      }
    }
    default:
      throw new Error(`Unknown variable type: ${variable.type}.`)
  }
}

function isVariable(node) {
  return node.type === 'name'
      || node.type === 'select'
      || node.type === 'store'
}

module.exports.substitutePredicate = substitutePredicate
module.exports.substituteIntExpr = substituteIntExpr
module.exports.substituteVariable = substituteVariable
