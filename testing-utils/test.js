const fs = require('fs')
const { checkLoopNumberIsCorrect } = require('../app/verification/verify')
const wp = require('../app/verification/wp')
const { sum } = require('../app/verification/utils')
const { parseTask } = require('../app/verification/parse-task')
const { getAxioms, getParsingFunctions } = require('../app/simplify/axioms')
const prove = require('../app/simplify/prove')
const { convertToSimplifySyntax, convertToSimplifyPredicate } =
  require('../app/simplify/to-simplify-syntax')
const parsePseudocode = require('../app/pseudocode-parser')
const { formatSimplifyCode } = require('./format-simplify')
const { renderPredicate } = require('./rendering/render-predicate-impl')


const solutionsFileName = process.argv[2]
const solutionsSource = fs.readFileSync(solutionsFileName, 'utf-8')
const solutions = parseSolutionsFile(solutionsSource)

const taskFileNames = process.argv.slice(3)
const taskSources = taskFileNames
  .map(tfn => fs.readFileSync(tfn, 'utf-8'))
const tasks = taskSources.map(JSON.parse)

for (let i = 0; i < tasks.length; ++i) {
  const solution = solutions[tasks[i].name]
  if (!solution) {
    console.log(`; ---------------------------`)
    console.log(`; ${tasks[i].name} (${taskFileNames[i]})`)
    console.log(`; No solution for the task!`)
    console.log()
    continue
  }
  const { errors, program } = parsePseudocode(solution)
  if (errors.length > 0) {
    console.log(`; ---------------------------`)
    console.log(`; ${tasks[i].name} (${taskFileNames[i]})`)
    console.log(`; Cannot parse the solution!`)
    parsingErrors
      .forEach(e => console.log(`; ${e.row}:${e.col} ${e.msg}`))
    console.log()
    continue
  }
  const { spec, axioms, error } = parseTask(tasks[i])
  if (error) {
    console.log(`; ---------------------------`)
    console.log(`; ${tasks[i].name} (${taskFileNames[i]})`)
    console.log(`; Cannot parse the task!`)
    console.log(`; ${error.message}`)
    console.log()
    continue
  }
  const loopNumberError =
    checkLoopNumberIsCorrect(program, spec.loops.length)
  if (loopNumberError) {
    console.log(`; ---------------------------`)
    console.log(`; ${tasks[i].name} (${taskFileNames[i]})`)
    console.log('; Incorrect loop number!')
    console.log(`; ${loopNumberError.message}`)
    console.log()
    continue
  }
  const { predicates } = wp(spec, program)
  prove(convertToSimplifySyntax(predicates, axioms))
    .then(proofResults => {
      if (proofResults.every(res => !!res)) return
      console.log(`; ---------------------------`)
      console.log(`; ${tasks[i].name} (${taskFileNames[i]})`)
      console.log('; Semantic errors!')
      let axiomTriggers = []
      if (axioms.length > 0) {
        console.log('; Axioms')
        const axiomsSource = getAxioms(axioms).join(' ')
        console.log(formatSimplifyCode(axiomsSource))
        axiomTriggers = getParsingFunctions(axioms)
      }
      for (let k = 0; k < proofResults.length; ++k) {
        if (proofResults[k]) continue
        console.log(`; ${renderPredicate(predicates[k])}`)
        const failingPred =
          convertToSimplifyPredicate(predicates[k], axiomTriggers)
        console.log(formatSimplifyCode(failingPred))
      }
      console.log()
    })
}


function parseSolutionsFile(source) {
  const separateTasks = source.split('###').filter(s => s !== '')
  const names = separateTasks.map(s => s.slice(0,s.indexOf('\n')))
  const programs = separateTasks.map(s => s.slice(s.indexOf('\n') + 1))
  const solutionsDict = {}
  for (let i = 0; i < names.length; ++i) {
    solutionsDict[names[i]] = programs[i]
  }
  return solutionsDict
}


