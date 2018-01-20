const promisify = require('promisify-node')
const fs = promisify('fs')

function getMainPageHtml() {
  return fs.readFile('app/main.html', 'utf-8')
}

module.exports = getMainPageHtml
