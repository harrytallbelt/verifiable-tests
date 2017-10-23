const assert = require('assert')
const parsePseudocode = require('../pseudocode-parser')
const { parsePredicate, parseIntegerExpression } = require('../predicate-parser')
const { prove, convertToSimplifySyntax, Axioms, toAxiomEnum } = require('../simplify')
const wp = require('./wp')
const convertWpContextToError = require('./wp-context-to-error')
const { sum } = require('./utils')

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
  const axioms = toAxiomEnum(task.axioms ? task.axioms : [])
  
  let err = ''
  if (!precondition)                         err += 'Invalid precondition. '
  if (!postcondition)                        err += 'Invalid postcondition. '
  if (invariants.some(inv => !inv))          err += 'Invalid invariants. '
  if (variants.some(v => !v))                err += 'Invalid variants. '
  if (variants.length !== invariants.length) err += 'Different number of variants and invariants. '
  if (err) return Promise.reject(new Error(err))

  const { errors, program } = parsePseudocode(code)
  if (errors.length > 0) {
    return Promise.resolve({ parsingErrors: errors, semanticErrors: null })
  }

  const loopCount = countLoopsInCommandSeq(program.statements)
  if (loopCount !== invariants.length) {
    const error = {
      message: `The specification suggests ${invariants.length} loops, while the program has ${loopCount}.`
    }
    if (program.statements.length > 0) {
      error.start = program.statements[0].textRange.start
      error.end = program.statements[program.statements.length - 1].textRange.end
    } else {
      error.start = { row: 0, col: 0 }
      error.end = { row: 0, col: 0 }
    }
    return { parsingErrors: null, semanticErrors: [error] }
  }

  const spec = { precondition, postcondition, invariants, variants }
  const { predicates, context } = wp(spec, program)
  
  const simplifyPredicates = convertToSimplifySyntax(predicates, axioms)

  return prove(simplifyPredicates)
    .then(proofResults => {
      const errors = context
        .filter((_, i) => !proofResults[i])
        .map(convertWpContextToError)
      return { parsingErrors: null, semanticErrors: errors }
    })
}

function countLoopsInCommandSeq(commandSeq) {
  return sum(commandSeq.map(countLoopsInCommand))
}

function countLoopsInCommand(command) {
  switch (command.type) {
    case 'abort':
    case 'skip':
    case 'assign':
      return 0
    case 'if':
      return sum(command.commands.map(countLoopsInCommandSeq))
    case 'do':
      return 1 + sum(command.commands.map(countLoopsInCommandSeq))
    default:
      throw new Error(`Unknown command type: ${command.type}.`)
  }
}

module.exports = verify
