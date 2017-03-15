// Generated from Pseudocode.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PseudocodeVisitor = require('./PseudocodeVisitor').PseudocodeVisitor;

var grammarFileName = "Pseudocode.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\"\u009b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0003\u0002\u0005\u0002\u001d\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003\"\n\u0003\f\u0003\u000e\u0003%",
    "\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u00042\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "7\n\u0005\f\u0005\u000e\u0005:\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007J\n\u0007\u0003\b\u0003\b\u0005\bN\n\b\u0003\b\u0003\b\u0005\b",
    "R\n\b\u0003\b\u0003\b\u0005\bV\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\b\\\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bd\n",
    "\b\f\b\u000e\bg\u000b\b\u0003\t\u0003\t\u0005\tk\n\t\u0003\t\u0003\t",
    "\u0005\to\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\ty\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0007\t\u0081\n\t\f\t\u000e\t\u0084\u000b\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0005\n\u008c\n\n\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u0090\n\u000b\u0003\f\u0006\f\u0093\n\f\r\f\u000e\f\u0094",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0002\u0004\u000e\u0010\u000e",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002\u0004",
    "\u0003\u0002\u001c\u001d\u0003\u0002\u001e\u001f\u00aa\u0002\u001c\u0003",
    "\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002\u0002\u00061\u0003",
    "\u0002\u0002\u0002\b3\u0003\u0002\u0002\u0002\n;\u0003\u0002\u0002\u0002",
    "\fI\u0003\u0002\u0002\u0002\u000e[\u0003\u0002\u0002\u0002\u0010x\u0003",
    "\u0002\u0002\u0002\u0012\u008b\u0003\u0002\u0002\u0002\u0014\u008d\u0003",
    "\u0002\u0002\u0002\u0016\u0092\u0003\u0002\u0002\u0002\u0018\u0096\u0003",
    "\u0002\u0002\u0002\u001a\u001d\u0003\u0002\u0002\u0002\u001b\u001d\u0005",
    "\u0004\u0003\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001b\u0003",
    "\u0002\u0002\u0002\u001d\u0003\u0003\u0002\u0002\u0002\u001e#\u0005",
    "\u0006\u0004\u0002\u001f \u0007\u0003\u0002\u0002 \"\u0005\u0006\u0004",
    "\u0002!\u001f\u0003\u0002\u0002\u0002\"%\u0003\u0002\u0002\u0002#!\u0003",
    "\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$\u0005\u0003\u0002\u0002",
    "\u0002%#\u0003\u0002\u0002\u0002&2\u0007\u0004\u0002\u0002\'2\u0007",
    "\u0005\u0002\u0002(2\u0005\f\u0007\u0002)*\u0007\u0006\u0002\u0002*",
    "+\u0005\b\u0005\u0002+,\u0007\u0007\u0002\u0002,2\u0003\u0002\u0002",
    "\u0002-.\u0007\b\u0002\u0002./\u0005\b\u0005\u0002/0\u0007\t\u0002\u0002",
    "02\u0003\u0002\u0002\u00021&\u0003\u0002\u0002\u00021\'\u0003\u0002",
    "\u0002\u00021(\u0003\u0002\u0002\u00021)\u0003\u0002\u0002\u00021-\u0003",
    "\u0002\u0002\u00022\u0007\u0003\u0002\u0002\u000238\u0005\n\u0006\u0002",
    "45\u0007\n\u0002\u000257\u0005\n\u0006\u000264\u0003\u0002\u0002\u0002",
    "7:\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002",
    "\u00029\t\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002;<\u0005",
    "\u0010\t\u0002<=\u0007\u000b\u0002\u0002=>\u0005\u0004\u0003\u0002>",
    "\u000b\u0003\u0002\u0002\u0002?@\u0005\u0014\u000b\u0002@A\u0007\f\u0002",
    "\u0002AB\u0005\u000e\b\u0002BJ\u0003\u0002\u0002\u0002CD\u0005\u0014",
    "\u000b\u0002DE\u0007\r\u0002\u0002EF\u0005\f\u0007\u0002FG\u0007\r\u0002",
    "\u0002GH\u0005\u000e\b\u0002HJ\u0003\u0002\u0002\u0002I?\u0003\u0002",
    "\u0002\u0002IC\u0003\u0002\u0002\u0002J\r\u0003\u0002\u0002\u0002KM",
    "\b\b\u0001\u0002LN\u0007\u001c\u0002\u0002ML\u0003\u0002\u0002\u0002",
    "MN\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002O\\\u0007!\u0002",
    "\u0002PR\u0007\u001c\u0002\u0002QP\u0003\u0002\u0002\u0002QR\u0003\u0002",
    "\u0002\u0002RS\u0003\u0002\u0002\u0002S\\\u0005\u0014\u000b\u0002TV",
    "\u0007\u001c\u0002\u0002UT\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002",
    "\u0002VW\u0003\u0002\u0002\u0002WX\u0007\u000e\u0002\u0002XY\u0005\u000e",
    "\b\u0002YZ\u0007\u000f\u0002\u0002Z\\\u0003\u0002\u0002\u0002[K\u0003",
    "\u0002\u0002\u0002[Q\u0003\u0002\u0002\u0002[U\u0003\u0002\u0002\u0002",
    "\\e\u0003\u0002\u0002\u0002]^\f\u0004\u0002\u0002^_\u0007\u0010\u0002",
    "\u0002_d\u0005\u000e\b\u0005`a\f\u0003\u0002\u0002ab\t\u0002\u0002\u0002",
    "bd\u0005\u000e\b\u0004c]\u0003\u0002\u0002\u0002c`\u0003\u0002\u0002",
    "\u0002dg\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002ef\u0003\u0002",
    "\u0002\u0002f\u000f\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002",
    "hj\b\t\u0001\u0002ik\u0007\u001b\u0002\u0002ji\u0003\u0002\u0002\u0002",
    "jk\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002ly\t\u0003\u0002",
    "\u0002mo\u0007\u001b\u0002\u0002nm\u0003\u0002\u0002\u0002no\u0003\u0002",
    "\u0002\u0002op\u0003\u0002\u0002\u0002pq\u0007\u000e\u0002\u0002qr\u0005",
    "\u0010\t\u0002rs\u0007\u000f\u0002\u0002sy\u0003\u0002\u0002\u0002t",
    "u\u0005\u000e\b\u0002uv\u0005\u0012\n\u0002vw\u0005\u000e\b\u0002wy",
    "\u0003\u0002\u0002\u0002xh\u0003\u0002\u0002\u0002xn\u0003\u0002\u0002",
    "\u0002xt\u0003\u0002\u0002\u0002y\u0082\u0003\u0002\u0002\u0002z{\f",
    "\u0004\u0002\u0002{|\u0007\u0011\u0002\u0002|\u0081\u0005\u0010\t\u0005",
    "}~\f\u0003\u0002\u0002~\u007f\u0007\u0012\u0002\u0002\u007f\u0081\u0005",
    "\u0010\t\u0004\u0080z\u0003\u0002\u0002\u0002\u0080}\u0003\u0002\u0002",
    "\u0002\u0081\u0084\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002",
    "\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0011\u0003\u0002\u0002",
    "\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0085\u008c\u0007\u0013\u0002",
    "\u0002\u0086\u008c\u0007\u0014\u0002\u0002\u0087\u008c\u0007\u0015\u0002",
    "\u0002\u0088\u008c\u0007\u0016\u0002\u0002\u0089\u008c\u0007\u0017\u0002",
    "\u0002\u008a\u008c\u0007\u0018\u0002\u0002\u008b\u0085\u0003\u0002\u0002",
    "\u0002\u008b\u0086\u0003\u0002\u0002\u0002\u008b\u0087\u0003\u0002\u0002",
    "\u0002\u008b\u0088\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002",
    "\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008c\u0013\u0003\u0002\u0002",
    "\u0002\u008d\u008f\u0007 \u0002\u0002\u008e\u0090\u0005\u0016\f\u0002",
    "\u008f\u008e\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002",
    "\u0090\u0015\u0003\u0002\u0002\u0002\u0091\u0093\u0005\u0018\r\u0002",
    "\u0092\u0091\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002",
    "\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002",
    "\u0095\u0017\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u0019\u0002\u0002",
    "\u0097\u0098\u0005\u000e\b\u0002\u0098\u0099\u0007\u001a\u0002\u0002",
    "\u0099\u0019\u0003\u0002\u0002\u0002\u0015\u001c#18IMQU[cejnx\u0080",
    "\u0082\u008b\u008f\u0094"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'abort'", "'skip'", "'if'", "'fi'", "'do'", 
                     "'od'", "'|'", "'->'", "':='", "','", "'('", "')'", 
                     "'*'", "'&&'", "'||'", "'<'", "'>'", "'<='", "'>='", 
                     "'='", "'<>'", "'['", "']'", "'~'", "'-'", "'+'", "'T'", 
                     "'F'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "NEGATION", 
                      "MINUS", "PLUS", "TRUE", "FALSE", "NAME", "INT", "WS" ];

var ruleNames =  [ "program", "statements", "statement", "guarded_commands", 
                   "guarded_command", "assignment", "int_expr", "bool_expr", 
                   "comparison_op", "variable", "selectors", "selector" ];

function PseudocodeParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PseudocodeParser.prototype = Object.create(antlr4.Parser.prototype);
PseudocodeParser.prototype.constructor = PseudocodeParser;

Object.defineProperty(PseudocodeParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PseudocodeParser.EOF = antlr4.Token.EOF;
PseudocodeParser.T__0 = 1;
PseudocodeParser.T__1 = 2;
PseudocodeParser.T__2 = 3;
PseudocodeParser.T__3 = 4;
PseudocodeParser.T__4 = 5;
PseudocodeParser.T__5 = 6;
PseudocodeParser.T__6 = 7;
PseudocodeParser.T__7 = 8;
PseudocodeParser.T__8 = 9;
PseudocodeParser.T__9 = 10;
PseudocodeParser.T__10 = 11;
PseudocodeParser.T__11 = 12;
PseudocodeParser.T__12 = 13;
PseudocodeParser.T__13 = 14;
PseudocodeParser.T__14 = 15;
PseudocodeParser.T__15 = 16;
PseudocodeParser.T__16 = 17;
PseudocodeParser.T__17 = 18;
PseudocodeParser.T__18 = 19;
PseudocodeParser.T__19 = 20;
PseudocodeParser.T__20 = 21;
PseudocodeParser.T__21 = 22;
PseudocodeParser.T__22 = 23;
PseudocodeParser.T__23 = 24;
PseudocodeParser.NEGATION = 25;
PseudocodeParser.MINUS = 26;
PseudocodeParser.PLUS = 27;
PseudocodeParser.TRUE = 28;
PseudocodeParser.FALSE = 29;
PseudocodeParser.NAME = 30;
PseudocodeParser.INT = 31;
PseudocodeParser.WS = 32;

PseudocodeParser.RULE_program = 0;
PseudocodeParser.RULE_statements = 1;
PseudocodeParser.RULE_statement = 2;
PseudocodeParser.RULE_guarded_commands = 3;
PseudocodeParser.RULE_guarded_command = 4;
PseudocodeParser.RULE_assignment = 5;
PseudocodeParser.RULE_int_expr = 6;
PseudocodeParser.RULE_bool_expr = 7;
PseudocodeParser.RULE_comparison_op = 8;
PseudocodeParser.RULE_variable = 9;
PseudocodeParser.RULE_selectors = 10;
PseudocodeParser.RULE_selector = 11;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PseudocodeParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PseudocodeParser.ProgramContext = ProgramContext;

PseudocodeParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PseudocodeParser.RULE_program);
    try {
        this.state = 26;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PseudocodeParser.EOF:
            this.enterOuterAlt(localctx, 1);

            break;
        case PseudocodeParser.T__1:
        case PseudocodeParser.T__2:
        case PseudocodeParser.T__3:
        case PseudocodeParser.T__5:
        case PseudocodeParser.NAME:
            this.enterOuterAlt(localctx, 2);
            this.state = 25;
            this.statements();
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

function StatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PseudocodeParser.RULE_statements;
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;

StatementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PseudocodeParser.StatementsContext = StatementsContext;

PseudocodeParser.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PseudocodeParser.RULE_statements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.statement();
        this.state = 33;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PseudocodeParser.T__0) {
            this.state = 29;
            this.match(PseudocodeParser.T__0);
            this.state = 30;
            this.statement();
            this.state = 35;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PseudocodeParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AbortContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AbortContext.prototype = Object.create(StatementContext.prototype);
AbortContext.prototype.constructor = AbortContext;

PseudocodeParser.AbortContext = AbortContext;

AbortContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitAbort(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function If_statementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

If_statementContext.prototype = Object.create(StatementContext.prototype);
If_statementContext.prototype.constructor = If_statementContext;

PseudocodeParser.If_statementContext = If_statementContext;

If_statementContext.prototype.guarded_commands = function() {
    return this.getTypedRuleContext(Guarded_commandsContext,0);
};
If_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitIf_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SkipContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SkipContext.prototype = Object.create(StatementContext.prototype);
SkipContext.prototype.constructor = SkipContext;

PseudocodeParser.SkipContext = SkipContext;

SkipContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitSkip(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Assignment_statementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Assignment_statementContext.prototype = Object.create(StatementContext.prototype);
Assignment_statementContext.prototype.constructor = Assignment_statementContext;

PseudocodeParser.Assignment_statementContext = Assignment_statementContext;

Assignment_statementContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};
Assignment_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitAssignment_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Do_statementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Do_statementContext.prototype = Object.create(StatementContext.prototype);
Do_statementContext.prototype.constructor = Do_statementContext;

PseudocodeParser.Do_statementContext = Do_statementContext;

Do_statementContext.prototype.guarded_commands = function() {
    return this.getTypedRuleContext(Guarded_commandsContext,0);
};
Do_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitDo_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PseudocodeParser.StatementContext = StatementContext;

PseudocodeParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PseudocodeParser.RULE_statement);
    try {
        this.state = 47;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PseudocodeParser.T__1:
            localctx = new AbortContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 36;
            this.match(PseudocodeParser.T__1);
            break;
        case PseudocodeParser.T__2:
            localctx = new SkipContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 37;
            this.match(PseudocodeParser.T__2);
            break;
        case PseudocodeParser.NAME:
            localctx = new Assignment_statementContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 38;
            this.assignment();
            break;
        case PseudocodeParser.T__3:
            localctx = new If_statementContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 39;
            this.match(PseudocodeParser.T__3);
            this.state = 40;
            this.guarded_commands();
            this.state = 41;
            this.match(PseudocodeParser.T__4);
            break;
        case PseudocodeParser.T__5:
            localctx = new Do_statementContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 43;
            this.match(PseudocodeParser.T__5);
            this.state = 44;
            this.guarded_commands();
            this.state = 45;
            this.match(PseudocodeParser.T__6);
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

function Guarded_commandsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PseudocodeParser.RULE_guarded_commands;
    return this;
}

Guarded_commandsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Guarded_commandsContext.prototype.constructor = Guarded_commandsContext;

Guarded_commandsContext.prototype.guarded_command = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Guarded_commandContext);
    } else {
        return this.getTypedRuleContext(Guarded_commandContext,i);
    }
};

Guarded_commandsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitGuarded_commands(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PseudocodeParser.Guarded_commandsContext = Guarded_commandsContext;

PseudocodeParser.prototype.guarded_commands = function() {

    var localctx = new Guarded_commandsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, PseudocodeParser.RULE_guarded_commands);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.guarded_command();
        this.state = 54;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PseudocodeParser.T__7) {
            this.state = 50;
            this.match(PseudocodeParser.T__7);
            this.state = 51;
            this.guarded_command();
            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function Guarded_commandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PseudocodeParser.RULE_guarded_command;
    return this;
}

Guarded_commandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Guarded_commandContext.prototype.constructor = Guarded_commandContext;

Guarded_commandContext.prototype.bool_expr = function() {
    return this.getTypedRuleContext(Bool_exprContext,0);
};

Guarded_commandContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

Guarded_commandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitGuarded_command(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PseudocodeParser.Guarded_commandContext = Guarded_commandContext;

PseudocodeParser.prototype.guarded_command = function() {

    var localctx = new Guarded_commandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, PseudocodeParser.RULE_guarded_command);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.bool_expr(0);
        this.state = 58;
        this.match(PseudocodeParser.T__8);
        this.state = 59;
        this.statements();
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

function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PseudocodeParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;


 
AssignmentContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Scalar_assignmentContext(parser, ctx) {
	AssignmentContext.call(this, parser);
    AssignmentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Scalar_assignmentContext.prototype = Object.create(AssignmentContext.prototype);
Scalar_assignmentContext.prototype.constructor = Scalar_assignmentContext;

PseudocodeParser.Scalar_assignmentContext = Scalar_assignmentContext;

Scalar_assignmentContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Scalar_assignmentContext.prototype.int_expr = function() {
    return this.getTypedRuleContext(Int_exprContext,0);
};
Scalar_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitScalar_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Vector_assignmentContext(parser, ctx) {
	AssignmentContext.call(this, parser);
    AssignmentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Vector_assignmentContext.prototype = Object.create(AssignmentContext.prototype);
Vector_assignmentContext.prototype.constructor = Vector_assignmentContext;

PseudocodeParser.Vector_assignmentContext = Vector_assignmentContext;

Vector_assignmentContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Vector_assignmentContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

Vector_assignmentContext.prototype.int_expr = function() {
    return this.getTypedRuleContext(Int_exprContext,0);
};
Vector_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitVector_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PseudocodeParser.AssignmentContext = AssignmentContext;

PseudocodeParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, PseudocodeParser.RULE_assignment);
    try {
        this.state = 71;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Scalar_assignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 61;
            this.variable();
            this.state = 62;
            this.match(PseudocodeParser.T__9);
            this.state = 63;
            this.int_expr(0);
            break;

        case 2:
            localctx = new Vector_assignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 65;
            this.variable();
            this.state = 66;
            this.match(PseudocodeParser.T__10);
            this.state = 67;
            this.assignment();
            this.state = 68;
            this.match(PseudocodeParser.T__10);
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

function Int_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PseudocodeParser.RULE_int_expr;
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

PseudocodeParser.Paret_int_exprContext = Paret_int_exprContext;

Paret_int_exprContext.prototype.int_expr = function() {
    return this.getTypedRuleContext(Int_exprContext,0);
};

Paret_int_exprContext.prototype.MINUS = function() {
    return this.getToken(PseudocodeParser.MINUS, 0);
};
Paret_int_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
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

PseudocodeParser.Add_exprContext = Add_exprContext;

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
    return this.getToken(PseudocodeParser.PLUS, 0);
};

Add_exprContext.prototype.MINUS = function() {
    return this.getToken(PseudocodeParser.MINUS, 0);
};
Add_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
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

PseudocodeParser.Variable_exprContext = Variable_exprContext;

Variable_exprContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Variable_exprContext.prototype.MINUS = function() {
    return this.getToken(PseudocodeParser.MINUS, 0);
};
Variable_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
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

PseudocodeParser.Int_const_exprContext = Int_const_exprContext;

Int_const_exprContext.prototype.INT = function() {
    return this.getToken(PseudocodeParser.INT, 0);
};

Int_const_exprContext.prototype.MINUS = function() {
    return this.getToken(PseudocodeParser.MINUS, 0);
};
Int_const_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
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

PseudocodeParser.Mult_exprContext = Mult_exprContext;

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
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitMult_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PseudocodeParser.prototype.int_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Int_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, PseudocodeParser.RULE_int_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Int_const_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 75;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PseudocodeParser.MINUS) {
                this.state = 74;
                this.match(PseudocodeParser.MINUS);
            }

            this.state = 77;
            this.match(PseudocodeParser.INT);
            break;

        case 2:
            localctx = new Variable_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 79;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PseudocodeParser.MINUS) {
                this.state = 78;
                this.match(PseudocodeParser.MINUS);
            }

            this.state = 81;
            this.variable();
            break;

        case 3:
            localctx = new Paret_int_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 83;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PseudocodeParser.MINUS) {
                this.state = 82;
                this.match(PseudocodeParser.MINUS);
            }

            this.state = 85;
            this.match(PseudocodeParser.T__11);
            this.state = 86;
            this.int_expr(0);
            this.state = 87;
            this.match(PseudocodeParser.T__12);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 99;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 97;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Mult_exprContext(this, new Int_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PseudocodeParser.RULE_int_expr);
                    this.state = 91;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 92;
                    this.match(PseudocodeParser.T__13);
                    this.state = 93;
                    this.int_expr(3);
                    break;

                case 2:
                    localctx = new Add_exprContext(this, new Int_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PseudocodeParser.RULE_int_expr);
                    this.state = 94;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 95;
                    _la = this._input.LA(1);
                    if(!(_la===PseudocodeParser.MINUS || _la===PseudocodeParser.PLUS)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 96;
                    this.int_expr(2);
                    break;

                } 
            }
            this.state = 101;
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

function Bool_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PseudocodeParser.RULE_bool_expr;
    return this;
}

Bool_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Bool_exprContext.prototype.constructor = Bool_exprContext;


 
Bool_exprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function Bool_const_exprContext(parser, ctx) {
	Bool_exprContext.call(this, parser);
    Bool_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Bool_const_exprContext.prototype = Object.create(Bool_exprContext.prototype);
Bool_const_exprContext.prototype.constructor = Bool_const_exprContext;

PseudocodeParser.Bool_const_exprContext = Bool_const_exprContext;

Bool_const_exprContext.prototype.TRUE = function() {
    return this.getToken(PseudocodeParser.TRUE, 0);
};

Bool_const_exprContext.prototype.FALSE = function() {
    return this.getToken(PseudocodeParser.FALSE, 0);
};

Bool_const_exprContext.prototype.NEGATION = function() {
    return this.getToken(PseudocodeParser.NEGATION, 0);
};
Bool_const_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitBool_const_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function And_exprContext(parser, ctx) {
	Bool_exprContext.call(this, parser);
    Bool_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

And_exprContext.prototype = Object.create(Bool_exprContext.prototype);
And_exprContext.prototype.constructor = And_exprContext;

PseudocodeParser.And_exprContext = And_exprContext;

And_exprContext.prototype.bool_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Bool_exprContext);
    } else {
        return this.getTypedRuleContext(Bool_exprContext,i);
    }
};
And_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitAnd_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Comparison_exprContext(parser, ctx) {
	Bool_exprContext.call(this, parser);
    Bool_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Comparison_exprContext.prototype = Object.create(Bool_exprContext.prototype);
Comparison_exprContext.prototype.constructor = Comparison_exprContext;

PseudocodeParser.Comparison_exprContext = Comparison_exprContext;

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
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitComparison_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Or_exprContext(parser, ctx) {
	Bool_exprContext.call(this, parser);
    Bool_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Or_exprContext.prototype = Object.create(Bool_exprContext.prototype);
Or_exprContext.prototype.constructor = Or_exprContext;

PseudocodeParser.Or_exprContext = Or_exprContext;

Or_exprContext.prototype.bool_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Bool_exprContext);
    } else {
        return this.getTypedRuleContext(Bool_exprContext,i);
    }
};
Or_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitOr_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Paret_bool_exprContext(parser, ctx) {
	Bool_exprContext.call(this, parser);
    Bool_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Paret_bool_exprContext.prototype = Object.create(Bool_exprContext.prototype);
Paret_bool_exprContext.prototype.constructor = Paret_bool_exprContext;

PseudocodeParser.Paret_bool_exprContext = Paret_bool_exprContext;

Paret_bool_exprContext.prototype.bool_expr = function() {
    return this.getTypedRuleContext(Bool_exprContext,0);
};

Paret_bool_exprContext.prototype.NEGATION = function() {
    return this.getToken(PseudocodeParser.NEGATION, 0);
};
Paret_bool_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitParet_bool_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PseudocodeParser.prototype.bool_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Bool_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, PseudocodeParser.RULE_bool_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Bool_const_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 104;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PseudocodeParser.NEGATION) {
                this.state = 103;
                this.match(PseudocodeParser.NEGATION);
            }

            this.state = 106;
            _la = this._input.LA(1);
            if(!(_la===PseudocodeParser.TRUE || _la===PseudocodeParser.FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 2:
            localctx = new Paret_bool_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 108;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PseudocodeParser.NEGATION) {
                this.state = 107;
                this.match(PseudocodeParser.NEGATION);
            }

            this.state = 110;
            this.match(PseudocodeParser.T__11);
            this.state = 111;
            this.bool_expr(0);
            this.state = 112;
            this.match(PseudocodeParser.T__12);
            break;

        case 3:
            localctx = new Comparison_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 114;
            this.int_expr(0);
            this.state = 115;
            this.comparison_op();
            this.state = 116;
            this.int_expr(0);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 128;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 126;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new And_exprContext(this, new Bool_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PseudocodeParser.RULE_bool_expr);
                    this.state = 120;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 121;
                    this.match(PseudocodeParser.T__14);
                    this.state = 122;
                    this.bool_expr(3);
                    break;

                case 2:
                    localctx = new Or_exprContext(this, new Bool_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PseudocodeParser.RULE_bool_expr);
                    this.state = 123;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 124;
                    this.match(PseudocodeParser.T__15);
                    this.state = 125;
                    this.bool_expr(2);
                    break;

                } 
            }
            this.state = 130;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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
    this.ruleIndex = PseudocodeParser.RULE_comparison_op;
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

PseudocodeParser.GeqContext = GeqContext;

GeqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
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

PseudocodeParser.LtContext = LtContext;

LtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
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

PseudocodeParser.LeqContext = LeqContext;

LeqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
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

PseudocodeParser.NeqContext = NeqContext;

NeqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
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

PseudocodeParser.EqContext = EqContext;

EqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
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

PseudocodeParser.GtContext = GtContext;

GtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitGt(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PseudocodeParser.Comparison_opContext = Comparison_opContext;

PseudocodeParser.prototype.comparison_op = function() {

    var localctx = new Comparison_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, PseudocodeParser.RULE_comparison_op);
    try {
        this.state = 137;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PseudocodeParser.T__16:
            localctx = new LtContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 131;
            this.match(PseudocodeParser.T__16);
            break;
        case PseudocodeParser.T__17:
            localctx = new GtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 132;
            this.match(PseudocodeParser.T__17);
            break;
        case PseudocodeParser.T__18:
            localctx = new LeqContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 133;
            this.match(PseudocodeParser.T__18);
            break;
        case PseudocodeParser.T__19:
            localctx = new GeqContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 134;
            this.match(PseudocodeParser.T__19);
            break;
        case PseudocodeParser.T__20:
            localctx = new EqContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 135;
            this.match(PseudocodeParser.T__20);
            break;
        case PseudocodeParser.T__21:
            localctx = new NeqContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 136;
            this.match(PseudocodeParser.T__21);
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
    this.ruleIndex = PseudocodeParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.NAME = function() {
    return this.getToken(PseudocodeParser.NAME, 0);
};

VariableContext.prototype.selectors = function() {
    return this.getTypedRuleContext(SelectorsContext,0);
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PseudocodeParser.VariableContext = VariableContext;

PseudocodeParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, PseudocodeParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.match(PseudocodeParser.NAME);
        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 140;
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
    this.ruleIndex = PseudocodeParser.RULE_selectors;
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
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitSelectors(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PseudocodeParser.SelectorsContext = SelectorsContext;

PseudocodeParser.prototype.selectors = function() {

    var localctx = new SelectorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, PseudocodeParser.RULE_selectors);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 143;
        		this.selector();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 146; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,18, this._ctx);
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
    this.ruleIndex = PseudocodeParser.RULE_selector;
    return this;
}

SelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectorContext.prototype.constructor = SelectorContext;

SelectorContext.prototype.int_expr = function() {
    return this.getTypedRuleContext(Int_exprContext,0);
};

SelectorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PseudocodeVisitor ) {
        return visitor.visitSelector(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PseudocodeParser.SelectorContext = SelectorContext;

PseudocodeParser.prototype.selector = function() {

    var localctx = new SelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, PseudocodeParser.RULE_selector);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.match(PseudocodeParser.T__22);
        this.state = 149;
        this.int_expr(0);
        this.state = 150;
        this.match(PseudocodeParser.T__23);
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


PseudocodeParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 6:
			return this.int_expr_sempred(localctx, predIndex);
	case 7:
			return this.bool_expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

PseudocodeParser.prototype.int_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

PseudocodeParser.prototype.bool_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		case 3:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.PseudocodeParser = PseudocodeParser;
