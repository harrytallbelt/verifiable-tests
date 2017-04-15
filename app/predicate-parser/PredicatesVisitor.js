// Generated from Predicates.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PredicatesParser.

function PredicatesVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PredicatesVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PredicatesVisitor.prototype.constructor = PredicatesVisitor;

// Visit a parse tree produced by PredicatesParser#bool_const_expr.
PredicatesVisitor.prototype.visitBool_const_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#vector_eq_pred.
PredicatesVisitor.prototype.visitVector_eq_pred = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#and_expr.
PredicatesVisitor.prototype.visitAnd_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#iff_expr.
PredicatesVisitor.prototype.visitIff_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#comparison_expr.
PredicatesVisitor.prototype.visitComparison_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#paret_predicate.
PredicatesVisitor.prototype.visitParet_predicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#or_expr.
PredicatesVisitor.prototype.visitOr_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#implies_expr.
PredicatesVisitor.prototype.visitImplies_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#perm_pred.
PredicatesVisitor.prototype.visitPerm_pred = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#vector_eq_base.
PredicatesVisitor.prototype.visitVector_eq_base = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#vector_eq_rec.
PredicatesVisitor.prototype.visitVector_eq_rec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#perm.
PredicatesVisitor.prototype.visitPerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#even_var_list_base.
PredicatesVisitor.prototype.visitEven_var_list_base = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#even_var_list_rec.
PredicatesVisitor.prototype.visitEven_var_list_rec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#paret_int_expr.
PredicatesVisitor.prototype.visitParet_int_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#add_expr.
PredicatesVisitor.prototype.visitAdd_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#variable_expr.
PredicatesVisitor.prototype.visitVariable_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#int_const_expr.
PredicatesVisitor.prototype.visitInt_const_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#mult_expr.
PredicatesVisitor.prototype.visitMult_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#lt.
PredicatesVisitor.prototype.visitLt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#gt.
PredicatesVisitor.prototype.visitGt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#leq.
PredicatesVisitor.prototype.visitLeq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#geq.
PredicatesVisitor.prototype.visitGeq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#eq.
PredicatesVisitor.prototype.visitEq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#neq.
PredicatesVisitor.prototype.visitNeq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#variable.
PredicatesVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#selectors.
PredicatesVisitor.prototype.visitSelectors = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PredicatesParser#selector.
PredicatesVisitor.prototype.visitSelector = function(ctx) {
  return this.visitChildren(ctx);
};



exports.PredicatesVisitor = PredicatesVisitor;