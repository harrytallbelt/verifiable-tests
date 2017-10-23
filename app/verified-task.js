const promisify = require('promisify-node')
const fs = promisify('fs')
const handlebars = require('handlebars')
const db = require('./db')
const verify = require('./verification/verify')

function getVerifiedTaskHtml(taskName, code) {
  const task = db.getTask(taskName)
  if (!task) {
    return Promise.reject('Cannot find task with name: ' + taskName)
  }
  return Promise.all([verify(task, code), fs.readFile('app/task.handlebars', 'UTF-8')])
    .then(([verificationResults, templateSource]) => {
      const template = handlebars.compile(templateSource)
      const taskContext = createHandlebarsTaskContext(task)
      const context = Object.assign({}, taskContext, {
        verification: verificationResults,
        code: code
      })
      return template(context)
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

module.exports = getVerifiedTaskHtml
