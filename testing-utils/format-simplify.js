// Indentation unit: predicate components are indented with this string,
// repeated several times, depending on their nesting level.
// Use '' for no identation.
const DEFAULT_INDENT_STR = '  '
// All lines end with this string; predicates on the top level
// are separated with twice this string.
// Use ' ' for a one-line output ('' won't lead to valid predicates).
const DEFAULT_LINE_ENDING = '\n'
// An s-list shorter than this would be a one-liner.
// This number is not exact, though (see `estimatedLength`).
// Use value <= 0 to get no one-liners.
const DEFAULT_MAX_LENGTH = 60

/***************************************************************/
/* Note that formatting will remove comments from source code. */
/***************************************************************/

// You can run the file as a script like this
// cat filename | node format-simplify.js > out
if (!module.parent) {
  let code = ''
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read()
    if (chunk !== null) {
      code += chunk
    }
  })
  process.stdin.on('end', () => {
    const list = parse(code).map(combineAnds).map(combineOrs)
    const formattedCode = listToString(list,
      DEFAULT_INDENT_STR,
      DEFAULT_LINE_ENDING,
      DEFAULT_MAX_LENGTH)
    console.log(formattedCode)
  })
}

module.exports = { parse, combineAnds, combineOrs, listToString }

function parse(code) {
  return parseImpl(removeComments(code), 0).list
}

function parseImpl(code, i) {
  const list = []
  let argStart = -1
  for (; i < code.length; ++i) {
    if (code[i] === '(') {
      const res = parseImpl(code, i + 1)
      i = res.i; list.push(res.list)
    } else if (code[i] === ')') {
      if (argStart !== -1) {
        list.push(code.slice(argStart, i))
      }
      break
    } else if (argStart !== -1 && code[i].match(/\s/)) {
      list.push(code.slice(argStart, i))
      argStart = -1
    } else if (argStart === -1 && !code[i].match(/\s/)) {
      argStart = i
    }
  }
  return { i, list }
}

function combineAnds(list) {
  return combineCommutativeOp(list, 'AND')
}

function combineOrs(list) {
  return combineCommutativeOp(list, 'OR')
}

function combineCommutativeOp(list, op) {
  if (!Array.isArray(list)) {
    return list
  }
  const processedSublists = list
    .map(sublist => combineCommutativeOp(sublist, op))
  if (list[0] !== op) {
    return processedSublists
  }
  const res = []
  processedSublists.forEach(sublist => {
    if (Array.isArray(sublist) && sublist[0] === op) {
      res.push(... sublist.slice(1))
    } else {
      res.push(sublist)
    }
  })
  return res
}

function listToString(list, indentStr, lineEnd, maxLen) {
  // We do not need parentheses for the upper level
  // (think of several predicates in a file)
  return list
    .map(sublist =>
      listToStringImpl(sublist, 0, indentStr, lineEnd, maxLen))
    .join(lineEnd + lineEnd)
}

function listToStringImpl(list, nestingLevel, indentStr, lineEnd, maxLen) {
  if (!Array.isArray(list)) {
    return repeat(indentStr, nestingLevel) + list
  }
  if (maxLen > 0 && estimatedLength(list) <= maxLen) {
    return repeat(indentStr, nestingLevel) + listToStringImpl(list, 0, '', ' ', 0)
  }
  let prefix = list[0], prefixElementsCount = 1
  // This if can be removed if you [aim to] parse
  // s-lists in general (non simplify-specific).
  if (list[0] === 'FORALL' || list[0] === 'EXISTS') {
    prefixElementsCount = 2    
    if (list[2][0] === 'PATS') {  // list[2][0] is always defined
      ++prefixElementsCount       // for quantifiers.
    }
    let varsAndPats = list.slice(1, prefixElementsCount)
    if (estimatedLength(varsAndPats) <= maxLen) {
      varsAndPats = ' ' + varsAndPats
        .map(sublist =>
          listToStringImpl(sublist, 0, '', ' ', 0))
        .join(' ')
    } else {
      varsAndPats = lineEnd + varsAndPats
        .map(sublist =>
          listToStringImpl(sublist, nestingLevel + 1, indentStr, lineEnd, maxLen))
        .join(lineEnd)
    }
    prefix += varsAndPats
  }
  const args = list.slice(prefixElementsCount)
    .map(sublist =>
      listToStringImpl(sublist, nestingLevel + 1, indentStr, lineEnd, maxLen))
    .join(lineEnd)
  return repeat(indentStr, nestingLevel)
    + '(' + prefix + (args.length ? (lineEnd + args) : '') + ')'
}

function repeat(str, times) {
  let res = ''
  while (times-- > 0) res += str
  return res
}

function estimatedLength(list) {
  if (!Array.isArray(list)) return list.length + 1 // for a space
  return list.reduce((acc, sublist) =>
    estimatedLength(sublist) + acc, 0)
}

function removeComments(code) {
  let res = []
  for (let i = 0; i < code.length; ++i) {
    if (code[i] === ';') {
      while (i < code.length && code[i] !== '\n') ++i
      if (i < code.length) res.push(code[i])
    } else {
      res.push(code[i])
    }
  }
  return res.join('')
}
