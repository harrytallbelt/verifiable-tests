const fs = require('promisify-node')('fs')
const parse = require('..')

fs.readdir('examples')
  .then(examples => {
    const promises = examples
      .map(fname => fs.readFile('examples/' + fname, 'utf-8'))
    promises.push(examples)  // save filenames for the next callback
    return Promise.all(promises)
  })
  .then(sources => {
    const examples = sources.pop()  // remove saved filenames
    const trees = sources.map(parse)
    examples.forEach((example, i) => {
      const fname = `results/${example}.json`
      const result = JSON.stringify(trees[i], null, 2)
      fs.writeFile(fname, result, 'utf-8')
    })
  })
  .catch(console.log)
