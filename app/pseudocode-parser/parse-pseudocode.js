const antlr4 = require('antlr4')
const PseudocodeLexer = require('./PseudocodeLexer')
const PseudocodeParser = require('./PseudocodeParser')
const ProgramRepresenatationBuilder = require('./ProgramRepresenatationBuilder')
const ErrorListListener = require('./ErrorListListener')

/* Parses given source code and returns object
 * with fields:
 * - `lexingErrors` list of the errors collected during lexing,
 * - `parsingErrors` list of the errors collected during parsing,
 * - `program` for program representation.
 * Lexer and parser errors are of the same format:
 * `{ row, col, message }`
 * so, if you do not need to differentiate them,
 * you might just merge the arrays.
 * The program will be `null` if parsingErrors is not empty
 * (antlr can recover from lexer errors).
*/
function parsePseudocode(sourceCode) {
  const chars = new antlr4.InputStream(sourceCode)
  const lexer = new PseudocodeLexer.PseudocodeLexer(chars)
  const lexerErrorKeeper = new ErrorListListener()  
  lexer.removeErrorListeners()
  lexer.addErrorListener(lexerErrorKeeper)
  const tokens = new antlr4.CommonTokenStream(lexer)

  const parser = new PseudocodeParser.PseudocodeParser(tokens)
  const parserErrorKeeper = new ErrorListListener()
  parser.removeErrorListeners()
  parser.addErrorListener(parserErrorKeeper)
  parser.buildParseTree = true
  const tree = parser.program()

  if (lexerErrorKeeper.errors.length !== 0
   || parserErrorKeeper.errors.length !== 0)
  {
    return {
      lexingErrors: lexerErrorKeeper.errors,
      parsingErrors: parserErrorKeeper.errors,
      program: null
    }
  }

  const builder = new ProgramRepresenatationBuilder()
  const programRepresentation = builder.visit(tree)

  return {
    lexingErrors: [],
    parsingErrors: builder.errors,
    program: builder.errors.length > 0 ? null : programRepresentation
  }
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
