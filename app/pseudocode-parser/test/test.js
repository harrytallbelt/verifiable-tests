const fs = require('promisify-node')('fs')
const parse = require('..')

fs.readdir('examples')
  .then(examples => {
    const promises = examples
      .map(fname => fs.readFile('examples/' + fname))
    promises.push(examples)  // save filenames for the next callback
    return Promise.all(promises)
  })
  .then(souces => {
    const examples = souces.pop()
    const trees = souces.map(parse)
    examples.forEach((example, i) => {
      const fname = `results/${example}.json`
      const result = JSON.stringify(trees[i], null, 2)
      fs.writeFile(fname, result)
    })
  })
  .catch(console.log)
