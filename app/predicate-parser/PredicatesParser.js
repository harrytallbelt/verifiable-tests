// Generated from Predicates.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PredicatesVisitor = require('./PredicatesVisitor').PredicatesVisitor;

var grammarFileName = "Predicates.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u001b\u00a9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0003\u0002\u0005\u0002\u001b\n\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002\u001f\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002-\n\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    ";\n\u0002\f\u0002\u000e\u0002>\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003J\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005[\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006e",
    "\n\u0006\f\u0006\u000e\u0006h\u000b\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u0007r\n\u0007\f\u0007\u000e\u0007u\u000b\u0007\u0003\b\u0003\b\u0005",
    "\by\n\b\u0003\b\u0003\b\u0005\b}\n\b\u0003\b\u0003\b\u0005\b\u0081\n",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u0087\n\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u008f\n\b\f\b\u000e\b\u0092",
    "\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u009a",
    "\n\t\u0003\n\u0003\n\u0005\n\u009e\n\n\u0003\u000b\u0006\u000b\u00a1",
    "\n\u000b\r\u000b\u000e\u000b\u00a2\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0002\u0006\u0002\n\f\u000e\r\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0002\u0006\u0003\u0002\u0017\u0018\u0003\u0002\u0010",
    "\u0011\u0003\u0002\u0012\u0013\u0003\u0002\u0015\u0016\u00bb\u0002,",
    "\u0003\u0002\u0002\u0002\u0004I\u0003\u0002\u0002\u0002\u0006K\u0003",
    "\u0002\u0002\u0002\bZ\u0003\u0002\u0002\u0002\n\\\u0003\u0002\u0002",
    "\u0002\fi\u0003\u0002\u0002\u0002\u000e\u0086\u0003\u0002\u0002\u0002",
    "\u0010\u0099\u0003\u0002\u0002\u0002\u0012\u009b\u0003\u0002\u0002\u0002",
    "\u0014\u00a0\u0003\u0002\u0002\u0002\u0016\u00a4\u0003\u0002\u0002\u0002",
    "\u0018\u001a\b\u0002\u0001\u0002\u0019\u001b\u0007\u0014\u0002\u0002",
    "\u001a\u0019\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002",
    "\u001b\u001c\u0003\u0002\u0002\u0002\u001c-\t\u0002\u0002\u0002\u001d",
    "\u001f\u0007\u0014\u0002\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001e",
    "\u001f\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002 !\u0007",
    "\u0003\u0002\u0002!\"\u0005\u0002\u0002\u0002\"#\u0007\u0004\u0002\u0002",
    "#-\u0003\u0002\u0002\u0002$%\u0005\u000e\b\u0002%&\u0005\u0010\t\u0002",
    "&\'\u0005\u000e\b\u0002\'-\u0003\u0002\u0002\u0002(-\u0005\u0004\u0003",
    "\u0002)-\u0005\n\u0006\u0002*-\u0005\f\u0007\u0002+-\u0005\u0006\u0004",
    "\u0002,\u0018\u0003\u0002\u0002\u0002,\u001e\u0003\u0002\u0002\u0002",
    ",$\u0003\u0002\u0002\u0002,(\u0003\u0002\u0002\u0002,)\u0003\u0002\u0002",
    "\u0002,*\u0003\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002-<\u0003\u0002",
    "\u0002\u0002./\f\u0006\u0002\u0002/0\u0007\u0005\u0002\u00020;\u0005",
    "\u0002\u0002\u000712\f\u0005\u0002\u000223\u0007\u0006\u0002\u00023",
    ";\u0005\u0002\u0002\u000645\f\u0004\u0002\u000256\u0007\u0007\u0002",
    "\u00026;\u0005\u0002\u0002\u000578\f\u0003\u0002\u000289\u0007\b\u0002",
    "\u00029;\u0005\u0002\u0002\u0004:.\u0003\u0002\u0002\u0002:1\u0003\u0002",
    "\u0002\u0002:4\u0003\u0002\u0002\u0002:7\u0003\u0002\u0002\u0002;>\u0003",
    "\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002",
    "=\u0003\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002?@\u0005\u000e",
    "\b\u0002@A\u0007\t\u0002\u0002AB\u0005\u000e\b\u0002BJ\u0003\u0002\u0002",
    "\u0002CD\u0005\u000e\b\u0002DE\u0007\n\u0002\u0002EF\u0005\u0004\u0003",
    "\u0002FG\u0007\n\u0002\u0002GH\u0005\u000e\b\u0002HJ\u0003\u0002\u0002",
    "\u0002I?\u0003\u0002\u0002\u0002IC\u0003\u0002\u0002\u0002J\u0005\u0003",
    "\u0002\u0002\u0002KL\u0007\u000b\u0002\u0002LM\u0007\u0003\u0002\u0002",
    "MN\u0005\b\u0005\u0002NO\u0007\u0004\u0002\u0002O\u0007\u0003\u0002",
    "\u0002\u0002PQ\u0005\u000e\b\u0002QR\u0007\n\u0002\u0002RS\u0005\u000e",
    "\b\u0002S[\u0003\u0002\u0002\u0002TU\u0005\u000e\b\u0002UV\u0007\n\u0002",
    "\u0002VW\u0005\b\u0005\u0002WX\u0007\n\u0002\u0002XY\u0005\u000e\b\u0002",
    "Y[\u0003\u0002\u0002\u0002ZP\u0003\u0002\u0002\u0002ZT\u0003\u0002\u0002",
    "\u0002[\t\u0003\u0002\u0002\u0002\\]\b\u0006\u0001\u0002]^\u0005\u000e",
    "\b\u0002^_\t\u0003\u0002\u0002_`\u0005\u000e\b\u0002`f\u0003\u0002\u0002",
    "\u0002ab\f\u0003\u0002\u0002bc\t\u0003\u0002\u0002ce\u0005\u000e\b\u0002",
    "da\u0003\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002",
    "\u0002fg\u0003\u0002\u0002\u0002g\u000b\u0003\u0002\u0002\u0002hf\u0003",
    "\u0002\u0002\u0002ij\b\u0007\u0001\u0002jk\u0005\u000e\b\u0002kl\t\u0004",
    "\u0002\u0002lm\u0005\u000e\b\u0002ms\u0003\u0002\u0002\u0002no\f\u0003",
    "\u0002\u0002op\t\u0004\u0002\u0002pr\u0005\u000e\b\u0002qn\u0003\u0002",
    "\u0002\u0002ru\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003",
    "\u0002\u0002\u0002t\r\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002",
    "vx\b\b\u0001\u0002wy\u0007\u0015\u0002\u0002xw\u0003\u0002\u0002\u0002",
    "xy\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002z\u0087\u0007\u001a",
    "\u0002\u0002{}\u0007\u0015\u0002\u0002|{\u0003\u0002\u0002\u0002|}\u0003",
    "\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0087\u0005\u0012\n\u0002",
    "\u007f\u0081\u0007\u0015\u0002\u0002\u0080\u007f\u0003\u0002\u0002\u0002",
    "\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002",
    "\u0082\u0083\u0007\u0003\u0002\u0002\u0083\u0084\u0005\u000e\b\u0002",
    "\u0084\u0085\u0007\u0004\u0002\u0002\u0085\u0087\u0003\u0002\u0002\u0002",
    "\u0086v\u0003\u0002\u0002\u0002\u0086|\u0003\u0002\u0002\u0002\u0086",
    "\u0080\u0003\u0002\u0002\u0002\u0087\u0090\u0003\u0002\u0002\u0002\u0088",
    "\u0089\f\u0004\u0002\u0002\u0089\u008a\u0007\f\u0002\u0002\u008a\u008f",
    "\u0005\u000e\b\u0005\u008b\u008c\f\u0003\u0002\u0002\u008c\u008d\t\u0005",
    "\u0002\u0002\u008d\u008f\u0005\u000e\b\u0004\u008e\u0088\u0003\u0002",
    "\u0002\u0002\u008e\u008b\u0003\u0002\u0002\u0002\u008f\u0092\u0003\u0002",
    "\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002",
    "\u0002\u0002\u0091\u000f\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002",
    "\u0002\u0002\u0093\u009a\u0007\u0010\u0002\u0002\u0094\u009a\u0007\u0012",
    "\u0002\u0002\u0095\u009a\u0007\u0011\u0002\u0002\u0096\u009a\u0007\u0013",
    "\u0002\u0002\u0097\u009a\u0007\t\u0002\u0002\u0098\u009a\u0007\r\u0002",
    "\u0002\u0099\u0093\u0003\u0002\u0002\u0002\u0099\u0094\u0003\u0002\u0002",
    "\u0002\u0099\u0095\u0003\u0002\u0002\u0002\u0099\u0096\u0003\u0002\u0002",
    "\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099\u0098\u0003\u0002\u0002",
    "\u0002\u009a\u0011\u0003\u0002\u0002\u0002\u009b\u009d\u0007\u0019\u0002",
    "\u0002\u009c\u009e\u0005\u0014\u000b\u0002\u009d\u009c\u0003\u0002\u0002",
    "\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u0013\u0003\u0002\u0002",
    "\u0002\u009f\u00a1\u0005\u0016\f\u0002\u00a0\u009f\u0003\u0002\u0002",
    "\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002",
    "\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u0015\u0003\u0002\u0002",
    "\u0002\u00a4\u00a5\u0007\u000e\u0002\u0002\u00a5\u00a6\u0005\u000e\b",
    "\u0002\u00a6\u00a7\u0007\u000f\u0002\u0002\u00a7\u0017\u0003\u0002\u0002",
    "\u0002\u0014\u001a\u001e,:<IZfsx|\u0080\u0086\u008e\u0090\u0099\u009d",
    "\u00a2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'&&'", "'||'", "'=>'", "'<=>'", 
                     "'='", "','", "'perm'", "'*'", "'<>'", "'['", "']'", 
                     "'<'", "'<='", "'>'", "'>='", "'~'", "'-'", "'+'", 
                     "'T'", "'F'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "LESS", "LESS_EQ", "GREATER", 
                      "GREATER_EQ", "NEGATION", "MINUS", "PLUS", "TRUE", 
                      "FALSE", "NAME", "INT", "WS" ];

var ruleNames =  [ "predicate", "vector_equality", "perm", "even_var_list", 
                   "ascending_chain_cmp", "descending_chain_cmp", "int_expr", 
                   "comparison_op", "variable", "selectors", "selector" ];

function PredicatesParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PredicatesParser.prototype = Object.create(antlr4.Parser.prototype);
PredicatesParser.prototype.constructor = PredicatesParser;

Object.defineProperty(PredicatesParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PredicatesParser.EOF = antlr4.Token.EOF;
PredicatesParser.T__0 = 1;
PredicatesParser.T__1 = 2;
PredicatesParser.T__2 = 3;
PredicatesParser.T__3 = 4;
PredicatesParser.T__4 = 5;
PredicatesParser.T__5 = 6;
PredicatesParser.T__6 = 7;
PredicatesParser.T__7 = 8;
PredicatesParser.T__8 = 9;
PredicatesParser.T__9 = 10;
PredicatesParser.T__10 = 11;
PredicatesParser.T__11 = 12;
PredicatesParser.T__12 = 13;
PredicatesParser.LESS = 14;
PredicatesParser.LESS_EQ = 15;
PredicatesParser.GREATER = 16;
PredicatesParser.GREATER_EQ = 17;
PredicatesParser.NEGATION = 18;
PredicatesParser.MINUS = 19;
PredicatesParser.PLUS = 20;
PredicatesParser.TRUE = 21;
PredicatesParser.FALSE = 22;
PredicatesParser.NAME = 23;
PredicatesParser.INT = 24;
PredicatesParser.WS = 25;

PredicatesParser.RULE_predicate = 0;
PredicatesParser.RULE_vector_equality = 1;
PredicatesParser.RULE_perm = 2;
PredicatesParser.RULE_even_var_list = 3;
PredicatesParser.RULE_ascending_chain_cmp = 4;
PredicatesParser.RULE_descending_chain_cmp = 5;
PredicatesParser.RULE_int_expr = 6;
PredicatesParser.RULE_comparison_op = 7;
PredicatesParser.RULE_variable = 8;
PredicatesParser.RULE_selectors = 9;
PredicatesParser.RULE_selector = 10;

function PredicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_predicate;
    return this;
}

PredicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateContext.prototype.constructor = PredicateContext;


 
PredicateContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function Bool_const_exprContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Bool_const_exprContext.prototype = Object.create(PredicateContext.prototype);
Bool_const_exprContext.prototype.constructor = Bool_const_exprContext;

PredicatesParser.Bool_const_exprContext = Bool_const_exprContext;

Bool_const_exprContext.prototype.TRUE = function() {
    return this.getToken(PredicatesParser.TRUE, 0);
};

Bool_const_exprContext.prototype.FALSE = function() {
    return this.getToken(PredicatesParser.FALSE, 0);
};

Bool_const_exprContext.prototype.NEGATION = function() {
    return this.getToken(PredicatesParser.NEGATION, 0);
};
Bool_const_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitBool_const_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Vector_eq_predContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Vector_eq_predContext.prototype = Object.create(PredicateContext.prototype);
Vector_eq_predContext.prototype.constructor = Vector_eq_predContext;

PredicatesParser.Vector_eq_predContext = Vector_eq_predContext;

Vector_eq_predContext.prototype.vector_equality = function() {
    return this.getTypedRuleContext(Vector_equalityContext,0);
};
Vector_eq_predContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitVector_eq_pred(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Asc_chain_predContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Asc_chain_predContext.prototype = Object.create(PredicateContext.prototype);
Asc_chain_predContext.prototype.constructor = Asc_chain_predContext;

PredicatesParser.Asc_chain_predContext = Asc_chain_predContext;

Asc_chain_predContext.prototype.ascending_chain_cmp = function() {
    return this.getTypedRuleContext(Ascending_chain_cmpContext,0);
};
Asc_chain_predContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitAsc_chain_pred(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function And_exprContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

And_exprContext.prototype = Object.create(PredicateContext.prototype);
And_exprContext.prototype.constructor = And_exprContext;

PredicatesParser.And_exprContext = And_exprContext;

And_exprContext.prototype.predicate = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PredicateContext);
    } else {
        return this.getTypedRuleContext(PredicateContext,i);
    }
};
And_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitAnd_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Iff_exprContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Iff_exprContext.prototype = Object.create(PredicateContext.prototype);
Iff_exprContext.prototype.constructor = Iff_exprContext;

PredicatesParser.Iff_exprContext = Iff_exprContext;

Iff_exprContext.prototype.predicate = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PredicateContext);
    } else {
        return this.getTypedRuleContext(PredicateContext,i);
    }
};
Iff_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitIff_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Comparison_exprContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Comparison_exprContext.prototype = Object.create(PredicateContext.prototype);
Comparison_exprContext.prototype.constructor = Comparison_exprContext;

PredicatesParser.Comparison_exprContext = Comparison_exprContext;

Comparison_exprContext.prototype.int_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Int_exprContext);
    } else {
        return this.getTypedRuleContext(Int_exprContext,i);
    }
};

Comparison_exprContext.prototype.comparison_op = function() {
    return this.getTypedRuleContext(Comparison_opContext,0);
};
Comparison_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitComparison_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Desc_chain_predContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Desc_chain_predContext.prototype = Object.create(PredicateContext.prototype);
Desc_chain_predContext.prototype.constructor = Desc_chain_predContext;

PredicatesParser.Desc_chain_predContext = Desc_chain_predContext;

Desc_chain_predContext.prototype.descending_chain_cmp = function() {
    return this.getTypedRuleContext(Descending_chain_cmpContext,0);
};
Desc_chain_predContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitDesc_chain_pred(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Paret_predicateContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Paret_predicateContext.prototype = Object.create(PredicateContext.prototype);
Paret_predicateContext.prototype.constructor = Paret_predicateContext;

PredicatesParser.Paret_predicateContext = Paret_predicateContext;

Paret_predicateContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};

Paret_predicateContext.prototype.NEGATION = function() {
    return this.getToken(PredicatesParser.NEGATION, 0);
};
Paret_predicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitParet_predicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Or_exprContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Or_exprContext.prototype = Object.create(PredicateContext.prototype);
Or_exprContext.prototype.constructor = Or_exprContext;

PredicatesParser.Or_exprContext = Or_exprContext;

Or_exprContext.prototype.predicate = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PredicateContext);
    } else {
        return this.getTypedRuleContext(PredicateContext,i);
    }
};
Or_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitOr_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Implies_exprContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Implies_exprContext.prototype = Object.create(PredicateContext.prototype);
Implies_exprContext.prototype.constructor = Implies_exprContext;

PredicatesParser.Implies_exprContext = Implies_exprContext;

Implies_exprContext.prototype.predicate = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PredicateContext);
    } else {
        return this.getTypedRuleContext(PredicateContext,i);
    }
};
Implies_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitImplies_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Perm_predContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Perm_predContext.prototype = Object.create(PredicateContext.prototype);
Perm_predContext.prototype.constructor = Perm_predContext;

PredicatesParser.Perm_predContext = Perm_predContext;

Perm_predContext.prototype.perm = function() {
    return this.getTypedRuleContext(PermContext,0);
};
Perm_predContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitPerm_pred(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PredicatesParser.prototype.predicate = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new PredicateContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 0;
    this.enterRecursionRule(localctx, 0, PredicatesParser.RULE_predicate, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Bool_const_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 24;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.NEGATION) {
                this.state = 23;
                this.match(PredicatesParser.NEGATION);
            }

            this.state = 26;
            _la = this._input.LA(1);
            if(!(_la===PredicatesParser.TRUE || _la===PredicatesParser.FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 2:
            localctx = new Paret_predicateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 28;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.NEGATION) {
                this.state = 27;
                this.match(PredicatesParser.NEGATION);
            }

            this.state = 30;
            this.match(PredicatesParser.T__0);
            this.state = 31;
            this.predicate(0);
            this.state = 32;
            this.match(PredicatesParser.T__1);
            break;

        case 3:
            localctx = new Comparison_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 34;
            this.int_expr(0);
            this.state = 35;
            this.comparison_op();
            this.state = 36;
            this.int_expr(0);
            break;

        case 4:
            localctx = new Vector_eq_predContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 38;
            this.vector_equality();
            break;

        case 5:
            localctx = new Asc_chain_predContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 39;
            this.ascending_chain_cmp(0);
            break;

        case 6:
            localctx = new Desc_chain_predContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 40;
            this.descending_chain_cmp(0);
            break;

        case 7:
            localctx = new Perm_predContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 41;
            this.perm();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 58;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 56;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new And_exprContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_predicate);
                    this.state = 44;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 45;
                    this.match(PredicatesParser.T__2);
                    this.state = 46;
                    this.predicate(5);
                    break;

                case 2:
                    localctx = new Or_exprContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_predicate);
                    this.state = 47;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 48;
                    this.match(PredicatesParser.T__3);
                    this.state = 49;
                    this.predicate(4);
                    break;

                case 3:
                    localctx = new Implies_exprContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_predicate);
                    this.state = 50;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 51;
                    this.match(PredicatesParser.T__4);
                    this.state = 52;
                    this.predicate(3);
                    break;

                case 4:
                    localctx = new Iff_exprContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_predicate);
                    this.state = 53;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 54;
                    this.match(PredicatesParser.T__5);
                    this.state = 55;
                    this.predicate(2);
                    break;

                } 
            }
            this.state = 60;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Vector_equalityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_vector_equality;
    return this;
}

Vector_equalityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Vector_equalityContext.prototype.constructor = Vector_equalityContext;


 
Vector_equalityContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Vector_eq_baseContext(parser, ctx) {
	Vector_equalityContext.call(this, parser);
    Vector_equalityContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Vector_eq_baseContext.prototype = Object.create(Vector_equalityContext.prototype);
Vector_eq_baseContext.prototype.constructor = Vector_eq_baseContext;

PredicatesParser.Vector_eq_baseContext = Vector_eq_baseContext;

Vector_eq_baseContext.prototype.int_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Int_exprContext);
    } else {
        return this.getTypedRuleContext(Int_exprContext,i);
    }
};
Vector_eq_baseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitVector_eq_base(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Vector_eq_recContext(parser, ctx) {
	Vector_equalityContext.call(this, parser);
    Vector_equalityContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Vector_eq_recContext.prototype = Object.create(Vector_equalityContext.prototype);
Vector_eq_recContext.prototype.constructor = Vector_eq_recContext;

PredicatesParser.Vector_eq_recContext = Vector_eq_recContext;

Vector_eq_recContext.prototype.int_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Int_exprContext);
    } else {
        return this.getTypedRuleContext(Int_exprContext,i);
    }
};

Vector_eq_recContext.prototype.vector_equality = function() {
    return this.getTypedRuleContext(Vector_equalityContext,0);
};
Vector_eq_recContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitVector_eq_rec(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PredicatesParser.Vector_equalityContext = Vector_equalityContext;

PredicatesParser.prototype.vector_equality = function() {

    var localctx = new Vector_equalityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PredicatesParser.RULE_vector_equality);
    try {
        this.state = 71;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Vector_eq_baseContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 61;
            this.int_expr(0);
            this.state = 62;
            this.match(PredicatesParser.T__6);
            this.state = 63;
            this.int_expr(0);
            break;

        case 2:
            localctx = new Vector_eq_recContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 65;
            this.int_expr(0);
            this.state = 66;
            this.match(PredicatesParser.T__7);
            this.state = 67;
            this.vector_equality();
            this.state = 68;
            this.match(PredicatesParser.T__7);
            this.state = 69;
            this.int_expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_perm;
    return this;
}

PermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PermContext.prototype.constructor = PermContext;

PermContext.prototype.even_var_list = function() {
    return this.getTypedRuleContext(Even_var_listContext,0);
};

PermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitPerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PredicatesParser.PermContext = PermContext;

PredicatesParser.prototype.perm = function() {

    var localctx = new PermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PredicatesParser.RULE_perm);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(PredicatesParser.T__8);
        this.state = 74;
        this.match(PredicatesParser.T__0);
        this.state = 75;
        this.even_var_list();
        this.state = 76;
        this.match(PredicatesParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Even_var_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_even_var_list;
    return this;
}

Even_var_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Even_var_listContext.prototype.constructor = Even_var_listContext;


 
Even_var_listContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Even_var_list_recContext(parser, ctx) {
	Even_var_listContext.call(this, parser);
    Even_var_listContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Even_var_list_recContext.prototype = Object.create(Even_var_listContext.prototype);
Even_var_list_recContext.prototype.constructor = Even_var_list_recContext;

PredicatesParser.Even_var_list_recContext = Even_var_list_recContext;

Even_var_list_recContext.prototype.int_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Int_exprContext);
    } else {
        return this.getTypedRuleContext(Int_exprContext,i);
    }
};

Even_var_list_recContext.prototype.even_var_list = function() {
    return this.getTypedRuleContext(Even_var_listContext,0);
};
Even_var_list_recContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitEven_var_list_rec(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Even_var_list_baseContext(parser, ctx) {
	Even_var_listContext.call(this, parser);
    Even_var_listContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Even_var_list_baseContext.prototype = Object.create(Even_var_listContext.prototype);
Even_var_list_baseContext.prototype.constructor = Even_var_list_baseContext;

PredicatesParser.Even_var_list_baseContext = Even_var_list_baseContext;

Even_var_list_baseContext.prototype.int_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Int_exprContext);
    } else {
        return this.getTypedRuleContext(Int_exprContext,i);
    }
};
Even_var_list_baseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitEven_var_list_base(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PredicatesParser.Even_var_listContext = Even_var_listContext;

PredicatesParser.prototype.even_var_list = function() {

    var localctx = new Even_var_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, PredicatesParser.RULE_even_var_list);
    try {
        this.state = 88;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Even_var_list_baseContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 78;
            this.int_expr(0);
            this.state = 79;
            this.match(PredicatesParser.T__7);
            this.state = 80;
            this.int_expr(0);
            break;

        case 2:
            localctx = new Even_var_list_recContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 82;
            this.int_expr(0);
            this.state = 83;
            this.match(PredicatesParser.T__7);
            this.state = 84;
            this.even_var_list();
            this.state = 85;
            this.match(PredicatesParser.T__7);
            this.state = 86;
            this.int_expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ascending_chain_cmpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_ascending_chain_cmp;
    return this;
}

Ascending_chain_cmpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ascending_chain_cmpContext.prototype.constructor = Ascending_chain_cmpContext;


 
Ascending_chain_cmpContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function Asc_chain_cmp_baseContext(parser, ctx) {
	Ascending_chain_cmpContext.call(this, parser);
    Ascending_chain_cmpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Asc_chain_cmp_baseContext.prototype = Object.create(Ascending_chain_cmpContext.prototype);
Asc_chain_cmp_baseContext.prototype.constructor = Asc_chain_cmp_baseContext;

PredicatesParser.Asc_chain_cmp_baseContext = Asc_chain_cmp_baseContext;

Asc_chain_cmp_baseContext.prototype.int_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Int_exprContext);
    } else {
        return this.getTypedRuleContext(Int_exprContext,i);
    }
};

Asc_chain_cmp_baseContext.prototype.LESS = function() {
    return this.getToken(PredicatesParser.LESS, 0);
};

Asc_chain_cmp_baseContext.prototype.LESS_EQ = function() {
    return this.getToken(PredicatesParser.LESS_EQ, 0);
};
Asc_chain_cmp_baseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitAsc_chain_cmp_base(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Asc_chain_cmp_recContext(parser, ctx) {
	Ascending_chain_cmpContext.call(this, parser);
    Ascending_chain_cmpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Asc_chain_cmp_recContext.prototype = Object.create(Ascending_chain_cmpContext.prototype);
Asc_chain_cmp_recContext.prototype.constructor = Asc_chain_cmp_recContext;

PredicatesParser.Asc_chain_cmp_recContext = Asc_chain_cmp_recContext;

Asc_chain_cmp_recContext.prototype.ascending_chain_cmp = function() {
    return this.getTypedRuleContext(Ascending_chain_cmpContext,0);
};

Asc_chain_cmp_recContext.prototype.int_expr = function() {
    return this.getTypedRuleContext(Int_exprContext,0);
};

Asc_chain_cmp_recContext.prototype.LESS = function() {
    return this.getToken(PredicatesParser.LESS, 0);
};

Asc_chain_cmp_recContext.prototype.LESS_EQ = function() {
    return this.getToken(PredicatesParser.LESS_EQ, 0);
};
Asc_chain_cmp_recContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitAsc_chain_cmp_rec(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PredicatesParser.prototype.ascending_chain_cmp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Ascending_chain_cmpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, PredicatesParser.RULE_ascending_chain_cmp, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new Asc_chain_cmp_baseContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 91;
        this.int_expr(0);
        this.state = 92;
        _la = this._input.LA(1);
        if(!(_la===PredicatesParser.LESS || _la===PredicatesParser.LESS_EQ)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 93;
        this.int_expr(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 100;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Asc_chain_cmp_recContext(this, new Ascending_chain_cmpContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_ascending_chain_cmp);
                this.state = 95;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 96;
                _la = this._input.LA(1);
                if(!(_la===PredicatesParser.LESS || _la===PredicatesParser.LESS_EQ)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 97;
                this.int_expr(0); 
            }
            this.state = 102;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Descending_chain_cmpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_descending_chain_cmp;
    return this;
}

Descending_chain_cmpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Descending_chain_cmpContext.prototype.constructor = Descending_chain_cmpContext;


 
Descending_chain_cmpContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function Desc_chain_cmp_baseContext(parser, ctx) {
	Descending_chain_cmpContext.call(this, parser);
    Descending_chain_cmpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Desc_chain_cmp_baseContext.prototype = Object.create(Descending_chain_cmpContext.prototype);
Desc_chain_cmp_baseContext.prototype.constructor = Desc_chain_cmp_baseContext;

PredicatesParser.Desc_chain_cmp_baseContext = Desc_chain_cmp_baseContext;

Desc_chain_cmp_baseContext.prototype.int_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Int_exprContext);
    } else {
        return this.getTypedRuleContext(Int_exprContext,i);
    }
};

Desc_chain_cmp_baseContext.prototype.GREATER = function() {
    return this.getToken(PredicatesParser.GREATER, 0);
};

Desc_chain_cmp_baseContext.prototype.GREATER_EQ = function() {
    return this.getToken(PredicatesParser.GREATER_EQ, 0);
};
Desc_chain_cmp_baseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitDesc_chain_cmp_base(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Desc_chain_cmp_recContext(parser, ctx) {
	Descending_chain_cmpContext.call(this, parser);
    Descending_chain_cmpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Desc_chain_cmp_recContext.prototype = Object.create(Descending_chain_cmpContext.prototype);
Desc_chain_cmp_recContext.prototype.constructor = Desc_chain_cmp_recContext;

PredicatesParser.Desc_chain_cmp_recContext = Desc_chain_cmp_recContext;

Desc_chain_cmp_recContext.prototype.descending_chain_cmp = function() {
    return this.getTypedRuleContext(Descending_chain_cmpContext,0);
};

Desc_chain_cmp_recContext.prototype.int_expr = function() {
    return this.getTypedRuleContext(Int_exprContext,0);
};

Desc_chain_cmp_recContext.prototype.GREATER = function() {
    return this.getToken(PredicatesParser.GREATER, 0);
};

Desc_chain_cmp_recContext.prototype.GREATER_EQ = function() {
    return this.getToken(PredicatesParser.GREATER_EQ, 0);
};
Desc_chain_cmp_recContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitDesc_chain_cmp_rec(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PredicatesParser.prototype.descending_chain_cmp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Descending_chain_cmpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, PredicatesParser.RULE_descending_chain_cmp, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new Desc_chain_cmp_baseContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 104;
        this.int_expr(0);
        this.state = 105;
        _la = this._input.LA(1);
        if(!(_la===PredicatesParser.GREATER || _la===PredicatesParser.GREATER_EQ)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 106;
        this.int_expr(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 113;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Desc_chain_cmp_recContext(this, new Descending_chain_cmpContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_descending_chain_cmp);
                this.state = 108;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 109;
                _la = this._input.LA(1);
                if(!(_la===PredicatesParser.GREATER || _la===PredicatesParser.GREATER_EQ)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 110;
                this.int_expr(0); 
            }
            this.state = 115;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Int_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_int_expr;
    return this;
}

Int_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Int_exprContext.prototype.constructor = Int_exprContext;


 
Int_exprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function Paret_int_exprContext(parser, ctx) {
	Int_exprContext.call(this, parser);
    Int_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Paret_int_exprContext.prototype = Object.create(Int_exprContext.prototype);
Paret_int_exprContext.prototype.constructor = Paret_int_exprContext;

PredicatesParser.Paret_int_exprContext = Paret_int_exprContext;

Paret_int_exprContext.prototype.int_expr = function() {
    return this.getTypedRuleContext(Int_exprContext,0);
};

Paret_int_exprContext.prototype.MINUS = function() {
    return this.getToken(PredicatesParser.MINUS, 0);
};
Paret_int_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitParet_int_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Add_exprContext(parser, ctx) {
	Int_exprContext.call(this, parser);
    Int_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Add_exprContext.prototype = Object.create(Int_exprContext.prototype);
Add_exprContext.prototype.constructor = Add_exprContext;

PredicatesParser.Add_exprContext = Add_exprContext;

Add_exprContext.prototype.int_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Int_exprContext);
    } else {
        return this.getTypedRuleContext(Int_exprContext,i);
    }
};

Add_exprContext.prototype.PLUS = function() {
    return this.getToken(PredicatesParser.PLUS, 0);
};

Add_exprContext.prototype.MINUS = function() {
    return this.getToken(PredicatesParser.MINUS, 0);
};
Add_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitAdd_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Variable_exprContext(parser, ctx) {
	Int_exprContext.call(this, parser);
    Int_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Variable_exprContext.prototype = Object.create(Int_exprContext.prototype);
Variable_exprContext.prototype.constructor = Variable_exprContext;

PredicatesParser.Variable_exprContext = Variable_exprContext;

Variable_exprContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Variable_exprContext.prototype.MINUS = function() {
    return this.getToken(PredicatesParser.MINUS, 0);
};
Variable_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitVariable_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Int_const_exprContext(parser, ctx) {
	Int_exprContext.call(this, parser);
    Int_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Int_const_exprContext.prototype = Object.create(Int_exprContext.prototype);
Int_const_exprContext.prototype.constructor = Int_const_exprContext;

PredicatesParser.Int_const_exprContext = Int_const_exprContext;

Int_const_exprContext.prototype.INT = function() {
    return this.getToken(PredicatesParser.INT, 0);
};

Int_const_exprContext.prototype.MINUS = function() {
    return this.getToken(PredicatesParser.MINUS, 0);
};
Int_const_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitInt_const_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Mult_exprContext(parser, ctx) {
	Int_exprContext.call(this, parser);
    Int_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Mult_exprContext.prototype = Object.create(Int_exprContext.prototype);
Mult_exprContext.prototype.constructor = Mult_exprContext;

PredicatesParser.Mult_exprContext = Mult_exprContext;

Mult_exprContext.prototype.int_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Int_exprContext);
    } else {
        return this.getTypedRuleContext(Int_exprContext,i);
    }
};
Mult_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitMult_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PredicatesParser.prototype.int_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Int_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, PredicatesParser.RULE_int_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Int_const_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.MINUS) {
                this.state = 117;
                this.match(PredicatesParser.MINUS);
            }

            this.state = 120;
            this.match(PredicatesParser.INT);
            break;

        case 2:
            localctx = new Variable_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 122;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.MINUS) {
                this.state = 121;
                this.match(PredicatesParser.MINUS);
            }

            this.state = 124;
            this.variable();
            break;

        case 3:
            localctx = new Paret_int_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 126;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.MINUS) {
                this.state = 125;
                this.match(PredicatesParser.MINUS);
            }

            this.state = 128;
            this.match(PredicatesParser.T__0);
            this.state = 129;
            this.int_expr(0);
            this.state = 130;
            this.match(PredicatesParser.T__1);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 142;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 140;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Mult_exprContext(this, new Int_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_int_expr);
                    this.state = 134;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 135;
                    this.match(PredicatesParser.T__9);
                    this.state = 136;
                    this.int_expr(3);
                    break;

                case 2:
                    localctx = new Add_exprContext(this, new Int_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_int_expr);
                    this.state = 137;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 138;
                    _la = this._input.LA(1);
                    if(!(_la===PredicatesParser.MINUS || _la===PredicatesParser.PLUS)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 139;
                    this.int_expr(2);
                    break;

                } 
            }
            this.state = 144;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Comparison_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_comparison_op;
    return this;
}

Comparison_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Comparison_opContext.prototype.constructor = Comparison_opContext;


 
Comparison_opContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function GeqContext(parser, ctx) {
	Comparison_opContext.call(this, parser);
    Comparison_opContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GeqContext.prototype = Object.create(Comparison_opContext.prototype);
GeqContext.prototype.constructor = GeqContext;

PredicatesParser.GeqContext = GeqContext;

GeqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitGeq(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LtContext(parser, ctx) {
	Comparison_opContext.call(this, parser);
    Comparison_opContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LtContext.prototype = Object.create(Comparison_opContext.prototype);
LtContext.prototype.constructor = LtContext;

PredicatesParser.LtContext = LtContext;

LtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitLt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LeqContext(parser, ctx) {
	Comparison_opContext.call(this, parser);
    Comparison_opContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LeqContext.prototype = Object.create(Comparison_opContext.prototype);
LeqContext.prototype.constructor = LeqContext;

PredicatesParser.LeqContext = LeqContext;

LeqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitLeq(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NeqContext(parser, ctx) {
	Comparison_opContext.call(this, parser);
    Comparison_opContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NeqContext.prototype = Object.create(Comparison_opContext.prototype);
NeqContext.prototype.constructor = NeqContext;

PredicatesParser.NeqContext = NeqContext;

NeqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitNeq(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqContext(parser, ctx) {
	Comparison_opContext.call(this, parser);
    Comparison_opContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqContext.prototype = Object.create(Comparison_opContext.prototype);
EqContext.prototype.constructor = EqContext;

PredicatesParser.EqContext = EqContext;

EqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitEq(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GtContext(parser, ctx) {
	Comparison_opContext.call(this, parser);
    Comparison_opContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GtContext.prototype = Object.create(Comparison_opContext.prototype);
GtContext.prototype.constructor = GtContext;

PredicatesParser.GtContext = GtContext;

GtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitGt(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PredicatesParser.Comparison_opContext = Comparison_opContext;

PredicatesParser.prototype.comparison_op = function() {

    var localctx = new Comparison_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, PredicatesParser.RULE_comparison_op);
    try {
        this.state = 151;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PredicatesParser.LESS:
            localctx = new LtContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 145;
            this.match(PredicatesParser.LESS);
            break;
        case PredicatesParser.GREATER:
            localctx = new GtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 146;
            this.match(PredicatesParser.GREATER);
            break;
        case PredicatesParser.LESS_EQ:
            localctx = new LeqContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 147;
            this.match(PredicatesParser.LESS_EQ);
            break;
        case PredicatesParser.GREATER_EQ:
            localctx = new GeqContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 148;
            this.match(PredicatesParser.GREATER_EQ);
            break;
        case PredicatesParser.T__6:
            localctx = new EqContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 149;
            this.match(PredicatesParser.T__6);
            break;
        case PredicatesParser.T__10:
            localctx = new NeqContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 150;
            this.match(PredicatesParser.T__10);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.NAME = function() {
    return this.getToken(PredicatesParser.NAME, 0);
};

VariableContext.prototype.selectors = function() {
    return this.getTypedRuleContext(SelectorsContext,0);
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PredicatesParser.VariableContext = VariableContext;

PredicatesParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, PredicatesParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(PredicatesParser.NAME);
        this.state = 155;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 154;
            this.selectors();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SelectorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_selectors;
    return this;
}

SelectorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectorsContext.prototype.constructor = SelectorsContext;

SelectorsContext.prototype.selector = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SelectorContext);
    } else {
        return this.getTypedRuleContext(SelectorContext,i);
    }
};

SelectorsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitSelectors(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PredicatesParser.SelectorsContext = SelectorsContext;

PredicatesParser.prototype.selectors = function() {

    var localctx = new SelectorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, PredicatesParser.RULE_selectors);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 157;
        		this.selector();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 160; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,17, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_selector;
    return this;
}

SelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectorContext.prototype.constructor = SelectorContext;

SelectorContext.prototype.int_expr = function() {
    return this.getTypedRuleContext(Int_exprContext,0);
};

SelectorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitSelector(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PredicatesParser.SelectorContext = SelectorContext;

PredicatesParser.prototype.selector = function() {

    var localctx = new SelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, PredicatesParser.RULE_selector);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(PredicatesParser.T__11);
        this.state = 163;
        this.int_expr(0);
        this.state = 164;
        this.match(PredicatesParser.T__12);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


PredicatesParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 0:
			return this.predicate_sempred(localctx, predIndex);
	case 4:
			return this.ascending_chain_cmp_sempred(localctx, predIndex);
	case 5:
			return this.descending_chain_cmp_sempred(localctx, predIndex);
	case 6:
			return this.int_expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

PredicatesParser.prototype.predicate_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		case 2:
			return this.precpred(this._ctx, 2);
		case 3:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

PredicatesParser.prototype.ascending_chain_cmp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

PredicatesParser.prototype.descending_chain_cmp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

PredicatesParser.prototype.int_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		case 7:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.PredicatesParser = PredicatesParser;
