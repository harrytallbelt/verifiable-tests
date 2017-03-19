const assert = require('assert')
const parsePseudocode = require('../pseudocode-parser')
const { parsePredicate, parseIntegerExpression } = require('../predicate-parser')
const convertToSimplifyPredicate = require('./to-simplify-format')
const prove = require('./prove')
const wp = require('./wp')
const convertWpContextToError = require('./wp-context-to-error')

/* Given a task description object and a pseudocode program
 * source code, attemts to prove the program's validity.
 * Expects `task` to contain fields:
 *  - `precondition`,
 *  - `postcondition`,
 *  - `invariant` (might be omited),
 *  - `boundaryFunction` (might be omited),
 *  - `simplifyPrefix` (might be omited).
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
  // TODO: Uncomment!
  // const precondition = parsePredicate(task.precondition).predicate
  // const postcondition = parsePredicate(task.postcondition).predicate

  // swap: "x = X && y = Y"
  const precondition = {
    type: 'and',
    left: {
      type: 'comp',
      op: '=',
      left: { type: 'var', var: { type: 'name', name: 'x' } },
      right: { type: 'var', var: { type: 'name', name: 'X' } }
    },
    right: {
      type: 'comp',
      op: '=',
      left: { type: 'var', var: { type: 'name', name: 'y' } },
      right: { type: 'var', var: { type: 'name', name: 'Y' } }
    }
  }
  // swap: "x = Y && y = X"
  const postcondition = {
    type: 'and',
    left: {
      type: 'comp',
      op: '=',
      left: { type: 'var', var: { type: 'name', name: 'x' } },
      right: { type: 'var', var: { type: 'name', name: 'Y' } }
    },
    right: {
      type: 'comp',
      op: '=',
      left: { type: 'var', var: { type: 'name', name: 'y' } },
      right: { type: 'var', var: { type: 'name', name: 'X' } }
    }
  }

  const invariants = task.invariant ? [parsePredicate(task.invariant)] : []
  const boundaryFunctions =
    task.boundaryFunction ? [parseIntegerExpression(task.boundaryFunction)] : []

  // TODO: Replace lines above when we are ready to support multiple loops.
  // (correct the function description after solving)
  // const invariants = task.invariants
  //   .map(src => parsePredicate(src).predicate)
  // const boundaryFunctions = task.boundaryFunctions
  //   .map(src => parseIntegerExpression(src).predicate)

  // TODO: why do we compare with null? (And why strictly?)
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

  let simplifyString = task.simplifyPrefix ? task.simplifyPrefix : ''
  simplifyString = predicates.map(convertToSimplifyPredicate).join(' ')

  return prove(simplifyString)
    .then(proofResults => {
      const errors = context
        .filter((_, i) => !proofResults[i])
        .map(convertWpContextToError)
      return { parsingErrors: null, semanticErrors: errors }
    })
}

module.exports = verify
