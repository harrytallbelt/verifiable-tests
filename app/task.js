const promisify = require('promisify-node')
const fs = promisify('fs')
const handlebars = require('handlebars')
const db = require('./db')

function getTaskHtml(taskName) {
  const tasksPromise = db.getTask(taskName)
  const templateSourcePromise =
    fs.readFile('app/task.handlebars', 'UTF-8')

  return Promise
    .all([templateSourcePromise, tasksPromise])
    .then(([templateSource, task]) => {
      if (task === undefined) {
        throw new Error('Cannot find task with name: ' + taskName)
      }
      const template = handlebars.compile(templateSource)
      return template(task)
    })
}

module.exports = getTaskHtml