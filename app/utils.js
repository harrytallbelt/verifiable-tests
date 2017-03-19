// If you ever find yourself adding 10th
// function here, consider lodash.

function findLastIndex(arr, predicate) {
  for (let i = arr.length - 1; i >= 0; --i) {
    if (predicate(arr[i], i, arr)) {
      return i
    }
  }
  return -1
}

function flatten(arr) {
  return arr.reduce((acc, itemOrArr) => acc.concat(itemOrArr), [])
}

module.exports.findLastIndex = findLastIndex
module.exports.flatten = flatten
