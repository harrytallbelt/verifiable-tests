const promisify = require('promisify-node')
const fs = promisify('fs')

fs.readdir('..')
  .then(fnames => {
    fnames = fnames
      .filter(fname => fname.endsWith('.json'))

    const res = fnames
      .map(fname => fs.readFile(`../${fname}`, 'utf-8'))

    res.push(fnames)   // propagate filenames down
    return Promise.all(res)
  })
  .then(files => {
    const fnames = files.pop()
    fnames.forEach((fname, i) => {
      const newFile = files[i]
        .replace(/    "simplify_.*(\r\n?|\n)/g, '')
        .replace(/,(\r\n?|\n)}/g, '\n}')
        .replace(/human_readable_/g, '')
        .replace(/loop_invariant/g, 'invariant')
        .replace(/boundary_function/g, 'boundaryFunction')
        .replace(/∧/g, '&&')
        .replace(/ ∨ /g, ' || ')
        .replace(/≥/g, '>=')
        .replace(/≤/g, '<=')
        .replace(/≠/g, '!=')
        .replace(/∀/g, 'A')
        .replace(/∃/g, 'E')
        .replace(/Σ/g, 'S')
        .replace(/Π/g, 'P')

      fs.writeFile(`results/${fname}`, newFile)
    })
  })
  .catch(console.error)
