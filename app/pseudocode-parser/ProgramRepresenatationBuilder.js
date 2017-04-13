const deepEqual = require('deep-equal')
const PseudocodeVisitor = require('./PseudocodeVisitor')

function ProgramRepresenatationBuilder() {
  PseudocodeVisitor.PseudocodeVisitor.call(this)
  this.errors = []
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
  return ctx.statement().map(sctx => {
    const statement = this.visit(sctx)

    statement.textRange = {
      start: {
        row: sctx.start.line,
        col: sctx.start.column
      },
      end: {
        row: sctx.stop.line,
        col: sctx.stop.column + sctx.stop.text.length
      }
    }

    return statement
  })
}


ProgramRepresenatationBuilder.prototype.visitAbort = function(ctx) {
  return { type: 'abort' }
}


ProgramRepresenatationBuilder.prototype.visitSkip = function(ctx) {
  return { type: 'skip' }
}


ProgramRepresenatationBuilder.prototype.visitAssignment_statement = function(ctx) {
  const assignment = this.visit(ctx.assignment())
  assignment.type = 'assign'

  // Throw an error if two lvalues are identical.
  // This will trigger for x and x or a[i] and a[i],
  // but not for a[i] and a[j].
  const localErrors = []
  for (let i = 0; i < assignment.lvalues.length; ++i) {
    for (let j = i + 1; j < assignment.lvalues.length; ++j) {
      if (deepEqual(assignment.lvalues[i], assignment.lvalues[j])) {
        localErrors.push({
          row: ctx.start.line,    // It is probably good
          col: ctx.start.column,  // enough of a coordinate.
          message: 'identical variables on the left hand side of a parallel assignment'
        })
      }
    }
  }
  if (localErrors.length !== 0) {
    this.errors.push(...localErrors)
    return {}   // We do not want to continue to parse this assignment,
                // but we also do not want to break code above.
  }

  // If there's a map assignment, we would have to correct
  // it so `a[i][j] := x` becomes `a := (a; i:(a[i]; j:x))`
  // (see `docs/program-representation.md#Variables`).
  for (let i = 0; i < assignment.lvalues.length; ++i) {
    while (assignment.lvalues[i].type !== 'name') {
      assignment.rvalues[i] = {
        type: 'store',
        base: assignment.lvalues[i].base,
        selector: assignment.lvalues[i].selector,
        value: assignment.rvalues[i]
      }
      assignment.lvalues[i] = assignment.lvalues[i].base
    }
  }

  // After the previous step we might have repeating lvalues again.
  // This is due to statements like `a[i], a[j] := a[j], a[i]`,
  // which get converted to `a, a := (a; i:a[j]), (a; j:a[i])`.
  // We now remove the excessive lvalues and combine the corresponding
  // rvalues like this `a := ((a; i:a[j]); j:a[i])`.
  for (let i = 0; i < assignment.lvalues.length; ++i) {
    for (let j = i + 1; j < assignment.lvalues.length; ++j) {
      if (deepEqual(assignment.lvalues[i], assignment.lvalues[j])) {
        assignment.rvalues[i] = {
          type: 'store',
          base: assignment.rvalues[i],
          selector: assignment.rvalues[j].selector,
          value: assignment.rvalues[j].value
        }
        assignment.lvalues.splice(j, 1)
        assignment.rvalues.splice(j, 1)
        j -= 1
      }
    }
  }

  return assignment
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
