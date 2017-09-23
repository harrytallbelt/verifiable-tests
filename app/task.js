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