const parsePseudocode = require('../pseudocode-parser')
const parsePredicate = require('../predicate-parser')
const prove = require('./prove')

// TODO: implemented these
const parseIntegerExpression = _ => {throw new Error('not implemented')}
const convertWpContextToError = _ => {throw new Error('not implemented')}
const convertToSimplifyPredicate = _ => {throw new Error('not implemented')}

/* Given a task description object and a pseudocode program
 * source code, attemts to prove the program's validity.
 * Expects `task` to contain fields:
 *  - `precondition`,
 *  - `postcondition`,
 *  - `invariant`,
 *  - `boundaryFunction`.
 * Returns a promise of an object with fields:
 *  - `parsingErrors`,
 *  - `semanticErrors`,
 * where `parsingErrors` is an array of parsing error
 * objects, that contain fields:
 *  - `row`
 *  - `col`,
 *  - `message`,
 * and `semanticErrors` is an array of semantic
 * error objects that contain fields:
 *  - `start`,
 *  - `end`,
 *  - `message`.
 * Both `start` and `end` are objects with `row` and `col` fields.
*/
function verify(task, code) {
  // TODO: verification-script.md also says
  // about a list of Simplify definitions.
  // (correct the function description after solving)
  const precondition = parsePredicate(task.precondition).predicate
  const postcondition = parsePredicate(task.postcondition).predicate
  const invariants = [task.invariant]
  const boundaryFunctions = [task.boundaryFunctions]

  // TODO: Replace lines above when we are ready to support multiple loops.
  // (correct the function description after solving)
  // const invariants = task.invariants
  //   .map(src => parsePredicate(src).predicate)
  // const boundaryFunctions = task.boundaryFunctions
  //   .map(src => parseIntegerExpression(src).predicate)

  assert(precondition !== null)
  assert(postcondition !== null)
  assert(invariants.every(inv => inv !== null))
  assert(boundaryFunctions.every(bf => bf !== null))

  const { errors, program } = parsePseudocode(code)
  if (errors.length > 0) {
    return Promise.resolve({ parsingErrors: errors, semanticErrors: null })
  }

  const spec = { precondition, postcondition, invariants, boundaryFunctions }
  const { predicates, context } = wp(spec, program)

  const simplifyPredicateBatch = predicates
    .map(convertToSimplifyPredicate)
    .join(' ')

  return prove(simplifyPredicateBatch)
    .then(proofResults => {
      const errors = context
        .filter((_, i) => !proofResults[i])
        .map(convertWpContextToError)
      return { parsingErrors: null, semanticErrors: errors }
    })
}

module.exports = verify
