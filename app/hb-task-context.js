function createHandlebarsTaskContext(task) {
  let taskContext = {
    name: task.name,
    description: task.description,
    precondition: task.precondition,
    postcondition: task.postcondition
  }
  if (task.loops && task.loops.length > 0) {
    taskContext.loops = task.loops
      .map((loop, i) => Object.assign({}, loop, { number: i+1 }))
  }
  if (task.shorthands && task.shorthands.length > 0) {
    taskContext.shorthands = task.shorthands.map(sh => ({
      declaration: `${sh.name}(${sh.args.join(', ')})`,
      definition: sh.definition
    }))
  }
  return taskContext
}

module.exports = createHandlebarsTaskContext
