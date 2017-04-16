// Generated from Predicates.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002!\u00a1\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001e\u0003\u001e\u0007\u001e\u008c\n\u001e\f\u001e",
    "\u000e\u001e\u008f\u000b\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0007",
    "\u001f\u0094\n\u001f\f\u001f\u000e\u001f\u0097\u000b\u001f\u0005\u001f",
    "\u0099\n\u001f\u0003 \u0006 \u009c\n \r \u000e \u009d\u0003 \u0003 ",
    "\u0002\u0002!\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017",
    "-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!\u0003\u0002",
    "\u0007\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0003\u00023;\u0003\u0002",
    "2;\u0005\u0002\u000b\f\u000f\u000f\"\"\u00a4\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002",
    "\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002",
    "\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002",
    "\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002",
    "\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002",
    "\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002",
    "\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002",
    "-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003",
    "\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002",
    "\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002",
    "\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002",
    "\u0002?\u0003\u0002\u0002\u0002\u0003A\u0003\u0002\u0002\u0002\u0005",
    "C\u0003\u0002\u0002\u0002\u0007E\u0003\u0002\u0002\u0002\tH\u0003\u0002",
    "\u0002\u0002\u000bK\u0003\u0002\u0002\u0002\rN\u0003\u0002\u0002\u0002",
    "\u000fR\u0003\u0002\u0002\u0002\u0011T\u0003\u0002\u0002\u0002\u0013",
    "V\u0003\u0002\u0002\u0002\u0015X\u0003\u0002\u0002\u0002\u0017]\u0003",
    "\u0002\u0002\u0002\u0019_\u0003\u0002\u0002\u0002\u001ba\u0003\u0002",
    "\u0002\u0002\u001dd\u0003\u0002\u0002\u0002\u001ff\u0003\u0002\u0002",
    "\u0002!h\u0003\u0002\u0002\u0002#j\u0003\u0002\u0002\u0002%m\u0003\u0002",
    "\u0002\u0002\'o\u0003\u0002\u0002\u0002)r\u0003\u0002\u0002\u0002+t",
    "\u0003\u0002\u0002\u0002-v\u0003\u0002\u0002\u0002/z\u0003\u0002\u0002",
    "\u00021\u007f\u0003\u0002\u0002\u00023\u0081\u0003\u0002\u0002\u0002",
    "5\u0083\u0003\u0002\u0002\u00027\u0085\u0003\u0002\u0002\u00029\u0087",
    "\u0003\u0002\u0002\u0002;\u0089\u0003\u0002\u0002\u0002=\u0098\u0003",
    "\u0002\u0002\u0002?\u009b\u0003\u0002\u0002\u0002AB\u0007*\u0002\u0002",
    "B\u0004\u0003\u0002\u0002\u0002CD\u0007+\u0002\u0002D\u0006\u0003\u0002",
    "\u0002\u0002EF\u0007(\u0002\u0002FG\u0007(\u0002\u0002G\b\u0003\u0002",
    "\u0002\u0002HI\u0007~\u0002\u0002IJ\u0007~\u0002\u0002J\n\u0003\u0002",
    "\u0002\u0002KL\u0007?\u0002\u0002LM\u0007@\u0002\u0002M\f\u0003\u0002",
    "\u0002\u0002NO\u0007>\u0002\u0002OP\u0007?\u0002\u0002PQ\u0007@\u0002",
    "\u0002Q\u000e\u0003\u0002\u0002\u0002RS\u0007<\u0002\u0002S\u0010\u0003",
    "\u0002\u0002\u0002TU\u0007?\u0002\u0002U\u0012\u0003\u0002\u0002\u0002",
    "VW\u0007.\u0002\u0002W\u0014\u0003\u0002\u0002\u0002XY\u0007r\u0002",
    "\u0002YZ\u0007g\u0002\u0002Z[\u0007t\u0002\u0002[\\\u0007o\u0002\u0002",
    "\\\u0016\u0003\u0002\u0002\u0002]^\u0007P\u0002\u0002^\u0018\u0003\u0002",
    "\u0002\u0002_`\u0007,\u0002\u0002`\u001a\u0003\u0002\u0002\u0002ab\u0007",
    ">\u0002\u0002bc\u0007@\u0002\u0002c\u001c\u0003\u0002\u0002\u0002de",
    "\u0007]\u0002\u0002e\u001e\u0003\u0002\u0002\u0002fg\u0007_\u0002\u0002",
    "g \u0003\u0002\u0002\u0002hi\u0007>\u0002\u0002i\"\u0003\u0002\u0002",
    "\u0002jk\u0007>\u0002\u0002kl\u0007?\u0002\u0002l$\u0003\u0002\u0002",
    "\u0002mn\u0007@\u0002\u0002n&\u0003\u0002\u0002\u0002op\u0007@\u0002",
    "\u0002pq\u0007?\u0002\u0002q(\u0003\u0002\u0002\u0002rs\u0007C\u0002",
    "\u0002s*\u0003\u0002\u0002\u0002tu\u0007G\u0002\u0002u,\u0003\u0002",
    "\u0002\u0002vw\u0007U\u0002\u0002wx\u0007W\u0002\u0002xy\u0007O\u0002",
    "\u0002y.\u0003\u0002\u0002\u0002z{\u0007R\u0002\u0002{|\u0007T\u0002",
    "\u0002|}\u0007Q\u0002\u0002}~\u0007F\u0002\u0002~0\u0003\u0002\u0002",
    "\u0002\u007f\u0080\u0007\u0080\u0002\u0002\u00802\u0003\u0002\u0002",
    "\u0002\u0081\u0082\u0007/\u0002\u0002\u00824\u0003\u0002\u0002\u0002",
    "\u0083\u0084\u0007-\u0002\u0002\u00846\u0003\u0002\u0002\u0002\u0085",
    "\u0086\u0007V\u0002\u0002\u00868\u0003\u0002\u0002\u0002\u0087\u0088",
    "\u0007H\u0002\u0002\u0088:\u0003\u0002\u0002\u0002\u0089\u008d\t\u0002",
    "\u0002\u0002\u008a\u008c\t\u0003\u0002\u0002\u008b\u008a\u0003\u0002",
    "\u0002\u0002\u008c\u008f\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002",
    "\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e<\u0003\u0002",
    "\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u0090\u0099\u00072",
    "\u0002\u0002\u0091\u0095\t\u0004\u0002\u0002\u0092\u0094\t\u0005\u0002",
    "\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0094\u0097\u0003\u0002\u0002",
    "\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002",
    "\u0002\u0096\u0099\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002",
    "\u0002\u0098\u0090\u0003\u0002\u0002\u0002\u0098\u0091\u0003\u0002\u0002",
    "\u0002\u0099>\u0003\u0002\u0002\u0002\u009a\u009c\t\u0006\u0002\u0002",
    "\u009b\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002",
    "\u009d\u009b\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a0\b \u0002\u0002\u00a0",
    "@\u0003\u0002\u0002\u0002\u0007\u0002\u008d\u0095\u0098\u009d\u0003",
    "\b\u0002\u0002"].join("");


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
PredicatesLexer.LESS = 16;
PredicatesLexer.LESS_EQ = 17;
PredicatesLexer.GREATER = 18;
PredicatesLexer.GREATER_EQ = 19;
PredicatesLexer.FORALL = 20;
PredicatesLexer.EXISTS = 21;
PredicatesLexer.SUM = 22;
PredicatesLexer.PROD = 23;
PredicatesLexer.NEGATION = 24;
PredicatesLexer.MINUS = 25;
PredicatesLexer.PLUS = 26;
PredicatesLexer.TRUE = 27;
PredicatesLexer.FALSE = 28;
PredicatesLexer.NAME = 29;
PredicatesLexer.INT = 30;
PredicatesLexer.WS = 31;


PredicatesLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

PredicatesLexer.prototype.literalNames = [ null, "'('", "')'", "'&&'", "'||'", 
                                           "'=>'", "'<=>'", "':'", "'='", 
                                           "','", "'perm'", "'N'", "'*'", 
                                           "'<>'", "'['", "']'", "'<'", 
                                           "'<='", "'>'", "'>='", "'A'", 
                                           "'E'", "'SUM'", "'PROD'", "'~'", 
                                           "'-'", "'+'", "'T'", "'F'" ];

PredicatesLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, "LESS", "LESS_EQ", "GREATER", 
                                            "GREATER_EQ", "FORALL", "EXISTS", 
                                            "SUM", "PROD", "NEGATION", "MINUS", 
                                            "PLUS", "TRUE", "FALSE", "NAME", 
                                            "INT", "WS" ];

PredicatesLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                        "T__4", "T__5", "T__6", "T__7", 
                                        "T__8", "T__9", "T__10", "T__11", 
                                        "T__12", "T__13", "T__14", "LESS", 
                                        "LESS_EQ", "GREATER", "GREATER_EQ", 
                                        "FORALL", "EXISTS", "SUM", "PROD", 
                                        "NEGATION", "MINUS", "PLUS", "TRUE", 
                                        "FALSE", "NAME", "INT", "WS" ];

PredicatesLexer.prototype.grammarFileName = "Predicates.g4";



exports.PredicatesLexer = PredicatesLexer;

