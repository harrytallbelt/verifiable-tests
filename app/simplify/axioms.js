const fs = require('promisify-node')('fs')

const Axioms = Object.freeze({
  ARRAY_SUM:          1 << 0,
  ARRAY_SUM_REV:      1 << 1,
  ARRAY_PROD:         1 << 2,
  ARRAY_PROD_REV:     1 << 3,
  ARRAY_CONTAINS:     1 << 4,
  ARRAY_CONTAINS_REV: 1 << 5,
  MULT_COMMUT:        1 << 6,
  ROW_ON_COL_DOTPROD: 1 << 7,
  MULT_DISTR:         1 << 8,
  ROW_ON_VEC_DOTPROD: 1 << 9,
  MATRIX_SUM:         1 << 10,
  ARRAY_PERM:         1 << 11
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
  if (axiomIDs & Axioms.ROW_ON_COL_DOTPROD) keys.push('row-on-col-dotprod')
  if (axiomIDs & Axioms.MULT_DISTR)         keys.push('mult-distr')
  if (axiomIDs & Axioms.ROW_ON_VEC_DOTPROD) keys.push('row-on-vec-dotprod')
  if (axiomIDs & Axioms.MATRIX_SUM)         keys.push('matrix-sum')
  if (axiomIDs & Axioms.ARRAY_PERM)         keys.push('array-perm')
  return keys
}

module.exports.Axioms = Axioms
module.exports.getAxiomList = getAxiomList
