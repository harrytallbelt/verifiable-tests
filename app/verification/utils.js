// If you ever find yourself adding 10th
// function here, consider using lodash instead.

function flatten(arr) {
  return arr.reduce((acc, itemOrArr) => acc.concat(itemOrArr), [])
}

function sum(arr) {
  return arr.reduce((sum, n) => sum + n, 0)
}

function arraysAreEqual(a, b) {
  return a != null && b != null
    && a.length === b.length
    && a.every((a_i, i) => a_i === b[i])
}

module.exports.arraysAreEqual = arraysAreEqual
module.exports.flatten = flatten
module.exports.sum = sum
