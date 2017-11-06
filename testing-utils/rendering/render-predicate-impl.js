function renderPredicate(pred) {
  switch (pred.type) {
    case 'const':
      return pred.const ? 'T' : 'F'
    case 'not': {
      let inner = renderPredicate(pred.inner)
      if (logicOperationPrecedenceLess(pred, pred.inner)) {
        inner = '(' + inner + ')'
      }
      return '~' + inner
    }
    case 'and':
    case 'implies':
    case 'iff':
    case 'or': {
      let lhs = renderPredicate(pred.left),
          rhs = renderPredicate(pred.right)
      if (logicOperationPrecedenceLess(pred, pred.left)) {
        lhs = '(' + lhs + ')'
      }
      if (logicOperationPrecedenceLess(pred, pred.right)) {
        rhs = '(' + rhs + ')'
      }
      return lhs + ` ${renderLogicOperation(pred.type)} ` + rhs
    }
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
    case 'negate': {
      let inner = renderIntegerExpression(expr.inner)
      if (integerOperationPrecedenceLess(expr, expr.inner)) {
        inner = '(' + inner + ')'
      }
      return '- ' + inner
    }
    case 'var':
      return renderVariable(expr.var)
    case 'plus':
    case 'minus':
    case 'mult': {
      let lhs = renderIntegerExpression(expr.left),
          rhs = renderIntegerExpression(expr.right)
      if (integerOperationPrecedenceLess(expr, expr.left)) {
        lhs = '(' + lhs + ')'
      }
      if (integerOperationPrecedenceLess(expr, expr.right)) {
        rhs = '(' + rhs + ')'
      }
      return lhs + ` ${renderIntegerOperation(expr.type)} ` + rhs
    }
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
      if (exprNeedsParentheses(variable.selector)) {
        selector = '(' + selector + ')'
      }
      let value = null
      if (variable.value.type === 'store') {
        value = renderVariable(variable.value)
      } else if (exprNeedsParentheses(variable.value)) {
        value = '(' + renderIntegerExpression(variable.value) + ')'
      } else {
        value = renderIntegerExpression(variable.value)
      }
      return `(${base}; ${selector}:${value})`
    }
    default:
      throw new Error(`Unknown type of variable: ${variable.type}.`)
  }
}

function exprNeedsParentheses(expr) {
  return expr.type === 'negate'
    expr.type === 'plus'
    expr.type === 'minus'
    expr.type === 'mult'
}

function renderArgument(arg) {
  return arg.type === 'store'
    ? renderVariable(arg)
    : renderIntegerExpression(arg)
}

function logicOperationPrecedenceLess(op1, op2) {
  return logiOperationPrecedenceNumber(op1)
    < logiOperationPrecedenceNumber(op2)
}

function logiOperationPrecedenceNumber(pred) {
  switch (pred.type) {
    case 'comp':    return 0
    case 'const':   return 0
    case 'call':    return 0
    case 'not':     return 0
    case 'and':     return 1
    case 'or':      return 2
    case 'implies': return 3
    case 'iff':     return 4
    case 'forall':  return 0  // The precedence is "incorrectly" 0, because
    case 'exists':  return 0  // we always render quantifiers in parentheses.
    default:
      throw new Error(`Unknown predicate type: ${pred.type}.`)
  }
}

function integerOperationPrecedenceLess(op1, op2) {
  return integerOperationPrecedenceNumber(op1)
    < integerOperationPrecedenceNumber(op2)
}

function integerOperationPrecedenceNumber(expr) {
  switch (expr.type) {
    case 'var':    return 0
    case 'call':   return 0
    case 'const':  return 0
    case 'negate': return 0
    case 'mult':   return 1
    case 'plus':   return 2
    case 'minus':  return 2
    case 'sum':    return 0  // The precedence is "incorrectly" 0,
    case 'prod':   return 0  // because we always render
    case 'count':  return 0  // quantifiers in parentheses.
    default:
      throw new Error(`Unknown integer expression type: ${expr.type}.`)
  }
}

module.exports.renderPredicate = renderPredicate
module.exports.renderIntegerExpression = renderIntegerExpression
