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


PredicatesVisitor.prototype.visitVector_eq_pred = function(ctx) {
  const { left, right } = this.visit(ctx.vector_equality())
  return formVectorEqualityConjunction(left, right)
}


function formVectorEqualityConjunction(leftVars, rightVars) {
  const conjuncts = leftVars.map((leftVar, i) => ({
    type: 'comp',
    op: '=',
    left: leftVar,
    right: rightVars[i]
  }))
  const conjunction = conjuncts.reduce((conj, res) => ({
    type: 'and',
    left: conj,
    right: res
  }))
  return conjunction
}


PredicatesVisitor.prototype.visitVector_eq_base = function(ctx) {
  return {
    left: [this.visit(ctx.int_expr(0))],
    right: [this.visit(ctx.int_expr(1))]
  }
}


PredicatesVisitor.prototype.visitVector_eq_rec = function(ctx) {
  const inner = this.visit(ctx.vector_equality())
  inner.left.unshift(this.visit(ctx.int_expr(0)))
  inner.right.push(this.visit(ctx.int_expr(1)))
  return inner
}


PredicatesVisitor.prototype.visitAsc_chain_pred = function(ctx) {
  return this.visit(ctx.ascending_chain_cmp())
}


PredicatesVisitor.prototype.visitAsc_chain_cmp_base = function(ctx) {
  return {
    type: 'comp',
    op: ctx.LESS() ? '<' : '<=',
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))
  }
}


PredicatesVisitor.prototype.visitAsc_chain_cmp_rec = function(ctx) {
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


PredicatesVisitor.prototype.visitDesc_chain_pred = function(ctx) {
  return this.visit(ctx.descending_chain_cmp())
}

PredicatesVisitor.prototype.visitDesc_chain_cmp_base = function(ctx) {
  return {
    type: 'comp',
    op: ctx.GREATER() ? '>' : '>=',
    left: this.visit(ctx.int_expr(0)),
    right: this.visit(ctx.int_expr(1))
  }
}


PredicatesVisitor.prototype.visitDesc_chain_cmp_rec = function(ctx) {
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


PredicatesVisitor.prototype.visitPerm_pred = function(ctx) {
  return this.visit(ctx.perm())
}


PredicatesVisitor.prototype.visitPerm = function(ctx) {
  const { left, right } = this.visit(ctx.even_var_list())
  const disjuncts = []
  for (const rightPerm of generatePermutations(right)) {
    const conj = formVectorEqualityConjunction(left, rightPerm)
    disjuncts.push(conj)
  }
  const disjunction = disjuncts.reduce((disj, res) => ({
    type: 'or',
    left: disj,
    right: res
  }))
  return disjunction
}


function* generatePermutations(list) {
  if (list.length == 0) {
    yield []
    return
  }
  for (let i = 0; i < list.length; ++i) {
    const sublist = list.slice(0,i).concat(list.slice(i+1))
    const subpermutations = generatePermutations(sublist)
    for (const subpermutation of subpermutations) {
      subpermutation.push(list[i])
      yield subpermutation
    }
  }
}


PredicatesVisitor.prototype.visitEven_var_list_base = function(ctx) {
  return {
    left: [this.visit(ctx.int_expr(0))],
    right: [this.visit(ctx.int_expr(1))]
  }
}


PredicatesVisitor.prototype.visitEven_var_list_rec = function(ctx) {
  const inner = this.visit(ctx.even_var_list())
  inner.left.unshift(this.visit(ctx.int_expr(0)))
  inner.right.push(this.visit(ctx.int_expr(1)))
  return inner
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


PredicatesVisitor.prototype.visitQuantifier_pred = function(ctx) {
  return {
    type: ctx.FORALL() ? 'forall' : 'exists',
    boundedVars: [ { type: 'name', name: ctx.NAME().getText() } ],
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


function adjustForIntNegation(expr, ctx) {
  if (ctx.MINUS()) {
    expr = { type: 'negate', inner: expr }
  }
  return expr
}


PredicatesVisitor.prototype.visitSum_prod_quantifier = function(ctx) {
  // TODO: WP and Simplify translator do not know this type of int expr
  const expr = {
    type: ctx.SUM() ? 'sum' : 'prod',
    boundedVars: [ { type: 'name', name: ctx.NAME().getText() } ],
    condition: this.visit(ctx.predicate()),
    inner: this.visit(ctx.int_expr())
  }
  return adjustForIntNegation(expr, ctx)
}


PredicatesVisitor.prototype.visitQuantity_quantifier = function(ctx) {
  // TODO: WP and Simplify translator do not know this type of int expr
  const expr = {
    type: 'count',
    boundedVars: [ { type: 'name', name: ctx.NAME().getText() } ],
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
