const fs = require('promisify-node')('fs')
const parser = require('../parser')

fs.readdir('examples')
  .then(examples => {
    const data = examples.map(e => parser.parseFile('examples/' + e))
    data.push(examples)   // store example names
    return Promise.all(data)
  })
  .then(sources => {
    const examples = sources.pop()
    examples.forEach((example, i) => {
      const fname = `results/${example}.json`
      const data = JSON.stringify(sources[i], null, 2)
      fs.writeFile(fname, data)
    })
  })
  .catch(console.log)
