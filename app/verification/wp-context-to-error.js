// TODO: this is a naive implementation.
// It won't be of much help for a more complicated program structure.
function convertWpContextToError(context) {
  const leastRecentContext = context[context.length - 1]
  let errorMessage = null

  switch (leastRecentContext.type) {
    case 'seq':
      errorMessage = 'The sequence of elementary commands does not lead to the specified postcondition.'
      break
    case 'if':
      switch (leastRecentContext.step) {
        case 1:
          errorMessage = 'An unsatisfactory set of if statement guards: the precondition does not imply the disjunction of all the guards.'
          break
        case 2:
          errorMessage = `The branch #${leastRecentContext.branch} of an if statement does not ensure the postcondition is ture.`
          break
        default:
          throw new Error(`Unknown WP 'if' context step '${leastRecentContext.step}'.`)
      }
      break
    case 'do':
      switch (leastRecentContext.step) {
        case 1:
          errorMessage = 'The loop initialization commands do not set the invariant to be ture.'
          break
        case 2:
          errorMessage = `The branch #${leastRecentContext.branch} of a loop does not ensure the loop invariant is true. `
          break
        case 3:
          errorMessage = 'An unsatisfactory set of loop guards: the loop invarian together with all the guard negations do not imply the postcondition.'
          break
        case 4:
          errorMessage = 'An unsatisfactory set of loop guards: the loop invariant together with truth of some of the guards do not lead to the boundary function being positive.'
          break
        case 5:
          errorMessage = `The branch #${leastRecentContext.branch} of a loop does not decrease the loop boundary function.`
          break
        default:
          throw new Error(`Unknown WP 'do' context step '${leastRecentContext.step}'.`)
      }
      break
    default:
      throw new Error(`Unknown WP context type '${leastRecentContext.type}'.`)
  }

  return {
    start: leastRecentContext.start,
    end: leastRecentContext.end,
    message: errorMessage
  }
}

module.exports = convertWpContextToError
