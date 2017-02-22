const promisify = require('promisify-node')
const fs = promisify('fs')
const antlr4 = require('antlr4')
const PseudocodeLexer = require('./PseudocodeLexer')
const PseudocodeParser = require('./PseudocodeParser')
const ProgramDtoBuilder = require('./ProgramDtoBuilder')

function parseFile(filename) {
  return fs
    .readFile(filename, 'UTF-8')
    .then(source => {
      const chars = new antlr4.InputStream(source)
      const lexer = new PseudocodeLexer.PseudocodeLexer(chars)
      const tokens = new antlr4.CommonTokenStream(lexer)
      const parser = new PseudocodeParser.PseudocodeParser(tokens)
      parser.buildParseTree = true
      const tree = parser.program()

      const builder = new ProgramDtoBuilder()
      return builder.visit(tree)
    })
}

module.exports = parseFile

if (!module.parent) {
  parseFile(process.argv[2])
    .then(tree => console.log(JSON.stringify(tree, null, 2)))
}
