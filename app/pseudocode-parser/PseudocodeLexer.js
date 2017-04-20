// Generated from Pseudocode.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\"\u00a7\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0007\u001f\u0092\n\u001f\f\u001f\u000e\u001f\u0095\u000b\u001f",
    "\u0003 \u0003 \u0003 \u0007 \u009a\n \f \u000e \u009d\u000b \u0005 ",
    "\u009f\n \u0003!\u0006!\u00a2\n!\r!\u000e!\u00a3\u0003!\u0003!\u0002",
    "\u0002\"\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b",
    "\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017",
    "-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"\u0003",
    "\u0002\u0007\u0003\u0002c|\u0006\u00022;C\\aac|\u0003\u00023;\u0003",
    "\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u00aa\u0002\u0003\u0003",
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
    "\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u0002",
    "1\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003",
    "\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002",
    "\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002",
    "\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002",
    "\u0003C\u0003\u0002\u0002\u0002\u0005E\u0003\u0002\u0002\u0002\u0007",
    "K\u0003\u0002\u0002\u0002\tP\u0003\u0002\u0002\u0002\u000bS\u0003\u0002",
    "\u0002\u0002\rV\u0003\u0002\u0002\u0002\u000fY\u0003\u0002\u0002\u0002",
    "\u0011\\\u0003\u0002\u0002\u0002\u0013^\u0003\u0002\u0002\u0002\u0015",
    "a\u0003\u0002\u0002\u0002\u0017d\u0003\u0002\u0002\u0002\u0019f\u0003",
    "\u0002\u0002\u0002\u001bh\u0003\u0002\u0002\u0002\u001dj\u0003\u0002",
    "\u0002\u0002\u001fl\u0003\u0002\u0002\u0002!o\u0003\u0002\u0002\u0002",
    "#r\u0003\u0002\u0002\u0002%t\u0003\u0002\u0002\u0002\'v\u0003\u0002",
    "\u0002\u0002)y\u0003\u0002\u0002\u0002+|\u0003\u0002\u0002\u0002-~\u0003",
    "\u0002\u0002\u0002/\u0081\u0003\u0002\u0002\u00021\u0083\u0003\u0002",
    "\u0002\u00023\u0085\u0003\u0002\u0002\u00025\u0087\u0003\u0002\u0002",
    "\u00027\u0089\u0003\u0002\u0002\u00029\u008b\u0003\u0002\u0002\u0002",
    ";\u008d\u0003\u0002\u0002\u0002=\u008f\u0003\u0002\u0002\u0002?\u009e",
    "\u0003\u0002\u0002\u0002A\u00a1\u0003\u0002\u0002\u0002CD\u0007=\u0002",
    "\u0002D\u0004\u0003\u0002\u0002\u0002EF\u0007c\u0002\u0002FG\u0007d",
    "\u0002\u0002GH\u0007q\u0002\u0002HI\u0007t\u0002\u0002IJ\u0007v\u0002",
    "\u0002J\u0006\u0003\u0002\u0002\u0002KL\u0007u\u0002\u0002LM\u0007m",
    "\u0002\u0002MN\u0007k\u0002\u0002NO\u0007r\u0002\u0002O\b\u0003\u0002",
    "\u0002\u0002PQ\u0007k\u0002\u0002QR\u0007h\u0002\u0002R\n\u0003\u0002",
    "\u0002\u0002ST\u0007h\u0002\u0002TU\u0007k\u0002\u0002U\f\u0003\u0002",
    "\u0002\u0002VW\u0007f\u0002\u0002WX\u0007q\u0002\u0002X\u000e\u0003",
    "\u0002\u0002\u0002YZ\u0007q\u0002\u0002Z[\u0007f\u0002\u0002[\u0010",
    "\u0003\u0002\u0002\u0002\\]\u0007~\u0002\u0002]\u0012\u0003\u0002\u0002",
    "\u0002^_\u0007/\u0002\u0002_`\u0007@\u0002\u0002`\u0014\u0003\u0002",
    "\u0002\u0002ab\u0007<\u0002\u0002bc\u0007?\u0002\u0002c\u0016\u0003",
    "\u0002\u0002\u0002de\u0007.\u0002\u0002e\u0018\u0003\u0002\u0002\u0002",
    "fg\u0007*\u0002\u0002g\u001a\u0003\u0002\u0002\u0002hi\u0007+\u0002",
    "\u0002i\u001c\u0003\u0002\u0002\u0002jk\u0007,\u0002\u0002k\u001e\u0003",
    "\u0002\u0002\u0002lm\u0007(\u0002\u0002mn\u0007(\u0002\u0002n \u0003",
    "\u0002\u0002\u0002op\u0007~\u0002\u0002pq\u0007~\u0002\u0002q\"\u0003",
    "\u0002\u0002\u0002rs\u0007>\u0002\u0002s$\u0003\u0002\u0002\u0002tu",
    "\u0007@\u0002\u0002u&\u0003\u0002\u0002\u0002vw\u0007>\u0002\u0002w",
    "x\u0007?\u0002\u0002x(\u0003\u0002\u0002\u0002yz\u0007@\u0002\u0002",
    "z{\u0007?\u0002\u0002{*\u0003\u0002\u0002\u0002|}\u0007?\u0002\u0002",
    "},\u0003\u0002\u0002\u0002~\u007f\u0007>\u0002\u0002\u007f\u0080\u0007",
    "@\u0002\u0002\u0080.\u0003\u0002\u0002\u0002\u0081\u0082\u0007]\u0002",
    "\u0002\u00820\u0003\u0002\u0002\u0002\u0083\u0084\u0007_\u0002\u0002",
    "\u00842\u0003\u0002\u0002\u0002\u0085\u0086\u0007\u0080\u0002\u0002",
    "\u00864\u0003\u0002\u0002\u0002\u0087\u0088\u0007/\u0002\u0002\u0088",
    "6\u0003\u0002\u0002\u0002\u0089\u008a\u0007-\u0002\u0002\u008a8\u0003",
    "\u0002\u0002\u0002\u008b\u008c\u0007V\u0002\u0002\u008c:\u0003\u0002",
    "\u0002\u0002\u008d\u008e\u0007H\u0002\u0002\u008e<\u0003\u0002\u0002",
    "\u0002\u008f\u0093\t\u0002\u0002\u0002\u0090\u0092\t\u0003\u0002\u0002",
    "\u0091\u0090\u0003\u0002\u0002\u0002\u0092\u0095\u0003\u0002\u0002\u0002",
    "\u0093\u0091\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002",
    "\u0094>\u0003\u0002\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002",
    "\u0096\u009f\u00072\u0002\u0002\u0097\u009b\t\u0004\u0002\u0002\u0098",
    "\u009a\t\u0005\u0002\u0002\u0099\u0098\u0003\u0002\u0002\u0002\u009a",
    "\u009d\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009b",
    "\u009c\u0003\u0002\u0002\u0002\u009c\u009f\u0003\u0002\u0002\u0002\u009d",
    "\u009b\u0003\u0002\u0002\u0002\u009e\u0096\u0003\u0002\u0002\u0002\u009e",
    "\u0097\u0003\u0002\u0002\u0002\u009f@\u0003\u0002\u0002\u0002\u00a0",
    "\u00a2\t\u0006\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a2",
    "\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5",
    "\u00a6\b!\u0002\u0002\u00a6B\u0003\u0002\u0002\u0002\u0007\u0002\u0093",
    "\u009b\u009e\u00a3\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function PseudocodeLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

PseudocodeLexer.prototype = Object.create(antlr4.Lexer.prototype);
PseudocodeLexer.prototype.constructor = PseudocodeLexer;

PseudocodeLexer.EOF = antlr4.Token.EOF;
PseudocodeLexer.T__0 = 1;
PseudocodeLexer.T__1 = 2;
PseudocodeLexer.T__2 = 3;
PseudocodeLexer.T__3 = 4;
PseudocodeLexer.T__4 = 5;
PseudocodeLexer.T__5 = 6;
PseudocodeLexer.T__6 = 7;
PseudocodeLexer.T__7 = 8;
PseudocodeLexer.T__8 = 9;
PseudocodeLexer.T__9 = 10;
PseudocodeLexer.T__10 = 11;
PseudocodeLexer.T__11 = 12;
PseudocodeLexer.T__12 = 13;
PseudocodeLexer.T__13 = 14;
PseudocodeLexer.T__14 = 15;
PseudocodeLexer.T__15 = 16;
PseudocodeLexer.T__16 = 17;
PseudocodeLexer.T__17 = 18;
PseudocodeLexer.T__18 = 19;
PseudocodeLexer.T__19 = 20;
PseudocodeLexer.T__20 = 21;
PseudocodeLexer.T__21 = 22;
PseudocodeLexer.T__22 = 23;
PseudocodeLexer.T__23 = 24;
PseudocodeLexer.NEGATION = 25;
PseudocodeLexer.MINUS = 26;
PseudocodeLexer.PLUS = 27;
PseudocodeLexer.TRUE = 28;
PseudocodeLexer.FALSE = 29;
PseudocodeLexer.NAME = 30;
PseudocodeLexer.INT = 31;
PseudocodeLexer.WS = 32;


PseudocodeLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

PseudocodeLexer.prototype.literalNames = [ null, "';'", "'abort'", "'skip'", 
                                           "'if'", "'fi'", "'do'", "'od'", 
                                           "'|'", "'->'", "':='", "','", 
                                           "'('", "')'", "'*'", "'&&'", 
                                           "'||'", "'<'", "'>'", "'<='", 
                                           "'>='", "'='", "'<>'", "'['", 
                                           "']'", "'~'", "'-'", "'+'", "'T'", 
                                           "'F'" ];

PseudocodeLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            "NEGATION", "MINUS", "PLUS", 
                                            "TRUE", "FALSE", "NAME", "INT", 
                                            "WS" ];

PseudocodeLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                        "T__4", "T__5", "T__6", "T__7", 
                                        "T__8", "T__9", "T__10", "T__11", 
                                        "T__12", "T__13", "T__14", "T__15", 
                                        "T__16", "T__17", "T__18", "T__19", 
                                        "T__20", "T__21", "T__22", "T__23", 
                                        "NEGATION", "MINUS", "PLUS", "TRUE", 
                                        "FALSE", "NAME", "INT", "WS" ];

PseudocodeLexer.prototype.grammarFileName = "Pseudocode.g4";



exports.PseudocodeLexer = PseudocodeLexer;

