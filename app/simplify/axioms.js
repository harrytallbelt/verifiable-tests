const fs = require('promisify-node')('fs')

// For each file axioms/axiom-name an enum entry Axioms.AXIOM_NAME
// is created. The entries are placed in alphabetic order.
const _axioms = {}
fs.readdirSync('axioms')
  .filter(s => !s.endsWith('.js'))
  .map(toAxiomName)
  .sort()
  .forEach((ax, i) => _axioms[ax] = 1 << i)
const Axioms = Object.freeze(_axioms)

// We create exports object before requiring to-simplify-syntax.js,
// because there is a circular dependence between these two modules.
module.exports.Axioms = Axioms
module.exports.getAxioms = getAxioms
module.exports.toAxiomEnum = toAxiomEnum
module.exports.toAxiomList = toAxiomList
module.exports.getParsingFunctions = getParsingFunctions

const {
  convertToSimplifyPredicate,
  convertToSimplifyIntExpr,
  convertToSimplifyVar
} = require('./to-simplify-syntax')

// We cache all the axiom definitions and triggers.
const axiomsCache = {}
Object.keys(Axioms).forEach(ax => {
  const axFile = toFileName(ax)
  axiomsCache[ax] = {
    definition: fs.readFileSync(`axioms/${axFile}`, 'utf-8'),
  }
  if (fs.existsSync(`axioms/${axFile}.js`)) {
    const t = require(`../../axioms/${axFile}.js`)
    axiomsCache[ax].triggers = {
      onPredicate: t.onPredicate || (() => null),
      onIntegerExpression: t.onIntegerExpression || (() => null),
      onVariable: t.onVariable || (() => null)
    }
  }
})

function getAxioms(axiomEnum) {
  if (hasUnknownEntries(axiomEnum)) {
    throw new Error('A request for an unknown axiom.')
  }
  const keys = toAxiomList(axiomEnum)
  return keys.map(key => axiomsCache[key].definition)
}

function toAxiomList(axiomEnum) {
  return Object.keys(Axioms)
    .filter(ax => axiomEnum & Axioms[ax])
}

function toAxiomEnum(axiomList) {
  return axiomList
    .reduce((res, ax) => res | Axioms[ax], 0)
}

function hasUnknownEntries(axiomIDs) {
  const allAxioms = 2 ** Object.keys(Axioms).length - 1
  return (axiomIDs | allAxioms) !== allAxioms
}

function toFileName(axiomName) {
  return axiomName.replace(/_/g, '-').toLowerCase()
}

function toAxiomName(fileName) {
  return fileName.replace(/-/g, '_').toUpperCase()
}

/**
 * The function returns the user-defined parsing
 * functions for an axiom set (either as an enum or a list).
 * @param axioms
 * Either enum or list of the required axiom's names.
 * @returns
 * An object with three functions:
 * - onPredicate(predicate)
 * - onIntegerExpression(expression)
 * - onVariable(variable)
 */
function getParsingFunctions(axioms) {
  if (Number.isInteger(axioms)) {
    axioms = toAxiomList(axioms)
  }

  let functions = null

  const convertPred = p => convertToSimplifyPredicate(p, functions)
  const convertExpr = e => convertToSimplifyIntExpr(e, functions)
  const convertVar = v => convertToSimplifyVar(v, functions)

  functions = axioms
    .map(ax => axiomsCache[ax].triggers)
    .filter(t => !!t)
    .map(t => ({
      onPredicate: p => t.onPredicate(p, convertPred, convertExpr, convertVar),
      onIntegerExpression: e => t.onIntegerExpression(e, convertPred, convertExpr, convertVar),
      onVariable: v => t.onVariable(v, convertPred, convertExpr, convertVar)
    }))

  return functions
}
