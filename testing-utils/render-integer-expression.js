const { renderIntegerExpression } = require('./rendering/render-predicate-impl')

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
    console.error('ERROR RENDERING INTEGER EXPRESSION:')
    console.error('Cannot parse JSON input.')
    process.exit(-1)
  }
  try {
    console.log(renderIntegerExpression(inputObj))
  } catch (error) {
    console.error('ERROR RENDERING INTEGER EXPRESSION:')
    console.error(error)
    process.exit(-1)
  }
})
