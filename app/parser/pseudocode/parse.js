const antlr4 = require('antlr4')
const PseudocodeLexer = require('./PseudocodeLexer')
const PseudocodeParser = require('./PseudocodeParser')
const ProgramDtoBuilder = require('./ProgramDtoBuilder')

function parse(sourceCode) {
  const chars = new antlr4.InputStream(sourceCode)
  const lexer = new PseudocodeLexer.PseudocodeLexer(chars)
  const tokens = new antlr4.CommonTokenStream(lexer)
  const parser = new PseudocodeParser.PseudocodeParser(tokens)
  parser.buildParseTree = true
  const tree = parser.program()

  const builder = new ProgramDtoBuilder()
  return builder.visit(tree)
}

module.exports = parse
