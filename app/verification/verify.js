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
 *  - `invariants` (might be omited),
 *  - `variants` (might be omited),
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
  const invariants = (task.invariants ? task.invariants : [])
    .map(src => parsePredicate(src).predicate)
  const variants = (task.variants ? task.variants : [])
    .map(src => parseIntegerExpression(src).expression)
  const axioms = (task.axioms ? task.axioms : [])
    .map(ax => Axioms[ax])
    .reduce((res, ax) => res | ax, 0)
  
  let err = ''
  if (!precondition)                err += 'Invalid precondition. '
  if (!postcondition)               err += 'Invalid postcondition. '
  if (invariants.some(inv => !inv)) err += 'Invalid invariants. '
  if (variants.some(v => !v))       err += 'Invalid variants. '
  if (err) return Promise.reject(new Error(err))
  
  const { errors, program } = parsePseudocode(code)
  if (errors.length > 0) {
    return Promise.resolve({ parsingErrors: errors, semanticErrors: null })
  }

  const spec = { precondition, postcondition, invariants, variants }
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
