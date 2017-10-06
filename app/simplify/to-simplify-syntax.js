const { Axioms, getAxiomList } = require('./axioms')

/* `requiredAxioms` is an optional argument, which
 * is a bitwise-or combination of used axioms from `Axiom` enum.
*/
function convertToSimplifySyntax(predicates, requiredAxioms) {
  requiredAxioms = requiredAxioms || 0
  return getAxiomList(requiredAxioms)
    .then(axiomList => {
      const preds = predicates
        .map(p => {
          return convertToSimplifyPredicate(p, requiredAxioms)
        })
      return axiomList.concat(preds).join(' ')
    })
}

function convertToSimplifyPredicate(predicate, axioms) {
  switch (predicate.type) {
    case 'const':
      return predicate.const ? 'TRUE' : 'FALSE'
    case 'not':
      return `(NOT ${convertToSimplifyPredicate(predicate.inner, axioms)})`
    case 'and':
    case 'or':
    case 'implies':
    case 'iff': {
      const op = booleanOperation(predicate.type)
      const left = convertToSimplifyPredicate(predicate.left, axioms)
      const right = convertToSimplifyPredicate(predicate.right, axioms)
      return `(${op} ${left} ${right})`
    }
    case 'comp': {
      const op = comparisonOperation(predicate.op)
      const left = convertToSimplifyIntExpr(predicate.left, axioms)
      const right = convertToSimplifyIntExpr(predicate.right, axioms)
      return `(${op} ${left} ${right})`
    }
    case 'perm': {
      if (!(axioms & Axioms.ARRAY_PERM)) {
        throw new Error('No axiom for array permutation predicate.')
      }
      const arr1 = convertToSimplifyVar(predicate.arr1, axioms)
      const arr2 = convertToSimplifyVar(predicate.arr2, axioms)
      const n = convertToSimplifyIntExpr(predicate.n, axioms)
      return `(perm ${arr1} ${arr2} ${n})`
    }
    case 'exists': {
      if (axioms & Axioms.ARRAY_CONTAINS || axioms & Axioms.ARRAY_CONTAINS_REV) {
        const { lowerBoundary, upperBoundary } = parseCondition(predicate.condition, predicate.boundVar.name)
        const { array, name } = getArrayAndName(predicate.inner, predicate.boundVar.name)
        if (lowerBoundary && upperBoundary && array && name) {
          const a = convertToSimplifyIntExpr(lowerBoundary, axioms)
          const b = convertToSimplifyIntExpr(upperBoundary, axioms)
          const m = convertToSimplifyVar(name, axioms)
          const arr = convertToSimplifyVar(array, axioms)
          return `(contains ${a} ${b} ${arr} ${m})`
        }
      }
      const boundVar = convertToSimplifyVar(predicate.boundVar, axioms)
      const condition = convertToSimplifyPredicate(predicate.condition, axioms)
      const inner = convertToSimplifyPredicate(predicate.inner, axioms)
      return `(EXISTS (${boundVar}) (AND ${condition} ${inner}))`
    }
    case 'forall': {
      const boundVar = convertToSimplifyVar(predicate.boundVar, axioms)
      const condition = convertToSimplifyPredicate(predicate.condition, axioms)
      const inner = convertToSimplifyPredicate(predicate.inner, axioms)
      const selectWithBoundVar = findSelectInPred(predicate.inner, predicate.boundVar.name)
      const pats = selectWithBoundVar
        ? `(PATS ${convertToSimplifyVar(selectWithBoundVar, axioms)})`
        : ''
      return `(FORALL (${boundVar}) ${pats} (IMPLIES ${condition} ${inner}))`
    }
    default: throw new Error(`Unsupported predicate type '${predicate.type}'.`)
  }
}

function booleanOperation(opName) {
  switch (opName) {
    case 'and':     return 'AND'
    case 'or':      return 'OR'
    case 'implies': return 'IMPLIES'
    case 'iff':     return 'IFF'
    default: throw new Error(`Unsupported logic opperation '${opName}'.`)
  }
}

function comparisonOperation(opName) {
  switch (opName) {
    case '<':  return '<'
    case '>':  return '>'
    case '<=': return '<='
    case '>=': return '>='
    case '=':  return 'EQ'
    case '<>': return 'NEQ'
    default: throw new Error(`Unsupported comparison operation '${opName}'.`)
  }
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
    case 'perm':
      return  findSelectInVar(pred.arr1, varName)
        || findSelectInVar(pred.arr2, varName)
        || findSelectInIntExpr(pred.n, varName)
    case 'not':
    case 'forall':
    case 'exists':
      return findSelectInPred(pred.inner, varName)
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

function convertToSimplifyIntExpr(intExpr, axioms) {
  switch (intExpr.type) {
    case 'const':
      return intExpr.const.toString()
    case 'var':
      return convertToSimplifyVar(intExpr.var, axioms)
    case 'negate':
      return `(- 0 ${convertToSimplifyIntExpr(intExpr.inner, axioms)})`
    case 'plus':
    case 'minus':
    case 'mult': {
      const op = integerOperaion(intExpr.type)
      const left = convertToSimplifyIntExpr(intExpr.left, axioms)
      const right = convertToSimplifyIntExpr(intExpr.right, axioms)
      return `(${op} ${left} ${right})`
    }
    case 'sum': {
      if (intExpr.inner.type === 'var') {
        const { lowerBoundary, upperBoundary } = parseCondition(intExpr.condition, intExpr.boundVar.name)
        if (!lowerBoundary || !upperBoundary) {
          throw new Error('Unsupported quantifier condition format.')
        }
        if (!(axioms & Axioms.ARRAY_SUM) && !(axioms & Axioms.ARRAY_SUM_REV)) {
          throw new Error('No axiom for SUM quantifier is specified.')
        }  
        const array = getArray(intExpr.inner, intExpr.boundVar.name)
        if (!array) {
          throw new Error('Unsupported quantifier inner expression format.')
        }
        const from = convertToSimplifyIntExpr(lowerBoundary, axioms)
        const to = convertToSimplifyIntExpr(upperBoundary, axioms)
        const arr = convertToSimplifyVar(array, axioms)
        return `(sum ${from} ${to} ${arr})`
      } else if (intExpr.inner.type === 'mult') {
        if (isSingleSelect(intExpr.inner.left) || isSingleSelect(intExpr.inner.right)) {
          const { lowerBoundary, upperBoundary } = parseCondition(intExpr.condition, intExpr.boundVar.name)
          if (!lowerBoundary || !upperBoundary) {
            throw new Error('Unsupported quantifier condition format.')
          }
          if (!(axioms & Axioms.ROW_ON_VEC_DOTPROD)) {
            throw new Error('No axiom for SUM quantifier is specified.')
          }
          let aExpr = null, xExpr = null
          if (isSingleSelect(intExpr.inner.left)) {
            xExpr = intExpr.inner.left
            aExpr = intExpr.inner.right
          } else {
            xExpr = intExpr.inner.right
            aExpr = intExpr.inner.left
          }
          const parsedA = parseDoubleSelect(aExpr)
          const a = parsedA.arr, i = parsedA.row, j_a = parsedA.col
          const x = xExpr.var.base, j_x = xExpr.var.selector
          if (!intExprIsName(j_a, intExpr.boundVar.name) && !intExprIsName(j_x, intExpr.boundVar.name)) {
            throw new Error('Unsupported quantifier inner expression format.')
          }
          const from = convertToSimplifyIntExpr(lowerBoundary, axioms)
          const to = convertToSimplifyIntExpr(upperBoundary, axioms)
          const row = convertToSimplifyIntExpr(i, axioms)
          const _a = convertToSimplifyVar(a, axioms)
          const _x = convertToSimplifyVar(x, axioms)
          return `(rowvecprod ${from} ${to} ${row} ${_a} ${_x})`
        } else {
          const { lowerBoundary, upperBoundary } = parseCondition(intExpr.condition, intExpr.boundVar.name)
          if (!lowerBoundary || !upperBoundary) {
            throw new Error('Unsupported quantifier condition format.')
          }
          if (!(axioms & Axioms.ROW_ON_COL_DOTPROD)) {
            throw new Error('No axiom for SUM quantifier is specified.')
          }
          const parsedArr1 = parseDoubleSelect(intExpr.inner.left)
          const parsedArr2 = parseDoubleSelect(intExpr.inner.right)
          const arr1 = parsedArr1.arr, ind11 = parsedArr1.row, ind12 = parsedArr1.col
          const arr2 = parsedArr2.arr, ind21 = parsedArr2.row, ind22 = parsedArr2.col
          if (!arr1 || !arr2 || !ind11 || !ind12 || !ind21 || !ind22) {
            throw new Error('Unsupported quantifier inner expression format.')
          }
          let row = null, col = null
          if (intExprIsName(ind12, intExpr.boundVar.name) && intExprIsName(ind21, intExpr.boundVar.name)) {
            row = ind11; col = ind22
          } else if (intExprIsName(ind11, intExpr.boundVar.name) && intExprIsName(ind22, intExpr.boundVar.name)) {
            row = ind21; col = ind12
          } else {
            throw new Error('Unsupported quantifier inner expression format.')
          }
          const from = convertToSimplifyIntExpr(lowerBoundary, axioms)
          const to = convertToSimplifyIntExpr(upperBoundary, axioms)
          const _row = convertToSimplifyIntExpr(row, axioms)
          const _col = convertToSimplifyIntExpr(col, axioms)
          const _arr1 = convertToSimplifyVar(arr1, axioms)
          const _arr2 = convertToSimplifyVar(arr2, axioms)
          return `(rowcolprod ${from} ${to} ${_row} ${_col} ${_arr1} ${_arr2})`
        }
      } else if (intExpr.inner.type === 'sum') {
        const parsedBoundaries1 = parseCondition(intExpr.condition, intExpr.boundVar.name)
        const parsedBoundaries2 = parseCondition(intExpr.inner.condition, intExpr.inner.boundVar.name)
        const lowerBoundary1 = parsedBoundaries1.lowerBoundary, upperBoundary1 = parsedBoundaries1.upperBoundary
        const lowerBoundary2 = parsedBoundaries2.lowerBoundary, upperBoundary2 = parsedBoundaries2.upperBoundary
        if (!lowerBoundary1 || !upperBoundary1 || !lowerBoundary2 || !upperBoundary2) {
          throw new Error('Unsupported quantifier condition format.')
        }
        if (!(axioms & Axioms.MATRIX_SUM)) {
          throw new Error('No axiom for SUM quantifier is specified.')
        }
        const { arr, row, col } = parseDoubleSelect(intExpr.inner.inner)
        if (!arr || !row || !col
         || !intExprIsName(row, intExpr.boundVar.name)
         || !intExprIsName(col, intExpr.inner.boundVar.name))
        {
          throw new Error('Unsupported quantifier inner expression format.')
        }
        const ifrom = convertToSimplifyIntExpr(lowerBoundary1, axioms)
        const ito = convertToSimplifyIntExpr(upperBoundary1, axioms)
        const jfrom = convertToSimplifyIntExpr(lowerBoundary2, axioms)
        const jto = convertToSimplifyIntExpr(upperBoundary2, axioms)
        const matrix = convertToSimplifyVar(arr, axioms)
        return `(msum ${ifrom} ${ito} ${jfrom} ${jto} ${matrix})`
      } else {
        throw new Error('Unsupported quantifier inner expression format.')
      }
    }
    case 'prod': {
      // TODO: should this code be concearned with this??
      if (!(axioms & Axioms.ARRAY_PROD) && !(axioms & Axioms.ARRAY_PROD_REV)) {
        throw new Error('No axiom for PROD quantifier is specified.')
      }
      const { lowerBoundary, upperBoundary } = parseCondition(intExpr.condition, intExpr.boundVar.name)
      if (!lowerBoundary || !upperBoundary) {
        throw new Error('Unsupported quantifier condition format.')
      }
      const array = getArray(intExpr.inner, intExpr.boundVar.name)
      if (!array) {
        throw new Error('Unsupported quantifier inner expression format.')
      }
      const a = convertToSimplifyIntExpr(lowerBoundary, axioms)
      const b = convertToSimplifyIntExpr(upperBoundary, axioms)
      const arr = convertToSimplifyVar(array, axioms)
      return `(prod ${a} ${b} ${arr})`
    }
    default: throw new Error(`Unsupported integer expression type '${intExpr.type}'.`)
  }
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

function getName(expr) {
  return expr.type === 'var' && expr.var.type === 'name'
    ? expr.var
    : null
}

function integerOperaion(opName) {
  switch (opName) {
    case 'plus':  return '+'
    case 'minus': return '-'
    case 'mult':  return '*'
    default: throw new Error(`Unsupported integer operation '${opName}'.`)
  }
}

function isSingleSelect(intExpr) {
  return intExpr.type === 'var'
    && intExpr.var.type === 'select'
    && intExpr.var.base.type !== 'select'
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

function convertToSimplifyVar(variable, axioms) {
  switch (variable.type) {
    case 'name':
      return variable.name
    case 'select': {
      const base = convertToSimplifyVar(variable.base, axioms)
      const selector = convertToSimplifyIntExpr(variable.selector, axioms)
      return `(select ${base} ${selector})`
    }
    case 'store': {
      const base = convertToSimplifyVar(variable.base, axioms)
      const selector = convertToSimplifyIntExpr(variable.selector, axioms)
      const value = variable.value.type === 'store'
        ? convertToSimplifyVar(variable.value, axioms)
        : convertToSimplifyIntExpr(variable.value, axioms)
      return `(store ${base} ${selector} ${value})`
    }
    default: throw new Error(`Unsupported variable type '${variable.type}'.`)
  }
}


module.exports = convertToSimplifySyntax


// For testing purposes
if (!module.parent) {
  let jsonPredicate = ''
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read()
    if (chunk !== null) {
      jsonPredicate += chunk
    }
  })
  process.stdin.on('end', () => {
    const predicate = JSON.parse(jsonPredicate)
    const allAxioms = -1  // -1 = 0xFFF...F
    const result = convertToSimplifyPredicate(predicate, allAxioms)
    console.log(result)
  })
}
