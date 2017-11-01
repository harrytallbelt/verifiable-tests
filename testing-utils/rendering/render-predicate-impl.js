function renderPredicate(pred) {
  switch (pred.type) {
    case 'const':
      return pred.const ? 'T' : 'F'
    case 'not':
      return '~' + renderPredicate(pred.inner)
    case 'and':
    case 'implies':
    case 'iff':
    case 'or':
      return renderPredicate(pred.left)
        + ` ${renderLogicOperation(pred.type)} `
        + renderPredicate(pred.right)
    case 'comp':
      return renderIntegerExpression(pred.left)
        + ` ${pred.op} ` + renderIntegerExpression(pred.right)
    case 'call':
      return pred.name + '('
        + pred.args.map(renderArgument).join(', ') + ')'
    case 'forall': {
      const name = renderVariable(pred.boundVar)
      const condition = renderPredicate(pred.condition)
      const inner = renderPredicate(pred.inner)
      return `(A ${name} : ${condition} : ${inner})`
    }
    case 'exists': {
      const name = renderVariable(pred.boundVar)
      const condition = renderPredicate(pred.condition)
      const inner = renderPredicate(pred.inner)
      return `(E ${name} : ${condition} : ${inner})`
    }
    default:
      throw new Error(`Unknown type of predicate: ${pred.type}.`)
  }
}

function renderLogicOperation(op) {
  switch (op) {
    case 'and': return '&&'
    case 'implies': return '=>'
    case 'iff': return '<=>'
    case 'or': return '||'
    default:
      throw new Error(`Unknown logic operation: ${op}.`)
  }
}

function renderIntegerExpression(expr) {
  switch (expr.type) {
    case 'const':
      return expr.const.toString()
    case 'negate':
      return '- ' + renderIntegerExpression(expr.inner)
    case 'var':
      return renderVariable(expr.var)
    case 'plus':
    case 'minus':
    case 'mult':
      return renderIntegerExpression(expr.left)
        + ` ${renderIntegerOperation(expr.type)} `
        + renderIntegerExpression(expr.right)
    case 'call':
      return pred.name + '('
        + pred.args.map(renderArgument).join(', ') + ')'
    case 'sum': {
      const name = renderVariable(expr.boundVar)
      const condition = renderPredicate(expr.condition)
      const inner = renderIntegerExpression(expr.inner)
      return `(SUM ${name} : ${condition} : ${inner})`
    }
    case 'prod': {
      const name = renderVariable(expr.boundVar)
      const condition = renderPredicate(expr.condition)
      const inner = renderIntegerExpression(expr.inner)
      return `(PROD ${name} : ${condition} : ${inner})`
    }
    case 'count': {
      const name = renderVariable(expr.boundVar)
      const condition = renderPredicate(expr.condition)
      const inner = renderPredicate(expr.inner)
      return `(N ${name} : ${condition} : ${inner})`
    }
    default:
      throw new Error(`Unknown type of integer expression: ${expr.type}.`)
  }
}

function renderIntegerOperation(op) {
  switch (op) {
    case 'plus': return '+'
    case 'minus': return '-'
    case 'mult': return '*'
    default:
      throw new Error(`Unknown integer operation: ${op}.`)
  }
}

function renderVariable(variable) {
  switch (variable.type) {
    case 'name':
      return variable.name
    case 'select':
      return renderVariable(variable.base)
        + `[${renderIntegerExpression(variable.selector)}]`
    case 'store': {
      const base = renderVariable(variable.base)
      let selector = renderIntegerExpression(variable.selector)
      if (variable.selector.type !== 'var') {
        selector = '(' + selector + ')'
      }
      let value = null
      if (variable.value.type === 'store') {
        value = renderVariable(variable.value)
      } else if (variable.value.type === 'var') {
        value = renderIntegerExpression(variable.value)
      } else {
        value = '(' + renderIntegerExpression(variable.value) + ')'
      }
      return `(${base}; ${selector}:${value})`
    }
    default:
      throw new Error(`Unknown type of variable: ${variable.type}.`)
  }
}

function renderArgument(arg) {
  return arg.type === 'store'
    ? renderVariable(arg)
    : renderIntegerExpression(arg)
}

module.exports.renderPredicate = renderPredicate
module.exports.renderIntegerExpression = renderIntegerExpression
