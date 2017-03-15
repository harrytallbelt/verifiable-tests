const antlr4 = require('antlr4')
const PseudocodeLexer = require('./PseudocodeLexer')
const PseudocodeParser = require('./PseudocodeParser')
const ProgramDtoBuilder = require('./ProgramDtoBuilder')
const ErrorListListener = require('./ErrorListListener')

function parse(sourceCode) {
  const chars = new antlr4.InputStream(sourceCode)
  const lexer = new PseudocodeLexer.PseudocodeLexer(chars)
  const lexerErrorListKeeper = new ErrorListListener()  
  lexer.removeErrorListeners()
  lexer.addErrorListener(lexerErrorListKeeper)
  
  const tokens = new antlr4.CommonTokenStream(lexer)
  const parser = new PseudocodeParser.PseudocodeParser(tokens)
  const parserErrorListKeeper = new ErrorListListener()
  parser.removeErrorListeners()
  parser.addErrorListener(parserErrorListKeeper)
  parser.buildParseTree = true

  const tree = parser.program()

  if (lexerErrorListKeeper.errors.length !== 0
   || parserErrorListKeeper.errors.length !== 0)
  {
    return
  }

  const builder = new ProgramDtoBuilder()
  const programRepresentation = builder.visit(tree)

  // TODO: what do we return??
}

module.exports = parse

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
    const result = parse(source)
    const json = JSON.stringify(result, null, 2)
    console.log(json)
  })
}
