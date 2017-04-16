// Generated from Predicates.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u001e\u0090\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0007\u001b",
    "{\n\u001b\f\u001b\u000e\u001b~\u000b\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0007\u001c\u0083\n\u001c\f\u001c\u000e\u001c\u0086\u000b\u001c",
    "\u0005\u001c\u0088\n\u001c\u0003\u001d\u0006\u001d\u008b\n\u001d\r\u001d",
    "\u000e\u001d\u008c\u0003\u001d\u0003\u001d\u0002\u0002\u001e\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013",
    "\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011",
    "!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b",
    "5\u001c7\u001d9\u001e\u0003\u0002\u0007\u0005\u0002C\\aac|\u0006\u0002",
    "2;C\\aac|\u0003\u00023;\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u0093\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002",
    "\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002",
    "\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002",
    "\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002",
    "\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002",
    "/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003",
    "\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002",
    "\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0003;\u0003\u0002\u0002",
    "\u0002\u0005=\u0003\u0002\u0002\u0002\u0007?\u0003\u0002\u0002\u0002",
    "\tB\u0003\u0002\u0002\u0002\u000bE\u0003\u0002\u0002\u0002\rH\u0003",
    "\u0002\u0002\u0002\u000fL\u0003\u0002\u0002\u0002\u0011N\u0003\u0002",
    "\u0002\u0002\u0013P\u0003\u0002\u0002\u0002\u0015R\u0003\u0002\u0002",
    "\u0002\u0017W\u0003\u0002\u0002\u0002\u0019Y\u0003\u0002\u0002\u0002",
    "\u001b\\\u0003\u0002\u0002\u0002\u001d^\u0003\u0002\u0002\u0002\u001f",
    "`\u0003\u0002\u0002\u0002!b\u0003\u0002\u0002\u0002#e\u0003\u0002\u0002",
    "\u0002%g\u0003\u0002\u0002\u0002\'j\u0003\u0002\u0002\u0002)l\u0003",
    "\u0002\u0002\u0002+n\u0003\u0002\u0002\u0002-p\u0003\u0002\u0002\u0002",
    "/r\u0003\u0002\u0002\u00021t\u0003\u0002\u0002\u00023v\u0003\u0002\u0002",
    "\u00025x\u0003\u0002\u0002\u00027\u0087\u0003\u0002\u0002\u00029\u008a",
    "\u0003\u0002\u0002\u0002;<\u0007*\u0002\u0002<\u0004\u0003\u0002\u0002",
    "\u0002=>\u0007+\u0002\u0002>\u0006\u0003\u0002\u0002\u0002?@\u0007(",
    "\u0002\u0002@A\u0007(\u0002\u0002A\b\u0003\u0002\u0002\u0002BC\u0007",
    "~\u0002\u0002CD\u0007~\u0002\u0002D\n\u0003\u0002\u0002\u0002EF\u0007",
    "?\u0002\u0002FG\u0007@\u0002\u0002G\f\u0003\u0002\u0002\u0002HI\u0007",
    ">\u0002\u0002IJ\u0007?\u0002\u0002JK\u0007@\u0002\u0002K\u000e\u0003",
    "\u0002\u0002\u0002LM\u0007<\u0002\u0002M\u0010\u0003\u0002\u0002\u0002",
    "NO\u0007?\u0002\u0002O\u0012\u0003\u0002\u0002\u0002PQ\u0007.\u0002",
    "\u0002Q\u0014\u0003\u0002\u0002\u0002RS\u0007r\u0002\u0002ST\u0007g",
    "\u0002\u0002TU\u0007t\u0002\u0002UV\u0007o\u0002\u0002V\u0016\u0003",
    "\u0002\u0002\u0002WX\u0007,\u0002\u0002X\u0018\u0003\u0002\u0002\u0002",
    "YZ\u0007>\u0002\u0002Z[\u0007@\u0002\u0002[\u001a\u0003\u0002\u0002",
    "\u0002\\]\u0007]\u0002\u0002]\u001c\u0003\u0002\u0002\u0002^_\u0007",
    "_\u0002\u0002_\u001e\u0003\u0002\u0002\u0002`a\u0007>\u0002\u0002a ",
    "\u0003\u0002\u0002\u0002bc\u0007>\u0002\u0002cd\u0007?\u0002\u0002d",
    "\"\u0003\u0002\u0002\u0002ef\u0007@\u0002\u0002f$\u0003\u0002\u0002",
    "\u0002gh\u0007@\u0002\u0002hi\u0007?\u0002\u0002i&\u0003\u0002\u0002",
    "\u0002jk\u0007C\u0002\u0002k(\u0003\u0002\u0002\u0002lm\u0007G\u0002",
    "\u0002m*\u0003\u0002\u0002\u0002no\u0007\u0080\u0002\u0002o,\u0003\u0002",
    "\u0002\u0002pq\u0007/\u0002\u0002q.\u0003\u0002\u0002\u0002rs\u0007",
    "-\u0002\u0002s0\u0003\u0002\u0002\u0002tu\u0007V\u0002\u0002u2\u0003",
    "\u0002\u0002\u0002vw\u0007H\u0002\u0002w4\u0003\u0002\u0002\u0002x|",
    "\t\u0002\u0002\u0002y{\t\u0003\u0002\u0002zy\u0003\u0002\u0002\u0002",
    "{~\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002",
    "\u0002}6\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002\u007f\u0088",
    "\u00072\u0002\u0002\u0080\u0084\t\u0004\u0002\u0002\u0081\u0083\t\u0005",
    "\u0002\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083\u0086\u0003\u0002",
    "\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002",
    "\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002",
    "\u0002\u0002\u0087\u007f\u0003\u0002\u0002\u0002\u0087\u0080\u0003\u0002",
    "\u0002\u0002\u00888\u0003\u0002\u0002\u0002\u0089\u008b\t\u0006\u0002",
    "\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002",
    "\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008f\b\u001d\u0002",
    "\u0002\u008f:\u0003\u0002\u0002\u0002\u0007\u0002|\u0084\u0087\u008c",
    "\u0003\b\u0002\u0002"].join("");


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
PredicatesLexer.LESS = 15;
PredicatesLexer.LESS_EQ = 16;
PredicatesLexer.GREATER = 17;
PredicatesLexer.GREATER_EQ = 18;
PredicatesLexer.FORALL = 19;
PredicatesLexer.EXISTS = 20;
PredicatesLexer.NEGATION = 21;
PredicatesLexer.MINUS = 22;
PredicatesLexer.PLUS = 23;
PredicatesLexer.TRUE = 24;
PredicatesLexer.FALSE = 25;
PredicatesLexer.NAME = 26;
PredicatesLexer.INT = 27;
PredicatesLexer.WS = 28;


PredicatesLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

PredicatesLexer.prototype.literalNames = [ null, "'('", "')'", "'&&'", "'||'", 
                                           "'=>'", "'<=>'", "':'", "'='", 
                                           "','", "'perm'", "'*'", "'<>'", 
                                           "'['", "']'", "'<'", "'<='", 
                                           "'>'", "'>='", "'A'", "'E'", 
                                           "'~'", "'-'", "'+'", "'T'", "'F'" ];

PredicatesLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            "LESS", "LESS_EQ", "GREATER", 
                                            "GREATER_EQ", "FORALL", "EXISTS", 
                                            "NEGATION", "MINUS", "PLUS", 
                                            "TRUE", "FALSE", "NAME", "INT", 
                                            "WS" ];

PredicatesLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                        "T__4", "T__5", "T__6", "T__7", 
                                        "T__8", "T__9", "T__10", "T__11", 
                                        "T__12", "T__13", "LESS", "LESS_EQ", 
                                        "GREATER", "GREATER_EQ", "FORALL", 
                                        "EXISTS", "NEGATION", "MINUS", "PLUS", 
                                        "TRUE", "FALSE", "NAME", "INT", 
                                        "WS" ];

PredicatesLexer.prototype.grammarFileName = "Predicates.g4";



exports.PredicatesLexer = PredicatesLexer;

