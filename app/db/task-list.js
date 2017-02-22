const promisify = require('promisify-node')
const fs = promisify('fs')

let tasks = null

function getTaskList() {
  if (tasks) {
    return new Promise((resolve, reject) => resolve(tasks))
  }

  return fs
    .readdir('tasks')
    .then(filenames => {
      const readFile = fname => fs.readFile('tasks/' + fname)
      return Promise.all(filenames.map(readFile))
    })
    .then(files => {
      tasks = files.map(JSON.parse) // cache the tasks
      return tasks
    })
}

module.exports = getTaskList
