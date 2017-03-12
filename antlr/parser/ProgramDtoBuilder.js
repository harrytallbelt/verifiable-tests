const deepEqual = require('deep-equal')
const PseudocodeVisitor = require('./PseudocodeVisitor')

function ProgramDtoBuilder() {
	PseudocodeVisitor.PseudocodeVisitor.call(this)
	return this
}

ProgramDtoBuilder.prototype = Object.create(PseudocodeVisitor.PseudocodeVisitor.prototype)
ProgramDtoBuilder.prototype.constructor = ProgramDtoBuilder


ProgramDtoBuilder.prototype.visitProgram = function(ctx) {
  // Do not replace `ctx.children` with `ctx.statements()` until you
  // have antlr4 runtime v4.7.0 or the freshest version from github.
  return { statements: ctx.children !== null ? this.visit(ctx.statements()) : [] }
}


ProgramDtoBuilder.prototype.visitStatements = function(ctx) {
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


ProgramDtoBuilder.prototype.visitAbort = function(ctx) {
  return { type: 'abort' }
}


ProgramDtoBuilder.prototype.visitSkip = function(ctx) {
  return { type: 'skip' }
}


ProgramDtoBuilder.prototype.visitAssignment_statement = function(ctx) {
  const assignment = this.visit(ctx.assignment())
  assignment.type = 'assign'

  // Throw an error if there is two same lvalues.
  // This will trigger for x and x or a[i] and a[i],
  // but not for a[i] and a[j].
  for (let i = 0; i < assignment.lvalues.length; ++i) {
    for (let j = i + 1; j < assignment.lvalues.length; ++j) {
      if (deepEqual(assignment.lvalues[i], assignment.lvalues[j])) {
        // TODO: Reuse antlr error format? If not, add source code coordinates.
        throw new Error('Parsing error: an attempt to assign the'
                      + ' same variable in parallel assignment.')
      }
    }
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


ProgramDtoBuilder.prototype.visitScalar_assignment = function(ctx) {
  return {
    lvalues: [this.visit(ctx.variable())],
    rvalues: [this.visit(ctx.int_expr())]
  }
}


ProgramDtoBuilder.prototype.visitVector_assignment = function(ctx) {
  const assignment = this.visit(ctx.assignment())
  assignment.lvalues.unshift(this.visit(ctx.variable()))
  assignment.rvalues.push(this.visit(ctx.int_expr()))
  return assignment
}


ProgramDtoBuilder.prototype.visitIf_statement = function(ctx) {
  const guardedCommands = this.visit(ctx.guarded_commands())
  guardedCommands.type = 'if'
  return guardedCommands
}


ProgramDtoBuilder.prototype.visitDo_statement = function(ctx) {
  const guardedCommands = this.visit(ctx.guarded_commands())
  guardedCommands.type = 'do'
  return guardedCommands
}


ProgramDtoBuilder.prototype.visitGuarded_commands = function(ctx) {
  return {
    guards: ctx.guarded_command().map(gc => this.visit(gc.bool_expr())),
    commands: ctx.guarded_command().map(gc => this.visit(gc.statements()))
  }
}


ProgramDtoBuilder.prototype.visitInt_const_expr = function(ctx) {
  const expr = {
    type: 'const',
    const: parseInt(ctx.INT().getText())
  }
  return adjustForIntNegation(expr, ctx)
}


ProgramDtoBuilder.prototype.visitVariable_expr = function(ctx) {
  const expr = {
    type: 'var',
    var: this.visit(ctx.variable())
  }
  return adjustForIntNegation(expr, ctx)
}


ProgramDtoBuilder.prototype.visitParet_int_expr = function(ctx) {
  const expr = this.visit(ctx.int_expr())
  return adjustForIntNegation(expr, ctx)
}


function adjustForIntNegation(expr, ctx) {
  if (ctx.MINUS()) {
    expr = { type: 'negate', inner: expr }
  }
  return expr
}


ProgramDtoBuilder.prototype.visitMult_expr = function(ctx) {
  return {
    type: 'mult',
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))    
  }
}


ProgramDtoBuilder.prototype.visitAdd_expr = function(ctx) {
  return {
    type: ctx.PLUS() ? 'plus' : 'minus',
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))    
  }
}


ProgramDtoBuilder.prototype.visitBool_const_expr = function(ctx) {
  const expr = {
    type: 'const',
    const: ctx.TRUE() != null
  }
  return adjustForBoolNegation(expr, ctx)
}


ProgramDtoBuilder.prototype.visitParet_bool_expr = function(ctx) {
  const expr = this.visit(ctx.bool_expr())
  return adjustForBoolNegation(expr, ctx)
}


function adjustForBoolNegation(expr, ctx) {
  if (ctx.NEGATION()) {
    expr = { type: 'not', inner: expr }
  }
  return expr
}


ProgramDtoBuilder.prototype.visitAnd_expr = function(ctx) {
  return {
    type: 'and',
    left: this.visit(ctx.bool_expr(0)),
    right: this.visit(ctx.bool_expr(1))
  }
}


ProgramDtoBuilder.prototype.visitOr_expr = function(ctx) {
  return {
    type: 'or',
    left: this.visit(ctx.bool_expr(0)),
    right: this.visit(ctx.bool_expr(1))
  }
}


ProgramDtoBuilder.prototype.visitComparison_expr = function(ctx) {
  return {
    type: 'comp',
    op: this.visit(ctx.comparison_op()),
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))
  }
}


ProgramDtoBuilder.prototype.visitLt  = ctx => '<'
ProgramDtoBuilder.prototype.visitGt  = ctx => '>'
ProgramDtoBuilder.prototype.visitLeq = ctx => '<='
ProgramDtoBuilder.prototype.visitGeq = ctx => '>='
ProgramDtoBuilder.prototype.visitEq  = ctx => '='
ProgramDtoBuilder.prototype.visitNeq = ctx => '<>'


ProgramDtoBuilder.prototype.visitVariable = function(ctx) {
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


ProgramDtoBuilder.prototype.visitSelectors = function(ctx) {
  return ctx.selector()
    ? ctx.selector().map(sctx => this.visit(sctx))
    : []
}


ProgramDtoBuilder.prototype.visitSelector = function(ctx) {
  return this.visit(ctx.int_expr())
}


module.exports = ProgramDtoBuilder
