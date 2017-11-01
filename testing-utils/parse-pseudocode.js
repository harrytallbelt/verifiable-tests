const parsePseudocode = require('../app/pseudocode-parser')

let input = ''

process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  if (chunk !== null) {
    input += chunk
  }
})

process.stdin.on('end', () => {
  const { errors, program } = parsePseudocode(input)
  if (errors.length > 0) {
    console.error('SYNTAX ERROR PARSING PSEUDOCODE:')
    errors.forEach(e => console.error(`${e.row}:${e.col} ${e.message}`))
    process.exit(-1)
  }
  console.log(JSON.stringify(program, null, 2))
})
