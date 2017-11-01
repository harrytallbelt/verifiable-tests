const { parseIntegerExpression } = require('../app/predicate-parser')

let input = ''

process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  if (chunk !== null) {
    input += chunk
  }
})

process.stdin.on('end', () => {
  const { errors, expression } = parseIntegerExpression(input)
  if (errors.length > 0) {
    console.error('SYNTAX ERROR PARSING INTEGER EXPRESSION:')
    errors.forEach(e => console.error(`${e.row}:${e.col} ${e.message}`))
    process.exit(-1)
  }
  console.log(JSON.stringify(expression, null, 2))
})
