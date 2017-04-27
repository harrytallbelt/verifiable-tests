const assert = require('assert')
const parsePseudocode = require('../pseudocode-parser')
const { parsePredicate, parseIntegerExpression } = require('../predicate-parser')
const { prove, convertToSimplifySyntax, Axioms } = require('../simplify')
const wp = require('./wp')
const convertWpContextToError = require('./wp-context-to-error')

/* Given a task description object and a pseudocode program
 * source code, attemts to prove the program's validity.
 * Expects `task` to contain fields:
 *  - `precondition`,
 *  - `postcondition`,
 *  - `invariant` (might be omited),
 *  - `boundaryFunction` (might be omited),
 *  - `axioms` (might be omited).
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
  const precondition = parsePredicate(task.precondition).predicate
  const postcondition = parsePredicate(task.postcondition).predicate
  const invariants = task.invariant
    ? [parsePredicate(task.invariant).predicate]
    : []
  const boundaryFunctions = task.boundaryFunction
    ? [parseIntegerExpression(task.boundaryFunction).expression]
    : []
  const axioms = (task.axioms ? task.axioms : [])
    .map(ax => Axioms[ax])
    .reduce((res, ax) => res | ax, 0)

  // TODO: Replace lines above when we are ready to support multiple loops.
  // (correct the function description after solving)
  // const invariants = task.invariants
  //   .map(src => parsePredicate(src).predicate)
  // const boundaryFunctions = task.boundaryFunctions
  //   .map(src => parseIntegerExpression(src).predicate)

  if (!precondition) {
    return Promise.reject(new Error('Invalid precondition.'))
  }
  if (!postcondition) {
    return Promise.reject(new Error('Invalid postcondition.'))
  }
  if (invariants.some(inv => !inv)) {
    return Promise.reject(new Error('Invalid invariants.'))
  }
  if (boundaryFunctions.some(bf => !bf)) {
    return Promise.reject(new Error('Invalid boundary functions.'))
  }

  const { errors, program } = parsePseudocode(code)
  if (errors.length > 0) {
    return Promise.resolve({ parsingErrors: errors, semanticErrors: null })
  }

  const spec = { precondition, postcondition, invariants, boundaryFunctions }
  const { predicates, context } = wp(spec, program)

  return convertToSimplifySyntax(predicates, axioms)
    .then(prove)
    .then(proofResults => {
      const errors = context
        .filter((_, i) => !proofResults[i])
        .map(convertWpContextToError)
      return { parsingErrors: null, semanticErrors: errors }
    })
}


module.exports = verify
