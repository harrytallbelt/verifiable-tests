const parsePseudocode = require('../pseudocode-parser')
const parsePredicate = require('../predicate-parser')
const prove = require('./prove')

/* Given task description object and pseudocode program
 * source code, attemts to prove the program's validity.
 * Expects `task` to contain fields:
 *  - `precondition`,
 *  - `postcondition`,
 *  - `invariants`,
 *  - `boundaryFunctions`.
 * Returns a promise of an array of error objects with fields:
 *  - `row`,
 *  - `col`,
 *  - `message`.
*/
function verify(task, code) {
  // TODO: The format we assume doesn't correspond
  // to the current task format
  // TODO: verification-script.md also says
  // about a list of Simplify definitions.
  // (correct the function description after solving)
  const precondition = parsePredicate(task.precondition).predicate
  const postcondition = parsePredicate(task.postcondition).predicate
  const invariants = task.invariants
    .map(src => parsePredicate(src).predicate)
  const boundaryFunctions = task.boundaryFunctions
    // TODO: where should `parseIntegerExpression` be implemented?
    .map(src => parseIntegerExpression(src).predicate)

  // TODO: should we throw an exception instead?
  assert(precondition !== null)
  assert(postcondition !== null)
  assert(invariants.every(inv => inv !== null))
  assert(boundaryFunctions.every(bf => bf !== null))
  
  const { errors, program } = parsePseudocode(code)
  if (errors.length > 0) {
    return Promise.resolve(errors)
  }

  const spec = { precondition, postcondition, invariants, boundaryFunctions }
  const { predicates, context } = wp(spec, program)

  const simplifyPredicateBatch = predicates
    .map(convertToSimplifyPredicate)
    .join(' ')

  return prove(simplifyPredicateBatch)
    .then(simplifyResults => {
      const errors = context
        .filter((_, i) => simplifyResults[i])
        .map(/* Form an error? */)

      // TODO: is this a good return value format?
      // (we have one more return statement above)
      // TODO: Wp error gives as statement start and end,
      // whereas parser errors only have one specific location of an error.
      // So we have a mismathc of error types.
      // (correct the function description after solving)
      return errors
    })
}

module.exports = verify
