const { parsePredicate } = require('../app/predicate-parser')

let input = ''

process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  if (chunk !== null) {
    input += chunk
  }
})

process.stdin.on('end', () => {
  const { errors, predicate } = parsePredicate(input)
  if (errors.length > 0) {
    console.error('SYNTAX ERROR PARSING PREDICATE:')
    errors.forEach(e => console.error(`${e.row}:${e.col} ${e.message}`))
    process.exit(-1)
  }
  console.log(JSON.stringify(predicate, null, 2))
})
