const parsePseudocode = require('../pseudocode-parser')
const { prove, convertToSimplifySyntax } = require('../simplify')
const wp = require('./wp')
const convertWpContextToError = require('./wp-context-to-error')
const { sum } = require('./utils')
const { parseTask } = require('./parse-task')

/* Given a task description object and a pseudocode program
 * source code, attemts to prove the program's validity.
 * Expects `task` to contain fields:
 *  - `precondition`,
 *  - `postcondition`,
 *  - `invariants` (might be omited),
 *  - `variants` (might be omited),
 *  - `axioms` (might be omited),
 *  - `shorthands` (might be omited),
 * where `shorthands` is an array of objects with fields:
 *  - `name`,
 *  - `args`,
 *  - `definition`.
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
  const { spec, axioms, error } = parseTask(task)
  if (error) {
    return Promise.reject(error)
  }
  const { errors, program } = parsePseudocode(code)
  if (errors.length > 0) {
    return Promise.resolve({ parsingErrors: errors, semanticErrors: null })
  }
  const loopNumberError = checkLoopNumberIsCorrect(program, spec.invariants.length)
  if (loopNumberError) {
    return Promise.resolve({ parsingErrors: null, semanticErrors: [loopNumberError] })
  }
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


function checkLoopNumberIsCorrect(program, loopNumber) {
  const actualLoopNumber = countLoopsInCommandSeq(program.statements)
  if (actualLoopNumber === loopNumber) {
    return null
  }
  const error = {
    message: `The specification suggests ${loopNumber} loops, `
            + `but the program has ${actualLoopNumber}.`
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
