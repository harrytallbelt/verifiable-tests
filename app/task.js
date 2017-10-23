const promisify = require('promisify-node')
const fs = promisify('fs')
const handlebars = require('handlebars')
const db = require('./db')

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

function createHandlebarsTaskContext(task) {
  let taskContext = {
    name: task.name,
    description: task.description,
    precondition: task.precondition,
    postcondition: task.postcondition
  }
  if (task.invariants) {
    taskContext.loops = task.invariants
      .map((inv, i) =>
        ({ invariant: inv, variant: task.variants[i] }))
  }
  return taskContext
}

module.exports = getTaskHtml
