const fs = require('promisify-node')('fs')

const Axioms = Object.freeze({
  ARRAY_SUM:          1 << 0,
  ARRAY_SUM_REV:      1 << 1,
  ARRAY_PROD:         1 << 2,
  ARRAY_PROD_REV:     1 << 3,
  ARRAY_CONTAINS:     1 << 4,
  ARRAY_CONTAINS_REV: 1 << 5,
  MULT_COMMUT:        1 << 6
})

function getAxiomList(axiomIDs) {
  if (isContradictory(axiomIDs)) {
    return Promise.reject(new Error('A contradictory axiom set.'))
  }
  if (hasUnknownEntries(axiomIDs)) {
    return Promise.reject(new Error('A request for an unknown axiom.'))
  }
  const keys = axiomIDsToKeys(axiomIDs)
  return getAxioms()
    .then(axioms => keys.map(key => axioms[key]))
}


let axiomCache = null
function getAxioms() {
  if (axiomCache) {
    return Promise.resolve(axiomCache)
  }
  return fs
    .readdir('axioms')
    .then(fnames => {
      const promises = fnames
        .map(fname => fs.readFile(`axioms/${fname}`, 'utf-8'))
      promises.push(fnames)  // save filenames
      return Promise.all(promises)
    })
    .then(promises => {
      const fnames = promises.pop()
      const axiomDefinitions = promises
      
      axiomCache = {}
      fnames.forEach((fname, i) => {
        axiomCache[fname] = axiomDefinitions[i]
      })

      return axiomCache
    })
}

function isContradictory(axiomIDs) {
  return (axiomIDs & Axioms.ARRAY_SUM) && (axiomIDs & Axioms.ARRAY_SUM_REV)
      || (axiomIDs & Axioms.ARRAY_PROD) && (axiomIDs & Axioms.ARRAY_PROD_REV)
      || (axiomIDs & Axioms.ARRAY_CONTAINS) && (axiomIDs & Axioms.ARRAY_CONTAINS_REV)
}

function hasUnknownEntries(axiomIDs) {
  const allAxioms = Object.keys(Axioms).reduce((all, key) => all | Axioms[key], 0)
  return (axiomIDs | allAxioms) !== allAxioms
}

function axiomIDsToKeys(axiomIDs) {
  const keys = []
  if (axiomIDs & Axioms.ARRAY_SUM)          keys.push('array-sum')
  if (axiomIDs & Axioms.ARRAY_SUM_REV)      keys.push('array-sum-rev')
  if (axiomIDs & Axioms.ARRAY_PROD)         keys.push('array-prod')
  if (axiomIDs & Axioms.ARRAY_PROD_REV)     keys.push('array-prod-rev')
  if (axiomIDs & Axioms.ARRAY_CONTAINS)     keys.push('array-contains')
  if (axiomIDs & Axioms.ARRAY_CONTAINS_REV) keys.push('array-contains-rev')
  if (axiomIDs & Axioms.MULT_COMMUT)        keys.push('mult-commut')
  return keys
}

module.exports.Axioms = Axioms
module.exports.getAxiomList = getAxiomList
