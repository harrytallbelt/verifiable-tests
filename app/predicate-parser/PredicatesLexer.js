// Generated from Predicates.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u001b\u0084\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0007\u0018",
    "o\n\u0018\f\u0018\u000e\u0018r\u000b\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0007\u0019w\n\u0019\f\u0019\u000e\u0019z\u000b\u0019\u0005\u0019",
    "|\n\u0019\u0003\u001a\u0006\u001a\u007f\n\u001a\r\u001a\u000e\u001a",
    "\u0080\u0003\u001a\u0003\u001a\u0002\u0002\u001b\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b\u0003\u0002",
    "\u0007\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0003\u00023;\u0003\u0002",
    "2;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0087\u0002\u0003\u0003\u0002",
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
    "\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00035\u0003\u0002",
    "\u0002\u0002\u00057\u0003\u0002\u0002\u0002\u00079\u0003\u0002\u0002",
    "\u0002\t<\u0003\u0002\u0002\u0002\u000b?\u0003\u0002\u0002\u0002\rB",
    "\u0003\u0002\u0002\u0002\u000fF\u0003\u0002\u0002\u0002\u0011H\u0003",
    "\u0002\u0002\u0002\u0013J\u0003\u0002\u0002\u0002\u0015O\u0003\u0002",
    "\u0002\u0002\u0017Q\u0003\u0002\u0002\u0002\u0019T\u0003\u0002\u0002",
    "\u0002\u001bV\u0003\u0002\u0002\u0002\u001dX\u0003\u0002\u0002\u0002",
    "\u001fZ\u0003\u0002\u0002\u0002!]\u0003\u0002\u0002\u0002#_\u0003\u0002",
    "\u0002\u0002%b\u0003\u0002\u0002\u0002\'d\u0003\u0002\u0002\u0002)f",
    "\u0003\u0002\u0002\u0002+h\u0003\u0002\u0002\u0002-j\u0003\u0002\u0002",
    "\u0002/l\u0003\u0002\u0002\u00021{\u0003\u0002\u0002\u00023~\u0003\u0002",
    "\u0002\u000256\u0007*\u0002\u00026\u0004\u0003\u0002\u0002\u000278\u0007",
    "+\u0002\u00028\u0006\u0003\u0002\u0002\u00029:\u0007(\u0002\u0002:;",
    "\u0007(\u0002\u0002;\b\u0003\u0002\u0002\u0002<=\u0007~\u0002\u0002",
    "=>\u0007~\u0002\u0002>\n\u0003\u0002\u0002\u0002?@\u0007?\u0002\u0002",
    "@A\u0007@\u0002\u0002A\f\u0003\u0002\u0002\u0002BC\u0007>\u0002\u0002",
    "CD\u0007?\u0002\u0002DE\u0007@\u0002\u0002E\u000e\u0003\u0002\u0002",
    "\u0002FG\u0007?\u0002\u0002G\u0010\u0003\u0002\u0002\u0002HI\u0007.",
    "\u0002\u0002I\u0012\u0003\u0002\u0002\u0002JK\u0007r\u0002\u0002KL\u0007",
    "g\u0002\u0002LM\u0007t\u0002\u0002MN\u0007o\u0002\u0002N\u0014\u0003",
    "\u0002\u0002\u0002OP\u0007,\u0002\u0002P\u0016\u0003\u0002\u0002\u0002",
    "QR\u0007>\u0002\u0002RS\u0007@\u0002\u0002S\u0018\u0003\u0002\u0002",
    "\u0002TU\u0007]\u0002\u0002U\u001a\u0003\u0002\u0002\u0002VW\u0007_",
    "\u0002\u0002W\u001c\u0003\u0002\u0002\u0002XY\u0007>\u0002\u0002Y\u001e",
    "\u0003\u0002\u0002\u0002Z[\u0007>\u0002\u0002[\\\u0007?\u0002\u0002",
    "\\ \u0003\u0002\u0002\u0002]^\u0007@\u0002\u0002^\"\u0003\u0002\u0002",
    "\u0002_`\u0007@\u0002\u0002`a\u0007?\u0002\u0002a$\u0003\u0002\u0002",
    "\u0002bc\u0007\u0080\u0002\u0002c&\u0003\u0002\u0002\u0002de\u0007/",
    "\u0002\u0002e(\u0003\u0002\u0002\u0002fg\u0007-\u0002\u0002g*\u0003",
    "\u0002\u0002\u0002hi\u0007V\u0002\u0002i,\u0003\u0002\u0002\u0002jk",
    "\u0007H\u0002\u0002k.\u0003\u0002\u0002\u0002lp\t\u0002\u0002\u0002",
    "mo\t\u0003\u0002\u0002nm\u0003\u0002\u0002\u0002or\u0003\u0002\u0002",
    "\u0002pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002q0\u0003\u0002",
    "\u0002\u0002rp\u0003\u0002\u0002\u0002s|\u00072\u0002\u0002tx\t\u0004",
    "\u0002\u0002uw\t\u0005\u0002\u0002vu\u0003\u0002\u0002\u0002wz\u0003",
    "\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002",
    "y|\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{s\u0003\u0002\u0002",
    "\u0002{t\u0003\u0002\u0002\u0002|2\u0003\u0002\u0002\u0002}\u007f\t",
    "\u0006\u0002\u0002~}\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002",
    "\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\b\u001a",
    "\u0002\u0002\u00834\u0003\u0002\u0002\u0002\u0007\u0002px{\u0080\u0003",
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
PredicatesLexer.LESS = 14;
PredicatesLexer.LESS_EQ = 15;
PredicatesLexer.GREATER = 16;
PredicatesLexer.GREATER_EQ = 17;
PredicatesLexer.NEGATION = 18;
PredicatesLexer.MINUS = 19;
PredicatesLexer.PLUS = 20;
PredicatesLexer.TRUE = 21;
PredicatesLexer.FALSE = 22;
PredicatesLexer.NAME = 23;
PredicatesLexer.INT = 24;
PredicatesLexer.WS = 25;


PredicatesLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

PredicatesLexer.prototype.literalNames = [ null, "'('", "')'", "'&&'", "'||'", 
                                           "'=>'", "'<=>'", "'='", "','", 
                                           "'perm'", "'*'", "'<>'", "'['", 
                                           "']'", "'<'", "'<='", "'>'", 
                                           "'>='", "'~'", "'-'", "'+'", 
                                           "'T'", "'F'" ];

PredicatesLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                            null, null, null, null, null, 
                                            null, null, null, null, "LESS", 
                                            "LESS_EQ", "GREATER", "GREATER_EQ", 
                                            "NEGATION", "MINUS", "PLUS", 
                                            "TRUE", "FALSE", "NAME", "INT", 
                                            "WS" ];

PredicatesLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                        "T__4", "T__5", "T__6", "T__7", 
                                        "T__8", "T__9", "T__10", "T__11", 
                                        "T__12", "LESS", "LESS_EQ", "GREATER", 
                                        "GREATER_EQ", "NEGATION", "MINUS", 
                                        "PLUS", "TRUE", "FALSE", "NAME", 
                                        "INT", "WS" ];

PredicatesLexer.prototype.grammarFileName = "Predicates.g4";



exports.PredicatesLexer = PredicatesLexer;

