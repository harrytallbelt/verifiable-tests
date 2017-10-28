function createHandlebarsTaskContext(task) {
  let taskContext = {
    name: task.name,
    description: task.description,
    precondition: task.precondition,
    postcondition: task.postcondition
  }
  if (task.invariants && task.invariants.length > 0) {
    taskContext.loops = task.invariants
      .map((inv, i) =>
        ({ invariant: inv, variant: task.variants[i] }))
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
