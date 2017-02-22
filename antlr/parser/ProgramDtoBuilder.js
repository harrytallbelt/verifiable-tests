const PseudocodeVisitor = require('./PseudocodeVisitor')

function ProgramDtoBuilder() {
	PseudocodeVisitor.PseudocodeVisitor.call(this)
	return this
}

ProgramDtoBuilder.prototype = Object.create(PseudocodeVisitor.PseudocodeVisitor.prototype)
ProgramDtoBuilder.prototype.constructor = ProgramDtoBuilder


ProgramDtoBuilder.prototype.visitProgram = function(ctx) {
  // `ctx.statements()` fails when `ctx.children` is `null`,
  // which does happen for an empty program.
  // This is a bug. `children` should probably be an empty array.
  // So do not replace `ctx.children` with `ctx.statements()`.
  // console.log(ctx.children)
  return { statements: ctx.children !== null ? this.visit(ctx.statements()) : [] }
}


ProgramDtoBuilder.prototype.visitStatements = function(ctx) {
  // console.log('Statements')
  return ctx.statement().map(sctx => {
    const statement = this.visit(sctx)

    statement.textRange = {
      start: {
        row: sctx.start.line,
        col: sctx.start.column
      },
      end: {
        row: sctx.stop.line,
        col: sctx.stop.column 
             + sctx.stop.text.length
      }
    }

    return statement
  })
}


ProgramDtoBuilder.prototype.visitAbort = function(ctx) {
  // console.log('Abort')
  return { type: 'abort' }
}


ProgramDtoBuilder.prototype.visitSkip = function(ctx) {
  // console.log('Skip')
  return { type: 'skip' }
}


ProgramDtoBuilder.prototype.visitAssignment_statement = function(ctx) {
  // console.log('Assignment_statement')
  const assignment = this.visit(ctx.assignment())
  assignment.type = 'assign'
  return assignment
}


ProgramDtoBuilder.prototype.visitScalar_assignment = function(ctx) {
  // console.log('Scalar_assignment')
  return {
    lvalues: [this.visit(ctx.variable())],
    rvalues: [this.visit(ctx.int_expr())]
  }
}


ProgramDtoBuilder.prototype.visitVector_assignment = function(ctx) {
  // console.log('Vector_assignment')
  const assignment = this.visit(ctx.assignment())
  assignment.lvalues.unshift(this.visit(ctx.variable()))
  assignment.rvalues.push(this.visit(ctx.int_expr()))
  return assignment
}


ProgramDtoBuilder.prototype.visitIf_statement = function(ctx) {
  // console.log('If_statement')
  const guardedCommands = this.visit(ctx.guarded_commands())
  guardedCommands.type = 'if'
  return guardedCommands
}


ProgramDtoBuilder.prototype.visitDo_statement = function(ctx) {
  // console.log('Do_statement')
  const guardedCommands = this.visit(ctx.guarded_commands())
  guardedCommands.type = 'do'
  return guardedCommands
}


ProgramDtoBuilder.prototype.visitGuarded_commands = function(ctx) {
  // console.log('Guarded_commands')
  return {
    guards: ctx.guarded_command().map(gc => this.visit(gc.bool_expr())),
    commands: ctx.guarded_command().map(gc => this.visit(gc.statements()))
  }
}


ProgramDtoBuilder.prototype.visitInt_const_expr = function(ctx) {
  // console.log('Int_const_expr')
  return {
    type: 'const',
    negated: ctx.MINUS() != null,
    const: parseInt(ctx.INT().getText())
  }
}


ProgramDtoBuilder.prototype.visitVariable_expr = function(ctx) {
  // console.log('Variable_expr')
  return {
    type: 'var',
    negated: ctx.MINUS() != null,
    var: this.visit(ctx.variable())
  }
}


ProgramDtoBuilder.prototype.visitParet_int_expr = function(ctx) {
  // console.log('Paret_int_expr')
  return {
    type: 'parets',
    negated: ctx.MINUS() != null,
    inner: this.visit(ctx.int_expr())
  }
}


ProgramDtoBuilder.prototype.visitMult_expr = function(ctx) {
  // console.log('Mult_expr')
  return {
    type: 'mult',
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))    
  }
}


ProgramDtoBuilder.prototype.visitAdd_expr = function(ctx) {
  // console.log('Add_expr')
  return {
    type: ctx.PLUS() ? 'plus' : 'minus',
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))    
  }
}


ProgramDtoBuilder.prototype.visitBool_const_expr = function(ctx) {
  // console.log('Bool_const_expr')
  return {
    type: 'const',
    negated: ctx.NEGATION() != null,
    const: ctx.TRUE() != null
  }
}


ProgramDtoBuilder.prototype.visitParet_bool_expr = function(ctx) {
  // console.log('Paret_bool_expr')
  return {
    type: 'parets',
    negated: ctx.NEGATION() != null,
    inner: this.visit(ctx.bool_expr())
  }
}


ProgramDtoBuilder.prototype.visitAnd_expr = function(ctx) {
  // console.log('And_expr')
  return {
    type: 'and',
    leftBool: this.visit(ctx.bool_expr(0)),
    rightBool: this.visit(ctx.bool_expr(1))
  }
}


ProgramDtoBuilder.prototype.visitOr_expr = function(ctx) {
  // console.log('Or_expr')
  return {
    type: 'or',
    leftBool: this.visit(ctx.bool_expr(0)),
    rightBool: this.visit(ctx.bool_expr(1))
  }
}


ProgramDtoBuilder.prototype.visitComparison_expr = function(ctx) {
  // console.log('Comparison_expr')
  return {
    type: 'comp',
    leftInt: this.visit(ctx.int_expr(0)),
    rightInt: this.visit(ctx.int_expr(1)),
    comp: this.visit(ctx.comparison_op())
  }
}

ProgramDtoBuilder.prototype.visitLt  = ctx => '<'
ProgramDtoBuilder.prototype.visitGt  = ctx => '>'
ProgramDtoBuilder.prototype.visitLeq = ctx => '<='
ProgramDtoBuilder.prototype.visitGeq = ctx => '>='
ProgramDtoBuilder.prototype.visitEq  = ctx => '='
ProgramDtoBuilder.prototype.visitNeq = ctx => '<>'


ProgramDtoBuilder.prototype.visitVariable = function(ctx) {
  // console.log('Variable')
  return {
    name: ctx.NAME().getText(),
    selectors: ctx.selectors()
               ? this.visit(ctx.selectors())
               : []
  }
}


ProgramDtoBuilder.prototype.visitSelectors = function(ctx) {
  // console.log('Selectors')
  return ctx.selector()
    ? ctx.selector().map(sctx => this.visit(sctx))
    : []
}


ProgramDtoBuilder.prototype.visitSelector = function(ctx) {
  // console.log('Selector')
  return this.visit(ctx.int_expr())
}


module.exports = ProgramDtoBuilder
