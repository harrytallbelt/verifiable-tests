const db = require('./db')
const verify = require('./verification/verify')

function getVerificationApiAnswer(taskName, code) {
  return db.getTask(taskName)
    .then(task => {
      if (task === undefined) {
        throw new Error('Cannot find task with name: ' + taskName)
      }
      return verify(task, code)
    })
}

module.exports = getVerificationApiAnswer