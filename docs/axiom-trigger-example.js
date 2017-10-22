/* You do not have to define and export all three of these functions.
 * Omitting any of them is the same as defining a function, that always returns null.
 */ 
module.exports.onPredicate = onPredicate
module.exports.onIntegerExpression = onIntegerExpression
module.exports.onVariable = onVariable


/* You are free to create any helper functions, variables, classes, etc. */


function onPredicate(predicate, convertPredicate, convertIntegerExpression, convertVariable) {
  if (/*your axiom does not cover this case*/ (true)) {
    return null  // and it will be handled further by the system
  }
  /* Here you can convert all the predicate parts
   * you need by the means of `convertPredicate`,
   * `convertIntegerExpression`, and `convertVariable`
   * functions. The functions take only one argument,
   * which is either a predicate, an expression, or a variable.
   * The axiom set used by the functions is the one of the calling code.
   * Be cautious not to call `convertPredicate(predicate)`
   * here, as it will result in endless recursion.
   * To find out more about predicate representation struture
   * make sure to check the documentation (docs/ folder).
   */
  return '<predicate-simplify-representation>'
}

function onIntegerExpression(expression, convertPredicate, convertIntegerExpression, convertVariable) {
  if (/*your axiom does not cover this case*/ (true)) {
    return null  // and it will be handled further by the system
  }
  /* Here you can convert all the expression parts
   * you need by the means of `convertPredicate`,
   * `convertIntegerExpression`, and `convertVariable`
   * functions. The functions take only one argument,
   * which is either a predicate, an expression, or a variable.
   * The axiom set used by the functions is the one of the calling code.
   * Be cautious not to call `convertIntegerExpression(expression)`
   * here, as it will result in endless recursion.
   * To find out more about integer expression representation struture
   * make sure to check the documentation (docs/ folder).
   */
  return '<expression-simplify-representation>'
}


function onVariable(variable, convertPredicate, convertIntegerExpression, convertVariable) {
  if (/*your axiom does not cover this case*/ (true)) {
    return null  // and it will be handled further by the system
  }
  /* Here you can convert all the predicate parts
   * you need by the means of `convertPredicate`,
   * `convertIntegerExpression`, and `convertVariable`
   * functions. The functions take only one argument,
   * which is either a predicate, an expression, or a variable.
   * The axiom set used by the functions is the one of the calling code.
   * Be cautious not to call `convertVariable(variable)`
   * here, as it will result in endless recursion.
   * To find out more about variable representation struture
   * make sure to check the documentation (docs/ folder).
   */
  return '<variable-simplify-representation>'
}
