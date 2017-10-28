const promisify = require('promisify-node')
const fs = promisify('fs')
const handlebars = require('handlebars')
const db = require('./db')
const verify = require('./verification/verify')
const createHandlebarsTaskContext = require('./hb-task-context')

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

module.exports = getVerifiedTaskHtml
