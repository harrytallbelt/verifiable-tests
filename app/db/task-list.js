const promisify = require('promisify-node')
const fs = promisify('fs')

let tasks = null

function getTaskList() {
  if (tasks) {
    return Promise.resolve(tasks)
  }

  return fs
    .readdir('tasks')
    .then(fnames => Promise.all(
      fnames
        .filter(fname => fname.endsWith('.json'))
        .map(fname => fs.readFile(`tasks/${fname}`, 'utf-8'))
    ))
    .then(files => {
      tasks = files.map(JSON.parse) // cache the tasks
      return tasks
    })
}

module.exports = getTaskList
