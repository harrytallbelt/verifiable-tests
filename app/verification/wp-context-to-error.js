function convertWpContextToError(context) {
  if (context[0].type === 'seq' && context.length > 1) {
    return contextObjectToError(context[1])
  }
  return contextObjectToError(context[0])
}

function contextObjectToError(context) {
  let errorMessage = null
  switch (context.type) {
    case 'seq':
      errorMessage = 'The sequence of elementary commands does not lead to the specified postcondition.'
      break
    case 'if':
      switch (context.step) {
        case 1:
          errorMessage = 'An unsatisfactory set of if statement guards: the precondition does not imply the disjunction of all the guards.'
          break
        case 2:
          errorMessage = `The branch #${context.branch} of an if statement does not ensure the postcondition is true.`
          break
        default:
          throw new Error(`Unknown WP 'if' context step '${context.step}'.`)
      }
      break
    case 'do':
      switch (context.step) {
        case 1:
          errorMessage = 'The loop initialization commands do not set the invariant to be true.'
          break
        case 2:
          errorMessage = `The branch #${context.branch} of a loop does not ensure the loop invariant is true.`
          break
        case 3:
          errorMessage = 'An unsatisfactory set of loop guards: the loop invariant together with negation of all the guards does not imply the postcondition.'
          break
        case 4:
          errorMessage = 'An unsatisfactory set of loop guards: the loop invariant together with truth of some of the guards does not lead to the bound function being positive.'
          break
        case 5:
          errorMessage = `The branch #${context.branch} of a loop does not decrease the loop bound function.`
          break
        case 6: {
          const loopStart = `${context.loop.start.row}:${context.loop.start.col}`
          const loopEnd = `${context.loop.end.row}:${context.loop.end.col}`
          errorMessage = `One of the inner loops of the loop at (${loopStart} - ${loopEnd}) changes outer loop variant.`
        }
        break
        default:
          throw new Error(`Unknown WP 'do' context step '${context.step}'.`)
      }
      break
    default:
      throw new Error(`Unknown WP context type '${context.type}'.`)
  }
  return {
    start: context.start,
    end: context.end,
    message: errorMessage
  }
}

module.exports = convertWpContextToError
