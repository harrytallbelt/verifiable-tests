const parser = require('./parser')
const filename = process.argv[2]
parser.parseFile(filename)
      .then(tree => console.log(JSON.stringify(tree, null, 2)))
