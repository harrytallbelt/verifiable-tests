function convertToSimplifyPredicate(predicate) {
  switch (predicate.type) {
    case 'const':
      return predicate.const ? 'TRUE' : 'FALSE'
    case 'not':
      return `(NOT ${convertToSimplifyPredicate(predicate.inner)})`
    case 'and':
    case 'or':
    case 'implies':
    case 'iff': {
      const op = booleanOperation(predicate.type)
      const left = convertToSimplifyPredicate(predicate.left)
      const right = convertToSimplifyPredicate(predicate.right)
      return `(${op} ${left} ${right})`
    }
    case 'comp': {
      const op = comparisonOperation(predicate.op)
      const left = convertToSimplifyIntExpr(predicate.left)
      const right = convertToSimplifyIntExpr(predicate.right)
      return `(${op} ${left} ${right})`
    }
    case 'exists':
    case 'forall':
      const quantifier = predicate.type === 'exists' ? 'EXISTS' : 'FORALL'
      const boundedVars = predicate.boundedVars.map(convertToSimplifyVar)
      const condition = convertToSimplifyPredicate(predicate.condition)
      const inner = convertToSimplifyPredicate(predicate.inner)
      return `(${quantifier} (${boundedVars.join(' ')}) (IMPLIES ${condition} ${inner}))`
    default: throw new Error(`Unsupported predicate type '${predicate.type}'`)
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
    default: throw new Error(`Unsupported comparison operation '${opName}'`)
  }
}

function convertToSimplifyIntExpr(intExpr) {
  switch (intExpr.type) {
    case 'const':
      return intExpr.const.toString()
    case 'var':
      return convertToSimplifyVar(intExpr.var)
    case 'negate':
      return `(- 0 ${convertToSimplifyIntExpr(intExpr.inner)})`
    case 'plus':
    case 'minus':
    case 'mult':
      const op = integerOperaion(intExpr.type)
      const left = convertToSimplifyIntExpr(intExpr.left)
      const right = convertToSimplifyIntExpr(intExpr.right)
      return `(${op} ${left} ${right})`
    default: throw new Error(`Unsupported integer expression type '${intExpr.type}'`)
  }
}

function integerOperaion(opName) {
  switch (opName) {
    case 'plus':  return '+'
    case 'minus': return '-'
    case 'mult':  return '*'
    default: throw new Error(`Unsupported integer operation '${opName}'`)
  }
}

function convertToSimplifyVar(variable) {
  switch (variable.type) {
    case 'name':
      return variable.name
    case 'select': {
      const base = convertToSimplifyVar(variable.base)
      const selector = convertToSimplifyIntExpr(variable.selector)
      return `(select ${base} ${selector})`
    }
    case 'store': {
      const base = convertToSimplifyVar(variable.base)
      const selector = convertToSimplifyIntExpr(variable.selector)
      const value = convertToSimplifyIntExpr(variable.value)
      return `(store ${base} ${selector} ${value})`
    }
    default: throw new Error(`Unsupported variable type '${variable.type}'`)
  }
}


module.exports = convertToSimplifyPredicate


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
    const result = convertToSimplifyPredicate(predicate)
    console.log(result)
  })
}
