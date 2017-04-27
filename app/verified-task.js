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
      const context = task
      context.verification = verificationResults
      context.code = code
      return template(context)
    })
}

module.exports = getVerifiedTaskHtml