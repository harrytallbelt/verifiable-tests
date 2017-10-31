const { parsePredicate, parseIntegerExpression } = require('../predicate-parser')
const { substitutePredicate, substituteIntExpr } = require('./substitution')
const { allNamesInPredicate, allNamesInIntExpr } = require('./names-in-pred')
const { arraysAreEqual } = require('./utils')

function parseTask(task) {
  let precondition = parsePredicate(task.precondition).predicate
  let postcondition = parsePredicate(task.postcondition).predicate
  let invariants = (task.invariants || [])
    .map(src => parsePredicate(src).predicate)
  let variants = (task.variants || [])
    .map(src => parseIntegerExpression(src).expression)
  const axioms = task.axioms || []
  
  let err = ''
  if (!precondition)                         err += 'Invalid precondition. '
  if (!postcondition)                        err += 'Invalid postcondition. '
  if (invariants.some(inv => !inv))          err += 'Invalid invariants. '
  if (variants.some(v => !v))                err += 'Invalid variants. '
  if (variants.length !== invariants.length) err += 'Different number of variants and invariants. '
  if (err) return { spec: null, axioms, error: new Error(err) }

  let shorthands = null
  try { shorthands = parseShorthands(task.shorthands || []) }
  catch (error) {
    return { spec: null, axioms, error }
  }

  precondition = shorthands.applyToPred(precondition)
  postcondition = shorthands.applyToPred(postcondition)
  invariants = invariants.map(shorthands.applyToPred)
  variants = variants.map(shorthands.applyToIntExpr)
  
  err = ''
  if (!precondition)                err += 'Cannot apply shorthands to precondition. '
  if (!postcondition)               err += 'Cannot apply shorthands to postcondition. '
  if (invariants.some(inv => !inv)) err += 'Cannot apply shorthands to invariants. '
  if (variants.some(v => !v))       err += 'Cannot apply shorthands to variants. '
  if (err) return { spec: null, axioms, error: new Error(err) }

  const spec = { precondition, postcondition, invariants, variants }
  return { spec, axioms, error: null }
}

function parseShorthands(shorthands) {
  const parsedShs = shorthands.map(parseShorthand) // throws
  let predShs = parsedShs.filter(sh => sh.type === 'pred')
  let exprShs = parsedShs.filter(sh => sh.type === 'expr')
  
  // Apply shorthands to each other, assuming there is no recursion.
  // They can be nested once like this a(x) = b(x), when b(x) = smth,
  // nested twice like this a(x) = b(x), when b(x) = c(x), when c(x) = smth,
  // but N shorthands cannot be nested more then N-1 times, without recursion.
  for (let k = 0; k < (predShs.length + exprShs.length) - 1; ++k) {
    predShs.forEach((sh, i) => {
      sh.definition = applyShorthandsToPredicate(predShs, exprShs, sh.definition)
    })
    exprShs.forEach((sh, i) => {
      sh.definition = applyShorthandsToIntExpr(predShs, exprShs, sh.definition)
    })
  }

  return {
    applyToPred: pred => {
      try { return applyShorthandsToPredicate(predShs, exprShs, pred) }
      catch (e) { return null }
    },
    applyToIntExpr: expr => {
      try { return applyShorthandsToIntExpr(predShs, exprShs, expr) }
      catch (e) { return null }
    }
  }
}

function parseShorthand(sh) {
  const undcheckedArgs = sh.args.map(parseIntegerExpression)
  const isBadArg = uarg => uarg.errors.length > 0
    || uarg.expression.type !== 'var'
    || uarg.expression.var.type !== 'name'
  if (undcheckedArgs.some(isBadArg)) {
    throw new Error('Cannot parse shorthand\'s arguments.')
  }
  let namesInDefinition = []
  let type = 'pred'
  let definition = parsePredicate(sh.definition).predicate
  if (definition) {
    namesInDefinition = allNamesInPredicate(definition)
  } else {
    type = 'expr'
    definition = parseIntegerExpression(sh.definition).expression
    if (definition) {
      namesInDefinition = allNamesInIntExpr(definition)
    } else {
      throw new Error('Cannot parse shorthand\'s definition.')
    }
  }
  const namesInArgs = args.map(arg => arg.name).sort()
  namesInDefinition.sort()
  if (!arraysAreEqual(namesInArgs, namesInDefinition)) {
    throw new Error('Names of the shorthand\'s arguments aren\'t '
      + ' the same as the names in its definition.')
  }
  return { name: sh.name, type, args, definition }
}

function applyShorthandsToPredicate(predShs, exprShs, pred) {
  switch (pred.type) {
    case 'call': {
      const sh = predShs.find(sh => sh.name === pred.name)
      if (sh) {
        const resolvedArgs = pred.args
          .map(arg => arg.type === 'store'
            ? applyShorthandsToVariable(predShs, exprShs, arg)
            : applyShorthandsToIntExpr(predShs, exprShs, arg))
        return applyShorthandToPredicate(sh, resolvedArgs)
      }
      return pred
    }
    case 'const':
      return pred
    case 'not':
      return {
        type: pred.type,
        inner: applyShorthandsToPredicate(predShs, exprShs, pred.inner)
      }
    case 'and':
    case 'or':
    case 'implies':
    case 'iff':
      return {
        type: pred.type,
        left: applyShorthandsToPredicate(predShs, exprShs, pred.left),
        right: applyShorthandsToPredicate(predShs, exprShs, pred.right)
      }
    case 'comp':
      return {
        type: pred.type,
        op: pred.op,
        left: applyShorthandsToIntExpr(predShs, exprShs, pred.left),
        right: applyShorthandsToIntExpr(predShs, exprShs, pred.right)
      }
    case 'exists':
    case 'forall':
      return {
        type: pred.type,
        boundVar: pred.boundVar,
        condition: applyShorthandsToPredicate(predShs, exprShs, pred.condition),
        inner: applyShorthandsToPredicate(predShs, exprShs, pred.inner)
      }
    default:
      throw new Error(`Unexpected type of predicate: ${pred.type}.`)
  }
}

function applyShorthandsToIntExpr(predShs, exprShs, expr) {
  switch (expr.type) {
    case 'call':{
      const sh = exprShs.find(sh => sh.name === expr.name)
      if (sh) {
        const resolvedArgs = expr.args
          .map(arg => arg.type === 'store'
            ? applyShorthandsToVariable(predShs, exprShs, arg)
            : applyShorthandsToIntExpr(predShs, exprShs, arg))
        return applyShorthandToIntExpr(sh, resolvedArgs)
      }
      return expr
    }
    case 'const':
      return expr
    case 'var':
      return {
        type: expr.type,
        var: applyShorthandsToVariable(predShs, exprShs, expr.var)
      }
    case 'negate':
      return {
        type: expr.type,
        inner: applyShorthandsToIntExpr(predShs, exprShs, expr.inner)
      }
    case 'plus':
    case 'minus':
    case 'mult':
      return {
        type: expr.type,
        left: applyShorthandsToIntExpr(predShs, exprShs, expr.left),
        right: applyShorthandsToIntExpr(predShs, exprShs, expr.right)
      }
    case 'sum':
    case 'prod':
      return {
        type: expr.type,
        boundVar: expr.boundVar,
        condition: applyShorthandsToPredicate(predShs, exprShs, expr.condition),
        inner: applyShorthandsToIntExpr(predShs, exprShs, expr.inner)
      }
    case 'count':
      return {
        type: expr.type,
        boundVar: expr.boundVar,
        condition: applyShorthandsToPredicate(predShs, exprShs, expr.condition),
        inner: applyShorthandsToPredicate(predShs, exprShs, expr.inner)
      }
    default:
      throw new Error(`Unexpected type of expression: ${expr.type}.`)
  }
}

function applyShorthandsToVariable(predShs, exprShs, variable) {
  switch (variable.type) {
    case 'name':
      return variable
    case 'select':
      return {
        type: 'select',
        base: applyShorthandsToVariable(predShs, exprShs, variable.base),
        selector: applyShorthandsToIntExpr(predShs, exprShs, variable.selector)
      }
    case 'store':
      return {
        type: 'store',
        base: applyShorthandsToVariable(predShs, exprShs, variable.base),
        selector: applyShorthandsToIntExpr(predShs, exprShs, variable.selector),
        value: variable.value.type === 'store'
          ? applyShorthandsToVariable(predShs, exprShs, variable.value)
          : applyShorthandsToIntExpr(predShs, exprShs, variable.value)
      }
    default:
      throw new Error(`Unexpected type of variable: ${variable.type}.`)
  }
}

function applyShorthandToPredicate(sh, args) {
  if (sh.args.length !== args.length) {
    throw new Error(`Shorthand expects ${sh.args.length} arguments, `
      + `but ${args.length} were given.`)
  }
  return substitutePredicate(sh.definition, sh.args, args)
}

function applyShorthandToIntExpr(sh, args) {
  if (sh.args.length !== args.length) {
    throw new Error(`Shorthand expects ${sh.args.length} arguments, `
      + `but ${args.length} were given.`)
  }
  return substituteIntExpr(sh.definition, sh.args, args)
}

module.exports.parseTask = parseTask
