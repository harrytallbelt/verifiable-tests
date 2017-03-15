const ErrorListener = require('antlr4').error.ErrorListener

/* An ErrorListener implementation
 * that attempts nothing but to save
 * all the recognizer errors in a list.
*/
function ErrorListListener() {
  ErrorListener.call(this)
  this.errors = []
  return this
}

ErrorListListener.prototype = Object.create(ErrorListener.prototype)
ErrorListListener.prototype.constructor = ErrorListListener

ErrorListListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
  const error = {
    offendingSymbol: offendingSymbol,
    row: line,
    col: column,
    message: msg,
    innerError: e
  }
  this.errors.push(error)
}

module.exports = ErrorListListener
