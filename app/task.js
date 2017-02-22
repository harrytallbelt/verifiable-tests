const promisify = require('promisify-node')
const fs = promisify('fs')
const handlebars = require('handlebars')
const db = require('./db')

function getTaskHtml(taskName) {
  const tasksPromise = db.getTasksList()
  const templateSourcePromise =
    fs.readFile('app/task.handlebars', 'UTF-8')

  return Promise
    .all([templateSourcePromise, tasksPromise])
    .then(res => {
      const templateSource = res[0]
      const tasks = res[1]
      const task = tasks.find(task => task.name === taskName)
      
      if (task === undefined) {
        throw new Error('Cannot find task with name: ' + taskName)
      }

      const template = handlebars.compile(templateSource)
      return template(task)
    })
}

module.exports = getTaskHtml