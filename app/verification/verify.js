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
  // const invariants = task.invariant ? [parsePredicate(task.invariant)] : []
  // const boundaryFunctions =
  //   task.boundaryFunction ? [parseIntegerExpression(task.boundaryFunction)] : []

  // TODO: Replace lines above when we are ready to support multiple loops.
  // (correct the function description after solving)
  // const invariants = task.invariants
  //   .map(src => parsePredicate(src).predicate)
  // const boundaryFunctions = task.boundaryFunctions
  //   .map(src => parseIntegerExpression(src).predicate)


  // // swap: "x = X && y = Y"
  // const precondition = {
  //   type: 'and',
  //   left: {
  //     type: 'comp',
  //     op: '=',
  //     left: { type: 'var', var: { type: 'name', name: 'x' } },
  //     right: { type: 'var', var: { type: 'name', name: 'X' } }
  //   },
  //   right: {
  //     type: 'comp',
  //     op: '=',
  //     left: { type: 'var', var: { type: 'name', name: 'y' } },
  //     right: { type: 'var', var: { type: 'name', name: 'Y' } }
  //   }
  // }
  // // swap: "x = Y && y = X"
  // const postcondition = {
  //   type: 'and',
  //   left: {
  //     type: 'comp',
  //     op: '=',
  //     left: { type: 'var', var: { type: 'name', name: 'x' } },
  //     right: { type: 'var', var: { type: 'name', name: 'Y' } }
  //   },
  //   right: {
  //     type: 'comp',
  //     op: '=',
  //     left: { type: 'var', var: { type: 'name', name: 'y' } },
  //     right: { type: 'var', var: { type: 'name', name: 'X' } }
  //   }
  // }

  // // abs: x = X
  // const precondition = {
  //   type: 'comp',
  //   op: '=',
  //   left: { type: 'var', var: { type: 'name', name: 'x' } },
  //   right: { type: 'var', var: { type: 'name', name: 'X' } }
  // }
  // // abs: x = X && X >= 0 || x = -X && X <= 0
  // const postcondition = {
  //   type: 'or',
  //   left: {
  //     type: 'and',
  //     left: {
  //       type: 'comp',
  //       op: '=',
  //       left: { type: 'var', var: { type: 'name', name: 'x' } },
  //       right: { type: 'var', var: { type: 'name', name: 'X' } }
  //     },
  //     right: {
  //       type: 'comp',
  //       op: '>=',
  //       left: { type: 'var', var: { type: 'name', name: 'X' } },
  //       right: { type: 'const', const: 0 }
  //     }
  //   },
  //   right: {
  //     type: 'and',
  //     left: {
  //       type: 'comp',
  //       op: '=',
  //       left: { type: 'var', var: { type: 'name', name: 'x' } },
  //       right: { type: 'negate', inner: { type: 'var', var: { type: 'name', name: 'X' } } }
  //     },
  //     right: {
  //       type: 'comp',
  //       op: '<=',
  //       left: { type: 'var', var: { type: 'name', name: 'X' } },
  //       right: { type: 'const', const: 0 }
  //     }
  //   }
  // }

  // invert: n >= 0 && b[0:n-1] = B[0:n-1]
  //         n >= 0 && (A k : 0 <= k < n : b[k] = B[k])
  const precondition = {
    type: 'and',
    left: {
      type: 'comp',
      op: '>=',
      left: { type: 'var', var: { type: 'name', name: 'n' } },
      right: { type: 'const', const: 0 }
    },
    right: {
      type: 'forall',
      boundedVars: [ { type: 'name', name: 'k' } ],
      condition: {
        type: 'and',
        left: {
          type: 'comp',
          op: '<=',
          left: { type: 'const', const: 0 },
          right: { type: 'var', var: { type: 'name', name: 'k' } }
        },
        right: {
          type: 'comp',
          op: '<',
          left: { type: 'var', var: { type: 'name', name: 'k' } },
          right: { type: 'var', var: { type: 'name', name: 'n' } }
        }
      },
      inner: {
        type: 'comp',
        op: '=',
        left: {
          type: 'var',
          var: {
            type: 'select',
            base: { type: 'name', name: 'b' },
            selector: { type: 'var', var: { type: 'name', name: 'k' } }
          }
        },
        right: {
          type: 'var',
          var: {
            type: 'select',
            base: { type: 'name', name: 'B' },
            selector: { type: 'var', var: { type: 'name', name: 'k' } }
          }
        }
      }
    }
  }
  // invert: (A k : 0 <= k < n : b[k] = -B[k])
  const postcondition = {
    type: 'forall',
    boundedVars: [ { type: 'name', name: 'k' } ],
    condition: {
      type: 'and',
      left: {
        type: 'comp',
        op: '<=',
        left: { type: 'const', const: 0 },
        right: { type: 'var', var: { type: 'name', name: 'k' } }
      },
      right: {
        type: 'comp',
        op: '<',
        left: { type: 'var', var: { type: 'name', name: 'k' } },
        right: { type: 'var', var: { type: 'name', name: 'n' } }
      }
    },
    inner: {
      type: 'comp',
      op: '=',
      left: {
        type: 'var',
        var: {
          type: 'select',
          base: { type: 'name', name: 'b' },
          selector: { type: 'var', var: { type: 'name', name: 'k' } }
        }
      },
      right: {
        type: 'negate',
        inner: {
          type: 'var',
          var: {
            type: 'select',
            base: { type: 'name', name: 'B' },
            selector: { type: 'var', var: { type: 'name', name: 'k' } }
          }
        }
      }
    }
  }
  // invert: 0 <= i <= n && (A k : 0 <= k < i : b[k] = -B[k]) && (A k : i <= k < n : b[k] = B[k])
  const invariants = [{
    type: 'and',
    left: {
      type: 'and',
      left: {
        type: 'comp',
        op: '<=',
        left: { type: 'const', const: 0 },
        right: { type: 'var', var: { type: 'name', name: 'i' } }
      },
      right: {
        type: 'comp',
        op: '<=',
        left: { type: 'var', var: { type: 'name', name: 'i' } },
        right: { type: 'var', var: { type: 'name', name: 'n' } }
      }
    },
    right: {
      type: 'and',
      left: {
        type: 'forall',
        boundedVars: [ { type: 'name', name: 'k' } ],
        condition: {
          type: 'and',
          left: {
            type: 'comp',
            op: '<=',
            left: { type: 'const', const: 0 },
            right: { type: 'var', var: { type: 'name', name: 'k' } }
          },
          right: {
            type: 'comp',
            op: '<',
            left: { type: 'var', var: { type: 'name', name: 'k' } },
            right: { type: 'var', var: { type: 'name', name: 'i' } }
          }
        },
        inner: {
          type: 'comp',
          op: '=',
          left: {
            type: 'var',
            var: {
              type: 'select',
              base: { type: 'name', name: 'b' },
              selector: { type: 'var', var: { type: 'name', name: 'k' } }
            }
          },
          right: {
            type: 'negate',
            inner: {
              type: 'var',
              var: {
                type: 'select',
                base: { type: 'name', name: 'B' },
                selector: { type: 'var', var: { type: 'name', name: 'k' } }
              }
            }
          }
        }
      },
      right: {
        type: 'forall',
        boundedVars: [ { type: 'name', name: 'k' } ],
        condition: {
          type: 'and',
          left: {
            type: 'comp',
            op: '<=',
            left: { type: 'var', var: { type: 'name', name: 'i' } },
            right: { type: 'var', var: { type: 'name', name: 'k' } }
          },
          right: {
            type: 'comp',
            op: '<',
            left: { type: 'var', var: { type: 'name', name: 'k' } },
            right: { type: 'var', var: { type: 'name', name: 'n' } }
          }
        },
        inner: {
          type: 'comp',
          op: '=',
          left: {
            type: 'var',
            var: {
              type: 'select',
              base: { type: 'name', name: 'b' },
              selector: { type: 'var', var: { type: 'name', name: 'k' } }
            }
          },
          right: {
            type: 'var',
            var: {
              type: 'select',
              base: { type: 'name', name: 'B' },
              selector: { type: 'var', var: { type: 'name', name: 'k' } }
            }
          }
        }
      }
    }
  }]
  // invert: n - i
  const boundaryFunctions = [{
    type: 'minus',
    left: { type: 'var', var: { type: 'name', name: 'n' } },
    right: { type: 'var', var: { type: 'name', name: 'i' } }
  }]

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
