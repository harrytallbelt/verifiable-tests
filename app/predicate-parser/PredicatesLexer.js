// Generated from Predicates.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0019y\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0007\u0016d\n\u0016\f\u0016\u000e\u0016g\u000b\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017l\n\u0017\f\u0017\u000e",
    "\u0017o\u000b\u0017\u0005\u0017q\n\u0017\u0003\u0018\u0006\u0018t\n",
    "\u0018\r\u0018\u000e\u0018u\u0003\u0018\u0003\u0018\u0002\u0002\u0019",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t",
    "\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010",
    "\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u0019",
    "\u0003\u0002\u0007\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0003\u0002",
    "3;\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"|\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002",
    "\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u0003",
    "1\u0003\u0002\u0002\u0002\u00053\u0003\u0002\u0002\u0002\u00075\u0003",
    "\u0002\u0002\u0002\t8\u0003\u0002\u0002\u0002\u000b;\u0003\u0002\u0002",
    "\u0002\r>\u0003\u0002\u0002\u0002\u000fB\u0003\u0002\u0002\u0002\u0011",
    "D\u0003\u0002\u0002\u0002\u0013F\u0003\u0002\u0002\u0002\u0015H\u0003",
    "\u0002\u0002\u0002\u0017K\u0003\u0002\u0002\u0002\u0019N\u0003\u0002",
    "\u0002\u0002\u001bP\u0003\u0002\u0002\u0002\u001dS\u0003\u0002\u0002",
    "\u0002\u001fU\u0003\u0002\u0002\u0002!W\u0003\u0002\u0002\u0002#Y\u0003",
    "\u0002\u0002\u0002%[\u0003\u0002\u0002\u0002\']\u0003\u0002\u0002\u0002",
    ")_\u0003\u0002\u0002\u0002+a\u0003\u0002\u0002\u0002-p\u0003\u0002\u0002",
    "\u0002/s\u0003\u0002\u0002\u000212\u0007*\u0002\u00022\u0004\u0003\u0002",
    "\u0002\u000234\u0007+\u0002\u00024\u0006\u0003\u0002\u0002\u000256\u0007",
    "(\u0002\u000267\u0007(\u0002\u00027\b\u0003\u0002\u0002\u000289\u0007",
    "~\u0002\u00029:\u0007~\u0002\u0002:\n\u0003\u0002\u0002\u0002;<\u0007",
    "?\u0002\u0002<=\u0007@\u0002\u0002=\f\u0003\u0002\u0002\u0002>?\u0007",
    ">\u0002\u0002?@\u0007?\u0002\u0002@A\u0007@\u0002\u0002A\u000e\u0003",
    "\u0002\u0002\u0002BC\u0007,\u0002\u0002C\u0010\u0003\u0002\u0002\u0002",
    "DE\u0007>\u0002\u0002E\u0012\u0003\u0002\u0002\u0002FG\u0007@\u0002",
    "\u0002G\u0014\u0003\u0002\u0002\u0002HI\u0007>\u0002\u0002IJ\u0007?",
    "\u0002\u0002J\u0016\u0003\u0002\u0002\u0002KL\u0007@\u0002\u0002LM\u0007",
    "?\u0002\u0002M\u0018\u0003\u0002\u0002\u0002NO\u0007?\u0002\u0002O\u001a",
    "\u0003\u0002\u0002\u0002PQ\u0007>\u0002\u0002QR\u0007@\u0002\u0002R",
    "\u001c\u0003\u0002\u0002\u0002ST\u0007]\u0002\u0002T\u001e\u0003\u0002",
    "\u0002\u0002UV\u0007_\u0002\u0002V \u0003\u0002\u0002\u0002WX\u0007",
    "\u0080\u0002\u0002X\"\u0003\u0002\u0002\u0002YZ\u0007/\u0002\u0002Z",
    "$\u0003\u0002\u0002\u0002[\\\u0007-\u0002\u0002\\&\u0003\u0002\u0002",
    "\u0002]^\u0007V\u0002\u0002^(\u0003\u0002\u0002\u0002_`\u0007H\u0002",
    "\u0002`*\u0003\u0002\u0002\u0002ae\t\u0002\u0002\u0002bd\t\u0003\u0002",
    "\u0002cb\u0003\u0002\u0002\u0002dg\u0003\u0002\u0002\u0002ec\u0003\u0002",
    "\u0002\u0002ef\u0003\u0002\u0002\u0002f,\u0003\u0002\u0002\u0002ge\u0003",
    "\u0002\u0002\u0002hq\u00072\u0002\u0002im\t\u0004\u0002\u0002jl\t\u0005",
    "\u0002\u0002kj\u0003\u0002\u0002\u0002lo\u0003\u0002\u0002\u0002mk\u0003",
    "\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002nq\u0003\u0002\u0002\u0002",
    "om\u0003\u0002\u0002\u0002ph\u0003\u0002\u0002\u0002pi\u0003\u0002\u0002",
    "\u0002q.\u0003\u0002\u0002\u0002rt\t\u0006\u0002\u0002sr\u0003\u0002",
    "\u0002\u0002tu\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003",
    "\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wx\b\u0018\u0002\u0002x",
    "0\u0003\u0002\u0002\u0002\u0007\u0002empu\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function PredicatesLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

PredicatesLexer.prototype = Object.create(antlr4.Lexer.prototype);
PredicatesLexer.prototype.constructor = PredicatesLexer;

PredicatesLexer.EOF = antlr4.Token.EOF;
PredicatesLexer.T__0 = 1;
PredicatesLexer.T__1 = 2;
PredicatesLexer.T__2 = 3;
PredicatesLexer.T__3 = 4;
PredicatesLexer.T__4 = 5;
PredicatesLexer.T__5 = 6;
PredicatesLexer.T__6 = 7;
PredicatesLexer.T__7 = 8;
PredicatesLexer.T__8 = 9;
PredicatesLexer.T__9 = 10;
PredicatesLexer.T__10 = 11;
PredicatesLexer.T__11 = 12;
PredicatesLexer.T__12 = 13;
PredicatesLexer.T__13 = 14;
PredicatesLexer.T__14 = 15;
PredicatesLexer.NEGATION = 16;
PredicatesLexer.MINUS = 17;
PredicatesLexer.PLUS = 18;
PredicatesLexer.TRUE = 19;
PredicatesLexer.FALSE = 20;
PredicatesLexer.NAME = 21;
PredicatesLexer.INT = 22;
PredicatesLexer.WS = 23;


PredicatesLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

PredicatesLexer.prototype.literalNames = [ null, "'('", "')'", "'&&'", "'||'", 
                                           "'=>'", "'<=>'", "'*'", "'<'", 
                                           "'>'", "'<='", "'>='", "'='", 
                                           "'<>'", "'['", "']'", "'~'", 
                                           "'-'", "'+'", "'T'", "'F'" ];

PredicatesLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, "NEGATION", "MINUS", "PLUS", 
                                            "TRUE", "FALSE", "NAME", "INT", 
                                            "WS" ];

PredicatesLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                        "T__4", "T__5", "T__6", "T__7", 
                                        "T__8", "T__9", "T__10", "T__11", 
                                        "T__12", "T__13", "T__14", "NEGATION", 
                                        "MINUS", "PLUS", "TRUE", "FALSE", 
                                        "NAME", "INT", "WS" ];

PredicatesLexer.prototype.grammarFileName = "Predicates.g4";



exports.PredicatesLexer = PredicatesLexer;

