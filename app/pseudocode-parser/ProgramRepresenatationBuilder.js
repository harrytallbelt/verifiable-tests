const PseudocodeVisitor = require('./PseudocodeVisitor')
const { flatten } = require('../verification/utils')

function ProgramRepresenatationBuilder() {
  PseudocodeVisitor.PseudocodeVisitor.call(this)
  return this
}

ProgramRepresenatationBuilder.prototype = Object.create(PseudocodeVisitor.PseudocodeVisitor.prototype)
ProgramRepresenatationBuilder.prototype.constructor = ProgramRepresenatationBuilder


ProgramRepresenatationBuilder.prototype.visitProgram = function(ctx) {
  // Do not replace `ctx.children` with `ctx.statements()` until you
  // have antlr4 runtime v4.7.0 or the freshest version from github.
  return { statements: ctx.children !== null ? this.visit(ctx.statements()) : [] }
}


ProgramRepresenatationBuilder.prototype.visitStatements = function(ctx) {
  return flatten(ctx.statement().map(sctx => {
    const statement = this.visit(sctx)
    const textRange = {
      start: {
        row: sctx.start.line,
        col: sctx.start.column
      },
      end: {
        row: sctx.stop.line,
        col: sctx.stop.column + sctx.stop.text.length
      }
    }
    if (Array.isArray(statement)) {
      // Assignment is parsed into an array of assignments,
      // due to vector assignment with selectors.
      statement.forEach(s => s.textRange = textRange)
    } else {
      statement.textRange = textRange
    }
    return statement
  }))
}


ProgramRepresenatationBuilder.prototype.visitAbort = function(ctx) {
  return { type: 'abort' }
}


ProgramRepresenatationBuilder.prototype.visitSkip = function(ctx) {
  return { type: 'skip' }
}


ProgramRepresenatationBuilder.prototype.visitAssignment_statement = function(ctx) {
  const assignments = this.visit(ctx.assignment())
  
  const pairs = assignments.lvalues
    .map((lv,i) => ({ lvalue: lv, rvalue: assignments.rvalues[i] }))

  const rvaluesToTmpVars = { type: 'assign', lvalues: [], rvalues: [] }
  pairs.forEach((p, i) => {
    rvaluesToTmpVars.lvalues.push({ type: 'name', name: '@tmp'+i })
    rvaluesToTmpVars.rvalues.push(p.rvalue)
  })

  const tmpVarsToLvalues = pairs
    .map((p, i) => {
      let lvalue = p.lvalue,
          rvalue = { type: 'var', var: rvaluesToTmpVars.lvalues[i] }
      while (lvalue.type !== 'name') {
        rvalue = {
          type: 'store',
          base: lvalue.base,
          selector: lvalue.selector,
          value: rvalue
        }
        lvalue = lvalue.base
      }
      return { type: 'assign', lvalues: [lvalue], rvalues: [rvalue] }
    })

  const resultingAssignmentSeq = []
  if (rvaluesToTmpVars.lvalues.length > 0) {
    resultingAssignmentSeq.push(rvaluesToTmpVars)
  }
  resultingAssignmentSeq.push(... tmpVarsToLvalues)

  return resultingAssignmentSeq
}


ProgramRepresenatationBuilder.prototype.visitScalar_assignment = function(ctx) {
  return {
    lvalues: [this.visit(ctx.variable())],
    rvalues: [this.visit(ctx.int_expr())]
  }
}


ProgramRepresenatationBuilder.prototype.visitVector_assignment = function(ctx) {
  const assignment = this.visit(ctx.assignment())
  assignment.lvalues.unshift(this.visit(ctx.variable()))
  assignment.rvalues.push(this.visit(ctx.int_expr()))
  return assignment
}


ProgramRepresenatationBuilder.prototype.visitIf_statement = function(ctx) {
  const guardedCommands = this.visit(ctx.guarded_commands())
  guardedCommands.type = 'if'
  return guardedCommands
}


ProgramRepresenatationBuilder.prototype.visitDo_statement = function(ctx) {
  const guardedCommands = this.visit(ctx.guarded_commands())
  guardedCommands.type = 'do'
  return guardedCommands
}


ProgramRepresenatationBuilder.prototype.visitGuarded_commands = function(ctx) {
  return {
    guards: ctx.guarded_command().map(gc => this.visit(gc.bool_expr())),
    commands: ctx.guarded_command().map(gc => this.visit(gc.statements()))
  }
}


ProgramRepresenatationBuilder.prototype.visitInt_const_expr = function(ctx) {
  const expr = {
    type: 'const',
    const: parseInt(ctx.INT().getText())
  }
  return adjustForIntNegation(expr, ctx)
}


ProgramRepresenatationBuilder.prototype.visitVariable_expr = function(ctx) {
  const expr = {
    type: 'var',
    var: this.visit(ctx.variable())
  }
  return adjustForIntNegation(expr, ctx)
}


ProgramRepresenatationBuilder.prototype.visitParet_int_expr = function(ctx) {
  const expr = this.visit(ctx.int_expr())
  return adjustForIntNegation(expr, ctx)
}


function adjustForIntNegation(expr, ctx) {
  if (ctx.MINUS()) {
    expr = { type: 'negate', inner: expr }
  }
  return expr
}


ProgramRepresenatationBuilder.prototype.visitMult_expr = function(ctx) {
  return {
    type: 'mult',
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))    
  }
}


ProgramRepresenatationBuilder.prototype.visitAdd_expr = function(ctx) {
  return {
    type: ctx.PLUS() ? 'plus' : 'minus',
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))    
  }
}


ProgramRepresenatationBuilder.prototype.visitBool_const_expr = function(ctx) {
  const expr = {
    type: 'const',
    const: ctx.TRUE() != null
  }
  return adjustForBoolNegation(expr, ctx)
}


ProgramRepresenatationBuilder.prototype.visitParet_bool_expr = function(ctx) {
  const expr = this.visit(ctx.bool_expr())
  return adjustForBoolNegation(expr, ctx)
}


function adjustForBoolNegation(expr, ctx) {
  if (ctx.NEGATION()) {
    expr = { type: 'not', inner: expr }
  }
  return expr
}


ProgramRepresenatationBuilder.prototype.visitAnd_expr = function(ctx) {
  return {
    type: 'and',
    left: this.visit(ctx.bool_expr(0)),
    right: this.visit(ctx.bool_expr(1))
  }
}


ProgramRepresenatationBuilder.prototype.visitOr_expr = function(ctx) {
  return {
    type: 'or',
    left: this.visit(ctx.bool_expr(0)),
    right: this.visit(ctx.bool_expr(1))
  }
}


ProgramRepresenatationBuilder.prototype.visitComparison_expr = function(ctx) {
  return {
    type: 'comp',
    op: this.visit(ctx.comparison_op()),
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))
  }
}


ProgramRepresenatationBuilder.prototype.visitLt  = ctx => '<'
ProgramRepresenatationBuilder.prototype.visitGt  = ctx => '>'
ProgramRepresenatationBuilder.prototype.visitLeq = ctx => '<='
ProgramRepresenatationBuilder.prototype.visitGeq = ctx => '>='
ProgramRepresenatationBuilder.prototype.visitEq  = ctx => '='
ProgramRepresenatationBuilder.prototype.visitNeq = ctx => '<>'


ProgramRepresenatationBuilder.prototype.visitVariable = function(ctx) {
  let variable = {
    type: 'name',
    name: ctx.NAME().getText()
  }

  // builds a chain of `select` variables
  if (ctx.selectors()) {
    const selectors = this.visit(ctx.selectors())
    for (let i = 0; i < selectors.length; ++i) { 
      variable = {
        type: 'select',
        selector: selectors[i],
        base: variable
      }
    }
  }

  return variable
}


ProgramRepresenatationBuilder.prototype.visitSelectors = function(ctx) {
  return ctx.selector()
    ? ctx.selector().map(sctx => this.visit(sctx))
    : []
}


ProgramRepresenatationBuilder.prototype.visitSelector = function(ctx) {
  // Default implementation
  return this.visit(ctx.int_expr())
}


module.exports = ProgramRepresenatationBuilder
