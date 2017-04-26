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
  const precondition = parsePredicate(task.precondition).predicate
  const postcondition = parsePredicate(task.postcondition).predicate
  const invariants = task.invariant
    ? [parsePredicate(task.invariant).predicate]
    : []
  const boundaryFunctions = task.boundaryFunction
    ? [parseIntegerExpression(task.boundaryFunction).expression]
    : []
  const axioms = task.axioms
    .map(ax => Axioms[ax])
    .reduce((res, ax) => res | ax, 0)

  // TODO: Replace lines above when we are ready to support multiple loops.
  // (correct the function description after solving)
  // const invariants = task.invariants
  //   .map(src => parsePredicate(src).predicate)
  // const boundaryFunctions = task.boundaryFunctions
  //   .map(src => parseIntegerExpression(src).predicate)

  // TODO: For now we consider an error in a task to be a programming error.
  assert(precondition !== null)
  assert(postcondition !== null)
  assert(invariants.every(inv => inv !== null))
  assert(boundaryFunctions.every(bf => bf !== null))

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


  // // rotate3cw: "x, y, z = X, Y, Z"
  // const precondition = {
  //   type: 'and',
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
  //       op: '=',
  //       left: { type: 'var', var: { type: 'name', name: 'y' } },
  //       right: { type: 'var', var: { type: 'name', name: 'Y' } }
  //     }
  //   },
  //   right: {
  //     type: 'comp',
  //     op: '=',
  //     left: { type: 'var', var: { type: 'name', name: 'z' } },
  //     right: { type: 'var', var: { type: 'name', name: 'Z' } }
  //   }
  // }
  // // rotate3cw: "x, y, z = Z, X, Y"
  // const postcondition = {
  //   type: 'and',
  //   left: {
  //     type: 'and',
  //     left: {
  //       type: 'comp',
  //       op: '=',
  //       left: { type: 'var', var: { type: 'name', name: 'x' } },
  //       right: { type: 'var', var: { type: 'name', name: 'Z' } }
  //     },
  //     right: {
  //       type: 'comp',
  //       op: '=',
  //       left: { type: 'var', var: { type: 'name', name: 'y' } },
  //       right: { type: 'var', var: { type: 'name', name: 'X' } }
  //     }
  //   },
  //   right: {
  //     type: 'comp',
  //     op: '=',
  //     left: { type: 'var', var: { type: 'name', name: 'z' } },
  //     right: { type: 'var', var: { type: 'name', name: 'Y' } }
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


  // // sort3asc : "x, y, z = X, Y, Z",\
  // const precondition = {
  //   type: 'and',
  //   left: {
  //     type: 'comp',
  //     op: '=',
  //     left: { type: 'var', var: { type: 'name', name: 'x' } },
  //     right: { type: 'var', var: { type: 'name', name: 'X' } },
  //   },
  //   right: {
  //     type: 'and',
  //     left: {
  //       type: 'comp',
  //       op: '=',
  //       left: { type: 'var', var: { type: 'name', name: 'y' } },
  //       right: { type: 'var', var: { type: 'name', name: 'Y' } },
  //     },
  //     right: {
  //       type: 'comp',
  //       op: '=',
  //       left: { type: 'var', var: { type: 'name', name: 'z' } },
  //       right: { type: 'var', var: { type: 'name', name: 'Z' } },
  //     }
  //   }
  // }
  // // sort3asc : "x <= y <= z && perm((x,y,z), (X,Y,Z))"
  // const postcondition = {
  //   type: 'and',
  //   left: {
  //     type: 'and',
  //     left: {
  //       type: 'comp',
  //       op: '<=',
  //       left: { type: 'var', var: { type: 'name', name: 'x' } },
  //       right: { type: 'var', var: { type: 'name', name: 'y' } }
  //     },
  //     right: {
  //       type: 'comp',
  //       op: '<=',
  //       left: { type: 'var', var: { type: 'name', name: 'y' } },
  //       right: { type: 'var', var: { type: 'name', name: 'z' } }
  //     }
  //   },
  //   right: {
  //     type: 'or',
  //     left: {
  //       type: 'or',
  //       left: pairviseEquals('x','y','z', 'X', 'Y', 'Z'),
  //       right: pairviseEquals('x','y','z', 'X', 'Z', 'Y')
  //     },
  //     right: {
  //       type: 'or',
  //       left: {
  //         type: 'or',
  //         left: pairviseEquals('x','y','z', 'Y', 'X', 'Z'),
  //         right: pairviseEquals('x','y','z', 'Y', 'Z', 'X')
  //       },
  //       right: {
  //         type: 'or',
  //         left: pairviseEquals('x','y','z', 'Z', 'X', 'Y'),
  //         right: pairviseEquals('x','y','z', 'Z', 'Y', 'X')
  //       }
  //     }
  //   }
  // }

  // // invert: n >= 0 && b[0:n-1] = B[0:n-1]
  // //         n >= 0 && (A k : 0 <= k < n : b[k] = B[k])
  // const precondition = {
  //   type: 'and',
  //   left: {
  //     type: 'comp',
  //     op: '>=',
  //     left: { type: 'var', var: { type: 'name', name: 'n' } },
  //     right: { type: 'const', const: 0 }
  //   },
  //   right: {
  //     type: 'forall',
  //     boundedVars: [ { type: 'name', name: 'k' } ],
  //     condition: {
  //       type: 'and',
  //       left: {
  //         type: 'comp',
  //         op: '<=',
  //         left: { type: 'const', const: 0 },
  //         right: { type: 'var', var: { type: 'name', name: 'k' } }
  //       },
  //       right: {
  //         type: 'comp',
  //         op: '<',
  //         left: { type: 'var', var: { type: 'name', name: 'k' } },
  //         right: { type: 'var', var: { type: 'name', name: 'n' } }
  //       }
  //     },
  //     inner: {
  //       type: 'comp',
  //       op: '=',
  //       left: {
  //         type: 'var',
  //         var: {
  //           type: 'select',
  //           base: { type: 'name', name: 'b' },
  //           selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //         }
  //       },
  //       right: {
  //         type: 'var',
  //         var: {
  //           type: 'select',
  //           base: { type: 'name', name: 'B' },
  //           selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //         }
  //       }
  //     }
  //   }
  // }
  // // invert: (A k : 0 <= k < n : b[k] = -B[k])
  // const postcondition = {
  //   type: 'forall',
  //   boundedVars: [ { type: 'name', name: 'k' } ],
  //   condition: {
  //     type: 'and',
  //     left: {
  //       type: 'comp',
  //       op: '<=',
  //       left: { type: 'const', const: 0 },
  //       right: { type: 'var', var: { type: 'name', name: 'k' } }
  //     },
  //     right: {
  //       type: 'comp',
  //       op: '<',
  //       left: { type: 'var', var: { type: 'name', name: 'k' } },
  //       right: { type: 'var', var: { type: 'name', name: 'n' } }
  //     }
  //   },
  //   inner: {
  //     type: 'comp',
  //     op: '=',
  //     left: {
  //       type: 'var',
  //       var: {
  //         type: 'select',
  //         base: { type: 'name', name: 'b' },
  //         selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //       }
  //     },
  //     right: {
  //       type: 'negate',
  //       inner: {
  //         type: 'var',
  //         var: {
  //           type: 'select',
  //           base: { type: 'name', name: 'B' },
  //           selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //         }
  //       }
  //     }
  //   }
  // }
  // // invert: 0 <= i <= n && (A k : 0 <= k < i : b[k] = -B[k]) && (A k : i <= k < n : b[k] = B[k])
  // const invariants = [{
  //   type: 'and',
  //   left: {
  //     type: 'and',
  //     left: {
  //       type: 'comp',
  //       op: '<=',
  //       left: { type: 'const', const: 0 },
  //       right: { type: 'var', var: { type: 'name', name: 'i' } }
  //     },
  //     right: {
  //       type: 'comp',
  //       op: '<=',
  //       left: { type: 'var', var: { type: 'name', name: 'i' } },
  //       right: { type: 'var', var: { type: 'name', name: 'n' } }
  //     }
  //   },
  //   right: {
  //     type: 'and',
  //     left: {
  //       type: 'forall',
  //       boundedVars: [ { type: 'name', name: 'k' } ],
  //       condition: {
  //         type: 'and',
  //         left: {
  //           type: 'comp',
  //           op: '<=',
  //           left: { type: 'const', const: 0 },
  //           right: { type: 'var', var: { type: 'name', name: 'k' } }
  //         },
  //         right: {
  //           type: 'comp',
  //           op: '<',
  //           left: { type: 'var', var: { type: 'name', name: 'k' } },
  //           right: { type: 'var', var: { type: 'name', name: 'i' } }
  //         }
  //       },
  //       inner: {
  //         type: 'comp',
  //         op: '=',
  //         left: {
  //           type: 'var',
  //           var: {
  //             type: 'select',
  //             base: { type: 'name', name: 'b' },
  //             selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //           }
  //         },
  //         right: {
  //           type: 'negate',
  //           inner: {
  //             type: 'var',
  //             var: {
  //               type: 'select',
  //               base: { type: 'name', name: 'B' },
  //               selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //             }
  //           }
  //         }
  //       }
  //     },
  //     right: {
  //       type: 'forall',
  //       boundedVars: [ { type: 'name', name: 'k' } ],
  //       condition: {
  //         type: 'and',
  //         left: {
  //           type: 'comp',
  //           op: '<=',
  //           left: { type: 'var', var: { type: 'name', name: 'i' } },
  //           right: { type: 'var', var: { type: 'name', name: 'k' } }
  //         },
  //         right: {
  //           type: 'comp',
  //           op: '<',
  //           left: { type: 'var', var: { type: 'name', name: 'k' } },
  //           right: { type: 'var', var: { type: 'name', name: 'n' } }
  //         }
  //       },
  //       inner: {
  //         type: 'comp',
  //         op: '=',
  //         left: {
  //           type: 'var',
  //           var: {
  //             type: 'select',
  //             base: { type: 'name', name: 'b' },
  //             selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //           }
  //         },
  //         right: {
  //           type: 'var',
  //           var: {
  //             type: 'select',
  //             base: { type: 'name', name: 'B' },
  //             selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }]
  // // invert: n - i
  // const boundaryFunctions = [{
  //   type: 'minus',
  //   left: { type: 'var', var: { type: 'name', name: 'n' } },
  //   right: { type: 'var', var: { type: 'name', name: 'i' } }
  // }]
  
  // // linear_search: n >= 0 && b[0:n-1] = B[0:n-1]
  // //                n >= 0 && (A k : 0 <= k < n : b[k] = B[k])
  // const precondition = {
  //   type: 'and',
  //   left: {
  //     type: 'comp',
  //     op: '>=',
  //     left: { type: 'var', var: { type: 'name', name: 'n' } },
  //     right: { type: 'const', const: 0 }
  //   },
  //   right: {
  //     type: 'forall',
  //     boundedVars: [ { type: 'name', name: 'k' } ],
  //     condition: {
  //       type: 'and',
  //       left: {
  //         type: 'comp',
  //         op: '<=',
  //         left: { type: 'const', const: 0 },
  //         right: { type: 'var', var: { type: 'name', name: 'k' } }
  //       },
  //       right: {
  //         type: 'comp',
  //         op: '<',
  //         left: { type: 'var', var: { type: 'name', name: 'k' } },
  //         right: { type: 'var', var: { type: 'name', name: 'n' } }
  //       }
  //     },
  //     inner: {
  //       type: 'comp',
  //       op: '=',
  //       left: {
  //         type: 'var',
  //         var: {
  //           type: 'select',
  //           base: { type: 'name', name: 'b' },
  //           selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //         }
  //       },
  //       right: {
  //         type: 'var',
  //         var: {
  //           type: 'select',
  //           base: { type: 'name', name: 'B' },
  //           selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //         }
  //       }
  //     }
  //   }
  // }
  // // linear_search: 0 <= i < n && B[i] = x || i = n && (A k : 0 <= k < n : x != B[k])
  // const postcondition = {
  //   type: 'or',
  //   left: {
  //     type: 'and',
  //     left: {
  //       type: 'and',
  //       left: {
  //         type: 'comp',
  //         op: '<=',
  //         left: { type: 'const', const: 0 },
  //         right: { type: 'var', var: { type: 'name', name: 'i' } }
  //       },
  //       right: {
  //         type: 'comp',
  //         op: '<',
  //         left: { type: 'var', var: { type: 'name', name: 'i' } },
  //         right: { type: 'var', var: { type: 'name', name: 'n' } }
  //       }
  //     },
  //     right: {
  //       type: 'comp',
  //       op: '=',
  //       left: {
  //         type: 'var',
  //         var: {
  //           type: 'select',
  //           base: { type: 'name', name: 'B' },
  //           selector: { type: 'var', var: { type: 'name', name: 'i' } }
  //         }
  //       },
  //       right: { type: 'var', var: { type: 'name', name: 'x' } }
  //     }
  //   },
  //   right: {
  //     type: 'and',
  //     left: {
  //       type: 'comp',
  //       op: '=',
  //       left: { type: 'var', var: { type: 'name', name: 'i' } },
  //       right: { type: 'var', var: { type: 'name', name: 'n' } }
  //     },
  //     right: {
  //       type: 'forall',
  //       boundedVars: [ { type: 'name', name: 'k' } ],
  //       condition: {
  //         type: 'and',
  //         left: {
  //           type: 'comp',
  //           op: '<=',
  //           left: { type: 'const', const: 0 },
  //           right: { type: 'var', var: { type: 'name', name: 'k' } }
  //         },
  //         right: {
  //           type: 'comp',
  //           op: '<',
  //           left: { type: 'var', var: { type: 'name', name: 'k' } },
  //           right: { type: 'var', var: { type: 'name', name: 'n' } }
  //         }
  //       },
  //       inner: {
  //         type: 'comp',
  //         op: '<>',
  //         left: {
  //           type: 'var',
  //           var: {
  //             type: 'select',
  //             base: { type: 'name', name: 'B' },
  //             selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //           }
  //         },
  //         right: { type: 'var', var: { type: 'name', name: 'x' } }
  //       }
  //     }
  //   }
  // }
  // // linear_search: 0 <= i <= n && b[0:n-1] = B[0:n-1] && (A k : 0 <= k < i : x != B[k])
  // const invariants = [{
  //   type: 'and',
  //   left: {
  //     type: 'and',
  //     left: {
  //       type: 'comp',
  //       op: '<=',
  //       left: { type: 'const', const: 0 },
  //       right: { type: 'var', var: { type: 'name', name: 'i' } }
  //     },
  //     right: {
  //       type: 'comp',
  //       op: '<=',
  //       left: { type: 'var', var: { type: 'name', name: 'i' } },
  //       right: { type: 'var', var: { type: 'name', name: 'n' } }
  //     }
  //   },
  //   right: {
  //     type: 'and',
  //     left: {
  //       type: 'forall',
  //       boundedVars: [ { type: 'name', name: 'k' } ],
  //       condition: {
  //         type: 'and',
  //         left: {
  //           type: 'comp',
  //           op: '<=',
  //           left: { type: 'const', const: 0 },
  //           right: { type: 'var', var: { type: 'name', name: 'k' } }
  //         },
  //         right: {
  //           type: 'comp',
  //           op: '<',
  //           left: { type: 'var', var: { type: 'name', name: 'k' } },
  //           right: { type: 'var', var: { type: 'name', name: 'n' } }
  //         }
  //       },
  //       inner: {
  //         type: 'comp',
  //         op: '=',
  //         left: {
  //           type: 'var',
  //           var: {
  //             type: 'select',
  //             base: { type: 'name', name: 'b' },
  //             selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //           }
  //         },
  //         right: {
  //           type: 'var',
  //           var: {
  //             type: 'select',
  //             base: { type: 'name', name: 'B' },
  //             selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //           }
  //         }
  //       }
  //     },
  //     right: {
  //       type: 'forall',
  //       boundedVars: [ { type: 'name', name: 'k' } ],
  //       condition: {
  //         type: 'and',
  //         left: {
  //           type: 'comp',
  //           op: '<=',
  //           left: { type: 'const', const: 0 },
  //           right: { type: 'var', var: { type: 'name', name: 'k' } }
  //         },
  //         right: {
  //           type: 'comp',
  //           op: '<',
  //           left: { type: 'var', var: { type: 'name', name: 'k' } },
  //           right: { type: 'var', var: { type: 'name', name: 'i' } }
  //         }
  //       },
  //       inner: {
  //         type: 'comp',
  //         op: '<>',
  //         left: {
  //           type: 'var',
  //           var: {
  //             type: 'select',
  //             base: { type: 'name', name: 'B' },
  //             selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //           }
  //         },
  //         right: { type: 'var', var: { type: 'name', name: 'x' } }
  //       }
  //     }
  //   }
  // }]
  // // linear_search: n - i
  // const boundaryFunctions = [{
  //   type: 'minus',
  //   left: { type: 'var', var: { type: 'name', name: 'n' } },
  //   right: { type: 'var', var: { type: 'name', name: 'i' } }
  // }]

  // // reverse: n > 0 && b[0:n-1] = B[0:n-1]
  // //          n > 0 && (A k : 0 <= k < n : b[k] = B[k])
  // const precondition = {
  //   type: 'and',
  //   left: {
  //     type: 'comp',
  //     op: '>=',
  //     left: { type: 'var', var: { type: 'name', name: 'n' } },
  //     right: { type: 'const', const: 0 }
  //   },
  //   right: {
  //     type: 'forall',
  //     boundedVars: [ { type: 'name', name: 'k' } ],
  //     condition: {
  //       type: 'and',
  //       left: {
  //         type: 'comp',
  //         op: '<=',
  //         left: { type: 'const', const: 0 },
  //         right: { type: 'var', var: { type: 'name', name: 'k' } }
  //       },
  //       right: {
  //         type: 'comp',
  //         op: '<',
  //         left: { type: 'var', var: { type: 'name', name: 'k' } },
  //         right: { type: 'var', var: { type: 'name', name: 'n' } }
  //       }
  //     },
  //     inner: {
  //       type: 'comp',
  //       op: '=',
  //       left: {
  //         type: 'var',
  //         var: {
  //           type: 'select',
  //           base: { type: 'name', name: 'b' },
  //           selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //         }
  //       },
  //       right: {
  //         type: 'var',
  //         var: {
  //           type: 'select',
  //           base: { type: 'name', name: 'B' },
  //           selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //         }
  //       }
  //     }
  //   }
  // }
  // // reverse: (A k : 0 <= k < n : b[k] = B[(n - 1) - k])
  // const postcondition = {
  //   type: 'forall',
  //   boundedVars: [ { type: 'name', name: 'k' } ],
  //   condition: {
  //     type: 'and',
  //     left: {
  //       type: 'comp',
  //       op: '<=',
  //       left: { type: 'const', const: 0 },
  //       right: { type: 'var', var: { type: 'name', name: 'k' } }
  //     },
  //     right: {
  //       type: 'comp',
  //       op: '<',
  //       left: { type: 'var', var: { type: 'name', name: 'k' } },
  //       right: { type: 'var', var: { type: 'name', name: 'n' } }
  //     }
  //   },
  //   inner: {
  //     type: 'comp',
  //     op: '=',
  //     left: {
  //       type: 'var',
  //       var: {
  //         type: 'select',
  //         base: { type: 'name', name: 'b' },
  //         selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //       }
  //     },
  //     right: {
  //       type: 'var',
  //       var: {
  //         type: 'select',
  //         base: { type: 'name', name: 'B' },
  //         selector: {
  //           type: 'minus',
  //           left: { 
  //             type: 'minus',
  //             left: { type: 'var', var: { type: 'name', name: 'n' } },
  //             right: { type: 'const', const: 1 }
  //           },
  //           right: { type: 'var', var: { type: 'name', name: 'k' } }
  //         }
  //       }
  //     }
  //   }
  // }
  // // reverse: 0 <= 2*i <= n + 1 && (A k : 0 <= k < i || n-i <= k < n : b[k] = B[(n - 1) - k]) && (A k : i <= k < n-i : b[k] = B[k])
  // const invariants = [{
  //   type: 'and',
  //   left: {
  //     type: 'and',
  //     left: {
  //       type: 'comp',
  //       op: '<=',
  //       left: { type: 'const', const: 0 },
  //       right: {
  //         type: 'mult',
  //         left: { type: 'const', const: 2 },
  //         right: { type: 'var', var: { type: 'name', name: 'i' } }
  //       }
  //     },
  //     right: {
  //       type: 'comp',
  //       op: '<=',
  //       left: {
  //         type: 'mult',
  //         left: { type: 'const', const: 2 },
  //         right: { type: 'var', var: { type: 'name', name: 'i' } }
  //       },
  //       right: {
  //         type: 'plus',
  //         left: { type: 'var', var: { type: 'name', name: 'n' } },
  //         right: { type: 'const', const: 1 }
  //       }
  //     }
  //   },
  //   right: {
  //     type: 'and',
  //     left: {
  //       type: 'forall',
  //       boundedVars: [ { type: 'name', name: 'k' } ],
  //       condition: {
  //         type: 'or',
  //         left: {
  //           type: 'and',
  //           left: {
  //             type: 'comp',
  //             op: '<=',
  //             left: { type: 'const', const: 0 },
  //             right: { type: 'var', var: { type: 'name', name: 'k' } }
  //           },
  //           right: {
  //             type: 'comp',
  //             op: '<',
  //             left: { type: 'var', var: { type: 'name', name: 'k' } },
  //             right: { type: 'var', var: { type: 'name', name: 'i' } }
  //           }
  //         },
  //         right: {
  //           type: 'and',
  //           left: {
  //             type: 'comp',
  //             op: '<=',
  //             left: {
  //               type: 'minus',
  //               left: { type: 'var', var: { type: 'name', name: 'n' } },
  //               right: { type: 'var', var: { type: 'name', name: 'i' } }
  //             },
  //             right: { type: 'var', var: { type: 'name', name: 'k' } }
  //           },
  //           right: {
  //             type: 'comp',
  //             op: '<',
  //             left: { type: 'var', var: { type: 'name', name: 'k' } },
  //             right: { type: 'var', var: { type: 'name', name: 'n' } }
  //           }
  //         }
  //       },
  //       inner: {
  //         type: 'comp',
  //         op: '=',
  //         left: {
  //           type: 'var',
  //           var: {
  //             type: 'select',
  //             base: { type: 'name', name: 'b' },
  //             selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //           }
  //         },
  //         right: {
  //           type: 'var',
  //           var: {
  //             type: 'select',
  //             base: { type: 'name', name: 'B' },
  //             selector: {
  //               type: 'minus',
  //               left: { 
  //                 type: 'minus',
  //                 left: { type: 'var', var: { type: 'name', name: 'n' } },
  //                 right: { type: 'const', const: 1 }
  //               },
  //               right: { type: 'var', var: { type: 'name', name: 'k' } }
  //             }
  //           }
  //         }
  //       }
  //     },
  //     right: {
  //       type: 'forall',
  //       boundedVars: [ { type: 'name', name: 'k' } ],
  //       condition: {
  //         type: 'and',
  //         left: {
  //           type: 'comp',
  //           op: '<=',
  //           left: { type: 'var', var: { type: 'name', name: 'i' } },
  //           right: { type: 'var', var: { type: 'name', name: 'k' } }
  //         },
  //         right: {
  //           type: 'comp',
  //           op: '<',
  //           left: { type: 'var', var: { type: 'name', name: 'k' } },
  //           right: {
  //             type: 'minus',
  //             left: { type: 'var', var: { type: 'name', name: 'n' } },
  //             right: { type: 'var', var: { type: 'name', name: 'i' } }
  //           }
  //         }
  //       },
  //       inner: {
  //         type: 'comp',
  //         op: '=',
  //         left: {
  //           type: 'var',
  //           var: {
  //             type: 'select',
  //             base: { type: 'name', name: 'b' },
  //             selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //           }
  //         },
  //         right: {
  //           type: 'var',
  //           var: {
  //             type: 'select',
  //             base: { type: 'name', name: 'B' },
  //             selector: { type: 'var', var: { type: 'name', name: 'k' } }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }]
  // // reverse: n - 2*i
  // const boundaryFunctions = [{
  //   type: 'minus',
  //   left: { type: 'var', var: { type: 'name', name: 'n' } },
  //   right: {
  //     type: 'mult',
  //     left: { type: 'const', const: 2 },
  //     right: { type: 'var', var: { type: 'name', name: 'i' } }
  //   }
  // }]

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

// // TODO: remove
// function pairviseEquals(x,y,z,X,Y,Z) {
//   return {
//     type: 'and',
//     left: {
//       type: 'comp',
//       op: '=',
//       left: { type: 'var', var: { type: 'name', name: x } },
//       right: { type: 'var', var: { type: 'name', name: X } },
//     },
//     right: {
//       type: 'and',
//       left: {
//         type: 'comp',
//         op: '=',
//         left: { type: 'var', var: { type: 'name', name: y } },
//         right: { type: 'var', var: { type: 'name', name: Y } },
//       },
//       right: {
//         type: 'comp',
//         op: '=',
//         left: { type: 'var', var: { type: 'name', name: z } },
//         right: { type: 'var', var: { type: 'name', name: Z } },
//       }
//     }
//   }
// }

module.exports = verify
