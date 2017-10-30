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


PredicateRepresentationBuilder.prototype.visitShorthand_pred = function(ctx) {
  const pred = this.visit(ctx.shorthand())
  return adjustForBoolNegation(pred, ctx)
}


function adjustForBoolNegation(pred, ctx) {
  return ctx.NEGATION() ? { type: 'not', inner: pred } : pred
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


PredicateRepresentationBuilder.prototype.visitVector_eq_pred = function(ctx) {
  const { left, right } = this.visit(ctx.vector_equality())
  const conjuncts = left.map((leftVar, i) => ({
    type: 'comp',
    op: '=',
    left: leftVar,
    right: right[i]
  }))
  const conjunction = conjuncts.reduce((conj, res) => ({
    type: 'and',
    left: conj,
    right: res
  }))
  return conjunction
}


PredicateRepresentationBuilder.prototype.visitVector_eq_base = function(ctx) {
  return {
    left: [this.visit(ctx.int_expr(0))],
    right: [this.visit(ctx.int_expr(1))]
  }
}


PredicateRepresentationBuilder.prototype.visitVector_eq_rec = function(ctx) {
  const inner = this.visit(ctx.vector_equality())
  inner.left.unshift(this.visit(ctx.int_expr(0)))
  inner.right.push(this.visit(ctx.int_expr(1)))
  return inner
}


PredicateRepresentationBuilder.prototype.visitAsc_chain_pred = function(ctx) {
  return this.visit(ctx.ascending_chain_cmp())
}


PredicateRepresentationBuilder.prototype.visitAsc_chain_cmp_base = function(ctx) {
  return {
    type: 'comp',
    op: ctx.LESS() ? '<' : '<=',
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))
  }
}


PredicateRepresentationBuilder.prototype.visitAsc_chain_cmp_rec = function(ctx) {
  const chain = this.visit(ctx.ascending_chain_cmp())
  const lastExpr = chain.type === 'and' ? chain.right.right : chain.right
  const cmp = {
    type: 'comp',
    op: ctx.LESS() ? '<' : '<=',
    left: lastExpr,
    right: this.visit(ctx.int_expr())
  }
  return { type: 'and', left: chain, right: cmp }
}


PredicateRepresentationBuilder.prototype.visitDesc_chain_pred = function(ctx) {
  return this.visit(ctx.descending_chain_cmp())
}

PredicateRepresentationBuilder.prototype.visitDesc_chain_cmp_base = function(ctx) {
  return {
    type: 'comp',
    op: ctx.GREATER() ? '>' : '>=',
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))
  }
}


PredicateRepresentationBuilder.prototype.visitDesc_chain_cmp_rec = function(ctx) {
  const chain = this.visit(ctx.descending_chain_cmp())
  const lastExpr = chain.type === 'and' ? chain.right.right : chain.right
  const cmp = {
    type: 'comp',
    op: ctx.GREATER() ? '>' : '>=',
    left: lastExpr,
    right: this.visit(ctx.int_expr())
  }
  return { type: 'and', left: chain, right: cmp }
}


PredicateRepresentationBuilder.prototype.visitShorthand = function(ctx) {
  return {
    type: 'call',
    name: this.visit(ctx.name()),
    args: (ctx.int_expr() || []).map(e => this.visit(e))
  }
}


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

PredicateRepresentationBuilder.prototype.visitImplies_expr = function(ctx) {
  return {
    type: 'implies',
    left: this.visit(ctx.predicate(0)),
    right: this.visit(ctx.predicate(1))
  }
}

PredicateRepresentationBuilder.prototype.visitIff_expr = function(ctx) {
  return {
    type: 'iff',
    left: this.visit(ctx.predicate(0)),
    right: this.visit(ctx.predicate(1))
  }
}


PredicateRepresentationBuilder.prototype.visitQuantifier_pred = function(ctx) {
  return {
    type: ctx.FORALL() ? 'forall' : 'exists',
    boundVar: { type: 'name', name: this.visit(ctx.name()) },
    condition: this.visit(ctx.predicate(0)),
    inner: this.visit(ctx.predicate(1))
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


PredicateRepresentationBuilder.prototype.visitShorthand_expr = function(ctx) {
  const expr = this.visit(ctx.shorthand())
  return adjustForIntNegation(expr, ctx)
}


function adjustForIntNegation(expr, ctx) {
  return ctx.MINUS() ? { type: 'negate', inner: expr } : expr
}


PredicateRepresentationBuilder.prototype.visitSum_prod_quantifier = function(ctx) {
  const expr = {
    type: ctx.SUM() ? 'sum' : 'prod',
    boundVar: { type: 'name', name: this.visit(ctx.name()) },
    condition: this.visit(ctx.predicate()),
    inner: this.visit(ctx.int_expr())
  }
  return adjustForIntNegation(expr, ctx)
}


PredicateRepresentationBuilder.prototype.visitQuantity_quantifier = function(ctx) {
  const expr = {
    type: 'count',
    boundVar: { type: 'name', name: this.visit(ctx.name()) },
    condition: this.visit(ctx.predicate(0)),
    inner: this.visit(ctx.predicate(1))
  }
  return adjustForIntNegation(expr, ctx)
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
    name: this.visit(ctx.name())
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


PredicateRepresentationBuilder.prototype.visitName = function(ctx) {
  if (ctx.NAME())   return ctx.NAME().getText()
  if (ctx.EXISTS()) return ctx.EXISTS().getText()
  if (ctx.FORALL()) return ctx.FORALL().getText()
  if (ctx.SUM())    return ctx.SUM().getText()
  if (ctx.PROD())   return ctx.PROD().getText()
  if (ctx.NUM())    return ctx.NUM().getText()
  throw new Error('visitName has exhausted all the options. Check if it is up to date with the grammar.')
}


module.exports = PredicateRepresentationBuilder
