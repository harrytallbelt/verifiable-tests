const promisify = require('promisify-node')
const fs = promisify('fs')
const handlebars = require('handlebars')  
const db = require('./db')

function getTaskListHtml() {
  const tasksPromise = db.getTasksList()
  const templateSourcePromise =
    fs.readFile('app/task-list.handlebars', 'UTF-8')
  
  return Promise
    .all([templateSourcePromise, tasksPromise])
    .then(res => {
      const templateSource = res[0]
      const context = { tasks: res[1] }
      const template = handlebars.compile(templateSource)
      return template(context)
    })
}

module.exports = getTaskListHtml