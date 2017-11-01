function renderProgram(program, identStr, lineEnd) {
  return renderStatements(program.statements, 0, identStr, lineEnd)
}

function renderStatements(statements, nestingLevel, identStr, lineEnd) {
  return statements
    .map(s => renderStatement(s, nestingLevel, identStr, lineEnd))
    .join(';' + lineEnd)
}

function renderStatement(statement, nestingLevel, identStr, lineEnd) {
  const ident = repeatString(identStr, nestingLevel)
  switch (statement.type) {
    case 'abort':
      return ident + 'abort'
    case 'skip':
      return ident + 'skip'
    case 'assign': {
      const rvalues = []
      const lvalues = []
      for (let i = 0; i < statement.rvalues.length; ++i) {
        if (statement.rvalues[i].type === 'store') {
          let base = statement.rvalues[i].base
          while (base.type === 'store') { base = base.base }
          const lvs = []
          const rvs = []
          for (let st = statement.rvalues[i]; st.type === 'store'; st = st.base) {
            let lv = { type: 'select', base, selector: st.selector }
            let rv = st.value
            while (rv.type === 'store') {
              lv = { type: 'select', base: lv, selector: rv.selector }
              rv = rv.value
            }
            lvs.push(lv)
            rvs.push(rv)
          }
          lvalues.push(... lvs.reverse())
          rvalues.push(... rvs.reverse())
        } else {
          lvalues.push(statement.lvalues[i])
          rvalues.push(statement.rvalues[i])
        }
      }
      const _lvalues = lvalues.map(renderVariable).join(', ')
      const _rvalues = rvalues.map(renderIntegerExpression).join(', ')
      return ident + _lvalues + ' := ' + _rvalues
    }
    case 'if':
    case 'do': {
      const guards = statement.guards.map(renderBoolExpression)
      const commands = statement.commands.map(s =>
        (s.length === 1 && s[0].type !== 'if' && s[0].type !== 'do')
          ? renderStatement(s[0], 0, '', '')
          : lineEnd + renderStatements(s, nestingLevel + 2, identStr, lineEnd))
      const guardedCommands = guards.map((guard, i) => {
        const command = commands[i]
        const innerIdent = i === 0
          ? ident + (identStr === '' ? ' ' : identStr)
          : ident + '|' + identStr.slice(1)
        const arrow = command.startsWith(lineEnd) ? '  ->' : '  ->  '
        return innerIdent + guard + arrow + command
      })
      return ident + statement.type + lineEnd
        + guardedCommands.join(lineEnd) + lineEnd
        + ident + statement.type.split('').reverse().join('')
    }
    default:
      throw new Error(`Unknown type of statement: ${statement.type}.`)
  }
}

function renderBoolExpression(pred) {
  switch (pred.type) {
    case 'const':
      return pred.const ? 'T' : 'F'
    case 'not':
      return '~' + renderBoolExpression(pred.inner)
    case 'and':
      return renderBoolExpression(pred.left)
        + ' && ' + renderBoolExpression(pred.right)
    case 'or':
      return renderBoolExpression(pred.left)
        + ' || ' + renderBoolExpression(pred.right)
    case 'comp':
      return renderIntegerExpression(pred.left)
        + ` ${pred.op} ` + renderIntegerExpression(pred.right)
    default:
      throw new Error(`Unknown type of boolean expression: ${pred.type}.`)
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
      return renderIntegerExpression(expr.left)
        + ' + ' + renderIntegerExpression(expr.right)
    case 'minus':
      return renderIntegerExpression(expr.left)
        + ' - ' + renderIntegerExpression(expr.right)
    case 'mult':
      return renderIntegerExpression(expr.left)
        + ' * ' + renderIntegerExpression(expr.right)
    default:
      throw new Error(`Unknown type of integer expression: ${expr.type}.`)
  }
}

function renderVariable(variable) {
  switch (variable.type) {
    case 'name':
      return variable.name
    case 'select':
      return renderVariable(variable.base)
        + `[${renderIntegerExpression(variable.selector)}]`
    default:
      throw new Error(`Unknown type of variable: ${variable.type}.`)
  }
}

function repeatString(str, times) {
  let res = ''
  while (times-- > 0) res += str
  return res
}

module.exports.renderProgram = renderProgram
