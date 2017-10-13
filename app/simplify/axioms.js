const fs = require('promisify-node')('fs')

// The object is initialized when the module is loaded.
// It happens only once, so it is fine to use sync fs operation.
// For each file axioms/axiom-name an enum entry Axioms.AXIOM_NAME
// is created. The entries are placed in alphabetic order.
let _axioms = {}
fs.readdirSync('axioms')
  .map(toAxiomName)
  .sort()
  .forEach((ax, i) => _axioms[ax] = 1 << i)
const Axioms = Object.freeze(_axioms)


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
  return fs
    .readdir('axioms')
    .then(fnames => Promise.all(fnames.sort()
      .map(fname => fs.readFile(`axioms/${fname}`, 'utf-8'))))
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
  // This is how enums work, trust me on this one.
  const allAxioms = 2 ** Object.keys(Axioms).length - 1
  return (axiomIDs | allAxioms) !== allAxioms
}

function toFileName(axiomName) {
  return axiomName.replace('_', '-').toLowerCase()
}

function toAxiomName(fileName) {
  return fileName.replace('-', '_').toUpperCase()
}

module.exports.Axioms = Axioms
module.exports.getAxioms = getAxioms
module.exports.toAxiomEnum = toAxiomEnum
module.exports.toAxiomList = toAxiomList
