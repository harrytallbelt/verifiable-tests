const promisify = require('promisify-node')
const fs = promisify('fs')
const handlebars = require('handlebars')
const db = require('./db')
const createHandlebarsTaskContext = require('./hb-task-context')

function getTaskHtml(taskName) {
  const task = db.getTask(taskName)
  if (!task) {
    return Promise.reject('Cannot find task with name: ' + taskName)
  }
  return fs.readFile('app/task.handlebars', 'UTF-8')
    .then(templateSource => {
      const template = handlebars.compile(templateSource)
      const taskContext = createHandlebarsTaskContext(task)
      return template(taskContext)
    })
}

module.exports = getTaskHtml
