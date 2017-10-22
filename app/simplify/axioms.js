const fs = require('promisify-node')('fs')

// The object is initialized when the module is loaded.
// It happens only once, so it is fine to use sync fs operation.
// For each file axioms/axiom-name an enum entry Axioms.AXIOM_NAME
// is created. The entries are placed in alphabetic order.
let _axioms = {}
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



function getAxioms(axiomEnum) {
  if (hasUnknownEntries(axiomEnum)) {
    return Promise.reject(new Error('A request for an unknown axiom.'))
  }
  const keys = toAxiomList(axiomEnum)
  return getAllAxioms()
    .then(axioms => keys.map(key => axioms[key]))
}

let axiomCache = null
function getAllAxioms() {
  if (axiomCache) {
    return Promise.resolve(axiomCache)
  }
  return Promise.all(Object.keys(Axioms)
      .map(toFileName)
      .sort()
      .map(fname => fs.readFile(`axioms/${fname}`, 'utf-8')))
    .then(axioms => {
      axiomCache = {}
      Object.keys(Axioms).sort()
        .forEach((ax, i) => axiomCache[ax] = axioms[i])
      return axiomCache
    })
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
    .map(toFileName)
    .filter(ax => fs.existsSync(`axioms/${ax}.js`))
    .map(ax => require(`../../axioms/${ax}.js`))
    .map(mod => ({
      onPredicate: p => mod.onPredicate
        ? mod.onPredicate(p, convertPred, convertExpr, convertVar)
        : null,
      onIntegerExpression: e => mod.onIntegerExpression
        ? mod.onIntegerExpression(e, convertPred, convertExpr, convertVar)
        : null,
      onVariable: v => mod.onVariable
        ? mod.onVariable(v, convertPred, convertExpr, convertVar)
        : null,
    }))

  return functions
}

