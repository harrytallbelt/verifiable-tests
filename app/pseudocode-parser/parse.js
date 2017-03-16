const antlr4 = require('antlr4')
const PseudocodeLexer = require('./PseudocodeLexer')
const PseudocodeParser = require('./PseudocodeParser')
const ProgramRepresenatationBuilder = require('./ProgramRepresenatationBuilder')
const ErrorListListener = require('./ErrorListListener')

/* Parses given source code and returns object
 * with two fields:
 * - `errors`, the list of the errors
 *   of format `{ row, col, message }`,
 *   collected during source code parsing.
 * - `program`, the program representation;
 *   it will be `null` if `errors` is not empty.
*/
function parsePseudocode(sourceCode) {
  const errorKeeper = new ErrorListListener()

  const chars = new antlr4.InputStream(sourceCode)
  const lexer = new PseudocodeLexer.PseudocodeLexer(chars)
  lexer.removeErrorListeners()
  lexer.addErrorListener(errorKeeper)

  const tokens = new antlr4.CommonTokenStream(lexer)
  const parser = new PseudocodeParser.PseudocodeParser(tokens)
  parser.removeErrorListeners()
  parser.addErrorListener(errorKeeper)

  const tree = parser.program()

  if (errorKeeper.errors.length !== 0) {
    return { errors: errorKeeper.errors, program: null }
  }

  const builder = new ProgramRepresenatationBuilder()
  const program = builder.visit(tree)

  return builder.errors.length > 0
    ? { errors: builder.errors, program: null }
    : { errors: [], program: program }
}

module.exports = parsePseudocode

// Run as a script for testing purposes.
if (!module.parent) {
  let source = ''
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read()
    if (chunk !== null) {
      source += chunk
    }
  })
  process.stdin.on('end', () => {
    const result = parsePseudocode(source)
    const json = JSON.stringify(result, null, 2)
    console.log(json)
  })
}
