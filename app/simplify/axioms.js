const fs = require('fs')

// We create exports object before requiring to-simplify-syntax.js,
// because there is a circular dependence between these two modules.
module.exports.getAxioms = getAxioms
module.exports.getParsingFunctions = getParsingFunctions

const {
  convertToSimplifyPredicate,
  convertToSimplifyIntExpr,
  convertToSimplifyVar
} = require('./to-simplify-syntax')


// We cache all the axiom names, definitions and triggers.
const _axioms = {}
fs.readdirSync('axioms')
  .filter(s => !s.endsWith('.js'))
  .map(toAxiomName)
  .forEach(ax => {
    const axFile = toFileName(ax)
    _axioms[ax] = {
      definition: fs.readFileSync(`axioms/${axFile}`, 'utf-8'),
    }
    if (fs.existsSync(`axioms/${axFile}.js`)) {
      const t = require(`../../axioms/${axFile}.js`)
      _axioms[ax].triggers = {
        onPredicate: t.onPredicate || (() => null),
        onIntegerExpression: t.onIntegerExpression || (() => null),
        onVariable: t.onVariable || (() => null)
      }
    }
  })

function getAxioms(axiomNames) {
  if (hasUnknownEntries(axiomNames)) {
    throw new Error('A request for an unknown axiom.')
  }
  return axiomNames.map(key => _axioms[key].definition)
}

function hasUnknownEntries(axiomNames) {
  return axiomNames.some(ax => _axioms[ax] === undefined)
}

function toFileName(axiomName) {
  return axiomName.replace(/_/g, '-').toLowerCase()
}

function toAxiomName(fileName) {
  return fileName.replace(/-/g, '_').toUpperCase()
}

/**
 * The function returns the user-defined parsing
 * functions for the list of axiom names.
 * @param axiom A list of the required axiom's names.
 * @returns
 * An object with three functions:
 * - onPredicate(predicate)
 * - onIntegerExpression(expression)
 * - onVariable(variable)
 */
function getParsingFunctions(axiomNames) {
  if (hasUnknownEntries(axiomNames)) {
    throw new Error('A request for an unknown axiom.')
  }

  let functions = null

  const convertPred = p => convertToSimplifyPredicate(p, functions)
  const convertExpr = e => convertToSimplifyIntExpr(e, functions)
  const convertVar = v => convertToSimplifyVar(v, functions)

  functions = axiomNames
    .map(ax => _axioms[ax].triggers)
    .filter(t => !!t)
    .map(t => ({
      onPredicate: p => t.onPredicate(p, convertPred, convertExpr, convertVar),
      onIntegerExpression: e =>
        t.onIntegerExpression(e, convertPred, convertExpr, convertVar),
      onVariable: v => t.onVariable(v, convertPred, convertExpr, convertVar)
    }))

  return functions
}
