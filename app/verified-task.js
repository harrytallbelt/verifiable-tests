const promisify = require('promisify-node')
const fs = promisify('fs')
const handlebars = require('handlebars')
const db = require('./db')
const verify = require('./verification/verify')

function getVerifiedTaskHtml(taskName, code) {
  return db.getTask(taskName)
    .then(task => {
      if (task == null) {
        throw new Error('Cannot find task with name: ' + taskName)
      }
      return Promise.all([
        task,
        verify(task, code),
        fs.readFile('app/task.handlebars', 'UTF-8')
      ])
    })
    .then(([task, verificationResults, templateSource]) => {
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
