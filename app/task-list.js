const promisify = require('promisify-node')
const fs = promisify('fs')
const handlebars = require('handlebars')  
const db = require('./db')

function getTaskListHtml() {
  return fs.readFile('app/task-list.handlebars', 'UTF-8')
    .then(templateSource => {
      const context = { tasks: db.getTasks() }
      const template = handlebars.compile(templateSource)
      return template(context)
    })
}

module.exports = getTaskListHtml
