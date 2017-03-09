// Generated from Pseudocode.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PseudocodeParser.

function PseudocodeVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PseudocodeVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PseudocodeVisitor.prototype.constructor = PseudocodeVisitor;

// Visit a parse tree produced by PseudocodeParser#program.
PseudocodeVisitor.prototype.visitProgram = function(ctx) {
  console.log('base Program')
  this.visit(ctx.statements())
};


// Visit a parse tree produced by PseudocodeParser#statements.
PseudocodeVisitor.prototype.visitStatements = function(ctx) {
  console.log('base Statements')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#abort.
PseudocodeVisitor.prototype.visitAbort = function(ctx) {
  console.log('base Abort')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#skip.
PseudocodeVisitor.prototype.visitSkip = function(ctx) {
  console.log('base Skip')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#assignment_statement.
PseudocodeVisitor.prototype.visitAssignment_statement = function(ctx) {
  console.logbase ('Assignment_statement')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#if_statement.
PseudocodeVisitor.prototype.visitIf_statement = function(ctx) {
  console.log('base If_statement')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#do_statement.
PseudocodeVisitor.prototype.visitDo_statement = function(ctx) {
  console.log('base Do_statement')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#guarded_commands.
PseudocodeVisitor.prototype.visitGuarded_commands = function(ctx) {
  console.log('base Guarded_commands')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#guarded_command.
PseudocodeVisitor.prototype.visitGuarded_command = function(ctx) {
  console.log('base Guarded_command')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#scalar_assignment.
PseudocodeVisitor.prototype.visitScalar_assignment = function(ctx) {
  console.log('base Scalar_assignment')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#vector_assignment.
PseudocodeVisitor.prototype.visitVector_assignment = function(ctx) {
  console.log('base Vector_assignment')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#paret_int_expr.
PseudocodeVisitor.prototype.visitParet_int_expr = function(ctx) {
  console.log('base Paret_int_expr')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#add_expr.
PseudocodeVisitor.prototype.visitAdd_expr = function(ctx) {
  console.log('base Add_expr')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#variable_expr.
PseudocodeVisitor.prototype.visitVariable_expr = function(ctx) {
  console.log('base Variable_expr')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#int_const_expr.
PseudocodeVisitor.prototype.visitInt_const_expr = function(ctx) {
  console.log('base Int_const_expr')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#mult_expr.
PseudocodeVisitor.prototype.visitMult_expr = function(ctx) {
  console.log('base Mult_expr')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#bool_const_expr.
PseudocodeVisitor.prototype.visitBool_const_expr = function(ctx) {
  console.log('base Bool_const_expr')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#and_expr.
PseudocodeVisitor.prototype.visitAnd_expr = function(ctx) {
  console.log('base And_expr')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#comparison_expr.
PseudocodeVisitor.prototype.visitComparison_expr = function(ctx) {
  console.log('base Comparison_expr')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#or_expr.
PseudocodeVisitor.prototype.visitOr_expr = function(ctx) {
  console.log('base Or_expr')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#paret_bool_expr.
PseudocodeVisitor.prototype.visitParet_bool_expr = function(ctx) {
  console.log('base Paret_bool_expr')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#lt.
PseudocodeVisitor.prototype.visitLt = function(ctx) {
  console.log('base Lt')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#gt.
PseudocodeVisitor.prototype.visitGt = function(ctx) {
  console.log('base Gt')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#leq.
PseudocodeVisitor.prototype.visitLeq = function(ctx) {
  console.log('base Leq')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#geq.
PseudocodeVisitor.prototype.visitGeq = function(ctx) {
  console.log('base Geq')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#eq.
PseudocodeVisitor.prototype.visitEq = function(ctx) {
  console.log('base Eq')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#neq.
PseudocodeVisitor.prototype.visitNeq = function(ctx) {
  console.log('base Neq')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#variable.
PseudocodeVisitor.prototype.visitVariable = function(ctx) {
  console.log('base Variable')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#selectors.
PseudocodeVisitor.prototype.visitSelectors = function(ctx) {
  console.log('base Selectors')
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PseudocodeParser#selector.
PseudocodeVisitor.prototype.visitSelector = function(ctx) {
  console.log('base Selector')
  return this.visitChildren(ctx);
};



exports.PseudocodeVisitor = PseudocodeVisitor;