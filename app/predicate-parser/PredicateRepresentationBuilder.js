const { PredicatesVisitor } = require('./PredicatesVisitor')


function PredicateRepresentationBuilder() {
  PredicatesVisitor.call(this)
  return this
}

PredicateRepresentationBuilder.prototype = Object.create(PredicatesVisitor.prototype)
PredicateRepresentationBuilder.prototype.constructor = PredicateRepresentationBuilder



PredicateRepresentationBuilder.prototype.visitBool_const_expr = function(ctx) {
  const expr = {
    type: 'const',
    const: ctx.TRUE() != null
  }
  return adjustForBoolNegation(expr, ctx)
}


PredicateRepresentationBuilder.prototype.visitParet_predicate = function(ctx) {
  const expr = this.visit(ctx.predicate())
  return adjustForBoolNegation(expr, ctx)
}


function adjustForBoolNegation(expr, ctx) {
  if (ctx.NEGATION()) {
    expr = { type: 'not', inner: expr }
  }
  return expr
}


PredicateRepresentationBuilder.prototype.visitComparison_expr = function(ctx) {
  return {
    type: 'comp',
    op: this.visit(ctx.comparison_op()),
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))
  }
}


PredicateRepresentationBuilder.prototype.visitLt  = ctx => '<'
PredicateRepresentationBuilder.prototype.visitGt  = ctx => '>'
PredicateRepresentationBuilder.prototype.visitLeq = ctx => '<='
PredicateRepresentationBuilder.prototype.visitGeq = ctx => '>='
PredicateRepresentationBuilder.prototype.visitEq  = ctx => '='
PredicateRepresentationBuilder.prototype.visitNeq = ctx => '<>'

PredicateRepresentationBuilder.prototype.visitAnd_expr = function(ctx) {
  return {
    type: 'and',
    left: this.visit(ctx.predicate(0)),
    right: this.visit(ctx.predicate(1))
  }
}

PredicateRepresentationBuilder.prototype.visitOr_expr = function(ctx) {
  return {
    type: 'or',
    left: this.visit(ctx.predicate(0)),
    right: this.visit(ctx.predicate(1))
  }
}

PredicatesVisitor.prototype.visitImplies_expr = function(ctx) {
  return {
    type: 'implies',
    left: this.visit(ctx.predicate(0)),
    right: this.visit(ctx.predicate(1))
  }
}

PredicatesVisitor.prototype.visitIff_expr = function(ctx) {
  return {
    type: 'iff',
    left: this.visit(ctx.predicate(0)),
    right: this.visit(ctx.predicate(1))
  }
}


PredicateRepresentationBuilder.prototype.visitInt_const_expr = function(ctx) {
  const expr = {
    type: 'const',
    const: parseInt(ctx.INT().getText())
  }
  return adjustForIntNegation(expr, ctx)
}


PredicateRepresentationBuilder.prototype.visitVariable_expr = function(ctx) {
  const expr = {
    type: 'var',
    var: this.visit(ctx.variable())
  }
  return adjustForIntNegation(expr, ctx)
}


PredicateRepresentationBuilder.prototype.visitParet_int_expr = function(ctx) {
  const expr = this.visit(ctx.int_expr())
  return adjustForIntNegation(expr, ctx)
}


function adjustForIntNegation(expr, ctx) {
  if (ctx.MINUS()) {
    expr = { type: 'negate', inner: expr }
  }
  return expr
}


PredicateRepresentationBuilder.prototype.visitMult_expr = function(ctx) {
  return {
    type: 'mult',
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))    
  }
}


PredicateRepresentationBuilder.prototype.visitAdd_expr = function(ctx) {
  return {
    type: ctx.PLUS() ? 'plus' : 'minus',
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))    
  }
}



PredicateRepresentationBuilder.prototype.visitVariable = function(ctx) {
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


PredicateRepresentationBuilder.prototype.visitSelectors = function(ctx) {
  return ctx.selector()
    ? ctx.selector().map(sctx => this.visit(sctx))
    : []
}


PredicateRepresentationBuilder.prototype.visitSelector = function(ctx) {
  // Default implementation
  return this.visit(ctx.int_expr())
}


module.exports = PredicateRepresentationBuilder
