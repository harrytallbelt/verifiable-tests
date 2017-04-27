const getTaskList = require('./task-list')

function getTask(taskName) {
  return getTaskList()
    .then(res => res.find(task => task.name === taskName))
}

module.exports = getTask