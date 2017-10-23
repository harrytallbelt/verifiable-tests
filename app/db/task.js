const fs = require('fs')

const tasks = fs.readdirSync('tasks')
  .filter(fname => fname.endsWith('.json'))
  .map(fname => fs.readFileSync(`tasks/${fname}`, 'utf-8'))
  .map(JSON.parse)

function getTasks() {
  return tasks
}

function getTask(taskName) {
  return tasks.find(t => t.name === taskName)
}

module.exports.getTask = getTask
module.exports.getTasks = getTasks
