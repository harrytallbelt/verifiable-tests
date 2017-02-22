const db = require('./db')
const verify = require('./verification/verify')

function getVerificationApiAnswer(taskName, code) {
  return db.getTasksList()
    .then(tasks => {
      const task = tasks.find(task => task.name === taskName)

      if (task === undefined) {
        throw new Error('Cannot find task with name: ' + taskName)
      }

      return verify(task, code)
    })
}

module.exports = getVerificationApiAnswer