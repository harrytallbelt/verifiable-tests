const { renderProgram } = require('./rendering/render-pseudocode-impl')

const DEFAULT_INDENT_STR = '  '
const DEFAULT_LINE_END = '\n'

let input = ''

process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  if (chunk !== null) {
    input += chunk
  }
})

process.stdin.on('end', () => {
  let inputObj = null
  try {
    inputObj = JSON.parse(input)
  } catch (error) {
    console.error('ERROR RENDERING PSEUDOCODE:')
    console.error('Cannot parse JSON input.')
    process.exit(-1)
  }
  try {
    console.log(renderProgram(inputObj, DEFAULT_INDENT_STR, DEFAULT_LINE_END))
  } catch (error) {
    console.error('ERROR RENDERING PSEUDOCODE:')
    console.error(error)
    process.exit(-1)
  }
})
