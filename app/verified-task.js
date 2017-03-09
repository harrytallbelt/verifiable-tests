const promisify = require('promisify-node')
const fs = promisify('fs')
const handlebars = require('handlebars')
const db = require('./db')
const verify = require('./verification/verify')

function getVerifiedTaskHtml(taskName, code) {
  const taskPromise = db.getTask(taskName)
  const templateSourcePromise =
    fs.readFile('app/task.handlebars', 'UTF-8')

  return Promise
    .all([templateSourcePromise, taskPromise])
    .then(([templateSource, task]) => {      
      if (task === undefined) {
        throw new Error('Cannot find task with name: ' + taskName)
      }

      const verificationResults = verify(task, code)

      const templateSource = res[0]
      const template = handlebars.compile(templateSource)
      
      const context = task
      context.verification = verificationResults
      context.code = code

      return template(context)
    })
}

module.exports = getVerifiedTaskHtml