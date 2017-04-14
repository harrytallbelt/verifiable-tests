// Generated from Predicates.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PredicatesVisitor = require('./PredicatesVisitor').PredicatesVisitor;

var grammarFileName = "Predicates.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0019d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0005\u0002\u0011\n\u0002\u0003\u0002\u0003\u0002",
    "\u0005\u0002\u0015\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u001f",
    "\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u0002-\n\u0002\f\u0002\u000e\u00020\u000b\u0002\u0003",
    "\u0003\u0003\u0003\u0005\u00034\n\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u00038\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003<\n\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003B\n\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "J\n\u0003\f\u0003\u000e\u0003M\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004U\n\u0004\u0003",
    "\u0005\u0003\u0005\u0005\u0005Y\n\u0005\u0003\u0006\u0006\u0006\\\n",
    "\u0006\r\u0006\u000e\u0006]\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0002\u0004\u0002\u0004\b\u0002\u0004\u0006\b\n\f",
    "\u0002\u0004\u0003\u0002\u0015\u0016\u0003\u0002\u0013\u0014s\u0002",
    "\u001e\u0003\u0002\u0002\u0002\u0004A\u0003\u0002\u0002\u0002\u0006",
    "T\u0003\u0002\u0002\u0002\bV\u0003\u0002\u0002\u0002\n[\u0003\u0002",
    "\u0002\u0002\f_\u0003\u0002\u0002\u0002\u000e\u0010\b\u0002\u0001\u0002",
    "\u000f\u0011\u0007\u0012\u0002\u0002\u0010\u000f\u0003\u0002\u0002\u0002",
    "\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002",
    "\u0012\u001f\t\u0002\u0002\u0002\u0013\u0015\u0007\u0012\u0002\u0002",
    "\u0014\u0013\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002",
    "\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0017\u0007\u0003\u0002\u0002",
    "\u0017\u0018\u0005\u0002\u0002\u0002\u0018\u0019\u0007\u0004\u0002\u0002",
    "\u0019\u001f\u0003\u0002\u0002\u0002\u001a\u001b\u0005\u0004\u0003\u0002",
    "\u001b\u001c\u0005\u0006\u0004\u0002\u001c\u001d\u0005\u0004\u0003\u0002",
    "\u001d\u001f\u0003\u0002\u0002\u0002\u001e\u000e\u0003\u0002\u0002\u0002",
    "\u001e\u0014\u0003\u0002\u0002\u0002\u001e\u001a\u0003\u0002\u0002\u0002",
    "\u001f.\u0003\u0002\u0002\u0002 !\f\u0006\u0002\u0002!\"\u0007\u0005",
    "\u0002\u0002\"-\u0005\u0002\u0002\u0007#$\f\u0005\u0002\u0002$%\u0007",
    "\u0006\u0002\u0002%-\u0005\u0002\u0002\u0006&\'\f\u0004\u0002\u0002",
    "\'(\u0007\u0007\u0002\u0002(-\u0005\u0002\u0002\u0005)*\f\u0003\u0002",
    "\u0002*+\u0007\b\u0002\u0002+-\u0005\u0002\u0002\u0004, \u0003\u0002",
    "\u0002\u0002,#\u0003\u0002\u0002\u0002,&\u0003\u0002\u0002\u0002,)\u0003",
    "\u0002\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002",
    "./\u0003\u0002\u0002\u0002/\u0003\u0003\u0002\u0002\u00020.\u0003\u0002",
    "\u0002\u000213\b\u0003\u0001\u000224\u0007\u0013\u0002\u000232\u0003",
    "\u0002\u0002\u000234\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u0002",
    "5B\u0007\u0018\u0002\u000268\u0007\u0013\u0002\u000276\u0003\u0002\u0002",
    "\u000278\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029B\u0005\b",
    "\u0005\u0002:<\u0007\u0013\u0002\u0002;:\u0003\u0002\u0002\u0002;<\u0003",
    "\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=>\u0007\u0003\u0002\u0002",
    ">?\u0005\u0004\u0003\u0002?@\u0007\u0004\u0002\u0002@B\u0003\u0002\u0002",
    "\u0002A1\u0003\u0002\u0002\u0002A7\u0003\u0002\u0002\u0002A;\u0003\u0002",
    "\u0002\u0002BK\u0003\u0002\u0002\u0002CD\f\u0004\u0002\u0002DE\u0007",
    "\t\u0002\u0002EJ\u0005\u0004\u0003\u0005FG\f\u0003\u0002\u0002GH\t\u0003",
    "\u0002\u0002HJ\u0005\u0004\u0003\u0004IC\u0003\u0002\u0002\u0002IF\u0003",
    "\u0002\u0002\u0002JM\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002",
    "KL\u0003\u0002\u0002\u0002L\u0005\u0003\u0002\u0002\u0002MK\u0003\u0002",
    "\u0002\u0002NU\u0007\n\u0002\u0002OU\u0007\u000b\u0002\u0002PU\u0007",
    "\f\u0002\u0002QU\u0007\r\u0002\u0002RU\u0007\u000e\u0002\u0002SU\u0007",
    "\u000f\u0002\u0002TN\u0003\u0002\u0002\u0002TO\u0003\u0002\u0002\u0002",
    "TP\u0003\u0002\u0002\u0002TQ\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002",
    "\u0002TS\u0003\u0002\u0002\u0002U\u0007\u0003\u0002\u0002\u0002VX\u0007",
    "\u0017\u0002\u0002WY\u0005\n\u0006\u0002XW\u0003\u0002\u0002\u0002X",
    "Y\u0003\u0002\u0002\u0002Y\t\u0003\u0002\u0002\u0002Z\\\u0005\f\u0007",
    "\u0002[Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002][\u0003",
    "\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^\u000b\u0003\u0002\u0002",
    "\u0002_`\u0007\u0010\u0002\u0002`a\u0005\u0004\u0003\u0002ab\u0007\u0011",
    "\u0002\u0002b\r\u0003\u0002\u0002\u0002\u0010\u0010\u0014\u001e,.37",
    ";AIKTX]"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'&&'", "'||'", "'=>'", "'<=>'", 
                     "'*'", "'<'", "'>'", "'<='", "'>='", "'='", "'<>'", 
                     "'['", "']'", "'~'", "'-'", "'+'", "'T'", "'F'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "NEGATION", 
                      "MINUS", "PLUS", "TRUE", "FALSE", "NAME", "INT", "WS" ];

var ruleNames =  [ "predicate", "int_expr", "comparison_op", "variable", 
                   "selectors", "selector" ];

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
PredicatesParser.T__13 = 14;
PredicatesParser.T__14 = 15;
PredicatesParser.NEGATION = 16;
PredicatesParser.MINUS = 17;
PredicatesParser.PLUS = 18;
PredicatesParser.TRUE = 19;
PredicatesParser.FALSE = 20;
PredicatesParser.NAME = 21;
PredicatesParser.INT = 22;
PredicatesParser.WS = 23;

PredicatesParser.RULE_predicate = 0;
PredicatesParser.RULE_int_expr = 1;
PredicatesParser.RULE_comparison_op = 2;
PredicatesParser.RULE_variable = 3;
PredicatesParser.RULE_selectors = 4;
PredicatesParser.RULE_selector = 5;

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
        this.state = 28;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Bool_const_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 14;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.NEGATION) {
                this.state = 13;
                this.match(PredicatesParser.NEGATION);
            }

            this.state = 16;
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
            this.state = 18;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.NEGATION) {
                this.state = 17;
                this.match(PredicatesParser.NEGATION);
            }

            this.state = 20;
            this.match(PredicatesParser.T__0);
            this.state = 21;
            this.predicate(0);
            this.state = 22;
            this.match(PredicatesParser.T__1);
            break;

        case 3:
            localctx = new Comparison_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 24;
            this.int_expr(0);
            this.state = 25;
            this.comparison_op();
            this.state = 26;
            this.int_expr(0);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 44;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 42;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new And_exprContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_predicate);
                    this.state = 30;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 31;
                    this.match(PredicatesParser.T__2);
                    this.state = 32;
                    this.predicate(5);
                    break;

                case 2:
                    localctx = new Or_exprContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_predicate);
                    this.state = 33;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 34;
                    this.match(PredicatesParser.T__3);
                    this.state = 35;
                    this.predicate(4);
                    break;

                case 3:
                    localctx = new Implies_exprContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_predicate);
                    this.state = 36;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 37;
                    this.match(PredicatesParser.T__4);
                    this.state = 38;
                    this.predicate(3);
                    break;

                case 4:
                    localctx = new Iff_exprContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_predicate);
                    this.state = 39;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 40;
                    this.match(PredicatesParser.T__5);
                    this.state = 41;
                    this.predicate(2);
                    break;

                } 
            }
            this.state = 46;
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
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, PredicatesParser.RULE_int_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Int_const_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.MINUS) {
                this.state = 48;
                this.match(PredicatesParser.MINUS);
            }

            this.state = 51;
            this.match(PredicatesParser.INT);
            break;

        case 2:
            localctx = new Variable_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.MINUS) {
                this.state = 52;
                this.match(PredicatesParser.MINUS);
            }

            this.state = 55;
            this.variable();
            break;

        case 3:
            localctx = new Paret_int_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 57;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.MINUS) {
                this.state = 56;
                this.match(PredicatesParser.MINUS);
            }

            this.state = 59;
            this.match(PredicatesParser.T__0);
            this.state = 60;
            this.int_expr(0);
            this.state = 61;
            this.match(PredicatesParser.T__1);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 73;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 71;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Mult_exprContext(this, new Int_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_int_expr);
                    this.state = 65;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 66;
                    this.match(PredicatesParser.T__6);
                    this.state = 67;
                    this.int_expr(3);
                    break;

                case 2:
                    localctx = new Add_exprContext(this, new Int_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_int_expr);
                    this.state = 68;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 69;
                    _la = this._input.LA(1);
                    if(!(_la===PredicatesParser.MINUS || _la===PredicatesParser.PLUS)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 70;
                    this.int_expr(2);
                    break;

                } 
            }
            this.state = 75;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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
    this.enterRule(localctx, 4, PredicatesParser.RULE_comparison_op);
    try {
        this.state = 82;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PredicatesParser.T__7:
            localctx = new LtContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 76;
            this.match(PredicatesParser.T__7);
            break;
        case PredicatesParser.T__8:
            localctx = new GtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this.match(PredicatesParser.T__8);
            break;
        case PredicatesParser.T__9:
            localctx = new LeqContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 78;
            this.match(PredicatesParser.T__9);
            break;
        case PredicatesParser.T__10:
            localctx = new GeqContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 79;
            this.match(PredicatesParser.T__10);
            break;
        case PredicatesParser.T__11:
            localctx = new EqContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 80;
            this.match(PredicatesParser.T__11);
            break;
        case PredicatesParser.T__12:
            localctx = new NeqContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 81;
            this.match(PredicatesParser.T__12);
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
    this.enterRule(localctx, 6, PredicatesParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.match(PredicatesParser.NAME);
        this.state = 86;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        if(la_===1) {
            this.state = 85;
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
    this.enterRule(localctx, 8, PredicatesParser.RULE_selectors);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 88;
        		this.selector();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 91; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
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
    this.enterRule(localctx, 10, PredicatesParser.RULE_selector);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(PredicatesParser.T__13);
        this.state = 94;
        this.int_expr(0);
        this.state = 95;
        this.match(PredicatesParser.T__14);
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
	case 1:
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

PredicatesParser.prototype.int_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		case 5:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.PredicatesParser = PredicatesParser;
