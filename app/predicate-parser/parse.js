const antlr4 = require('antlr4')
const PredicatesLexer = require('./PredicatesLexer')
const PredicatesParser = require('./PredicatesParser')
const PredicateRepresenatationBuilder = require('./PredicateRepresentationBuilder')
const ErrorListListener = require('./ErrorListListener')


/* Parses given source code and returns object
 * with two fields:
 * - `errors`, the list of the errors
 *   of format `{ row, col, message }`,
 *   collected during source code parsing.
 * - `predicate`, the predicate representation;
 *   it will be `null` if `errors` is not empty.
*/
function parsePredicate(sourceCode) {
  const errorKeeper = new ErrorListListener()

  const chars = new antlr4.InputStream(sourceCode)
  const lexer = new PredicatesLexer.PredicatesLexer(chars)
  lexer.removeErrorListeners()
  lexer.addErrorListener(errorKeeper)

  const tokens = new antlr4.CommonTokenStream(lexer)
  const parser = new PredicatesParser.PredicatesParser(tokens)
  parser.removeErrorListeners()
  parser.addErrorListener(errorKeeper)

  const tree = parser.predicate()

  if (errorKeeper.errors.length !== 0) {
    return { errors: errorKeeper.errors, predicate: null }
  }

  const builder = new PredicateRepresenatationBuilder()
  const predicate = builder.visit(tree)

  return { errors: [], predicate: predicate }
}


/* Parses given source code and returns object
 * with two fields:
 * - `errors`, the list of the errors
 *   of format `{ row, col, message }`,
 *   collected during source code parsing.
 * - `expression`, the int expression representation;
 *   it will be `null` if `errors` is not empty.
*/
function parseIntegerExpression(sourceCode) {
  const errorKeeper = new ErrorListListener()

  const chars = new antlr4.InputStream(sourceCode)
  const lexer = new PredicatesLexer.PredicatesLexer(chars)
  lexer.removeErrorListeners()
  lexer.addErrorListener(errorKeeper)

  const tokens = new antlr4.CommonTokenStream(lexer)
  const parser = new PredicatesParser.PredicatesParser(tokens)
  parser.removeErrorListeners()
  parser.addErrorListener(errorKeeper)

  const tree = parser.int_expr()

  if (errorKeeper.errors.length !== 0) {
    return { errors: errorKeeper.errors, expression: null }
  }

  const builder = new PredicateRepresenatationBuilder()
  const expression = builder.visit(tree)

  return { errors: [], expression: expression }
}


module.exports.parsePredicate = parsePredicate
module.exports.parseIntegerExpression = parseIntegerExpression
