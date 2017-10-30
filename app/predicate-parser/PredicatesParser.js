// Generated from Predicates.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PredicatesVisitor = require('./PredicatesVisitor').PredicatesVisitor;

var grammarFileName = "Predicates.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003!\u00f2\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0005\u0002\u001f",
    "\n\u0002\u0003\u0002\u0003\u0002\u0005\u0002#\n\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002*\n\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002>\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0007\u0002L\n\u0002\f\u0002\u000e\u0002O\u000b\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003[\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004k\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005w\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006\u007f\n",
    "\u0006\f\u0006\u000e\u0006\u0082\u000b\u0006\u0005\u0006\u0084\n\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u0090\n",
    "\u0007\f\u0007\u000e\u0007\u0093\u000b\u0007\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u009d\n\b\f\b\u000e",
    "\b\u00a0\u000b\b\u0003\t\u0003\t\u0005\t\u00a4\n\t\u0003\t\u0003\t\u0005",
    "\t\u00a8\n\t\u0003\t\u0003\t\u0005\t\u00ac\n\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0005\t\u00b3\n\t\u0003\t\u0003\t\u0005\t\u00b7\n",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u00c3\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00ce\n\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0007\t\u00d6\n\t\f\t\u000e\t\u00d9\u000b",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00e1\n\n",
    "\u0003\u000b\u0003\u000b\u0005\u000b\u00e5\n\u000b\u0003\f\u0006\f\u00e8",
    "\n\f\r\f\u000e\f\u00e9\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0002\u0006\u0002\f\u000e\u0010\u000f\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002\t\u0003",
    "\u0002\u001d\u001e\u0003\u0002\u0014\u0015\u0003\u0002\u0010\u0011\u0003",
    "\u0002\u0012\u0013\u0003\u0002\u0016\u0017\u0003\u0002\u001b\u001c\u0004",
    "\u0002\u0014\u0019\u001f\u001f\u010e\u0002=\u0003\u0002\u0002\u0002",
    "\u0004Z\u0003\u0002\u0002\u0002\u0006j\u0003\u0002\u0002\u0002\bv\u0003",
    "\u0002\u0002\u0002\nx\u0003\u0002\u0002\u0002\f\u0087\u0003\u0002\u0002",
    "\u0002\u000e\u0094\u0003\u0002\u0002\u0002\u0010\u00cd\u0003\u0002\u0002",
    "\u0002\u0012\u00e0\u0003\u0002\u0002\u0002\u0014\u00e2\u0003\u0002\u0002",
    "\u0002\u0016\u00e7\u0003\u0002\u0002\u0002\u0018\u00eb\u0003\u0002\u0002",
    "\u0002\u001a\u00ef\u0003\u0002\u0002\u0002\u001c\u001e\b\u0002\u0001",
    "\u0002\u001d\u001f\u0007\u001a\u0002\u0002\u001e\u001d\u0003\u0002\u0002",
    "\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002",
    "\u0002 >\t\u0002\u0002\u0002!#\u0007\u001a\u0002\u0002\"!\u0003\u0002",
    "\u0002\u0002\"#\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$%",
    "\u0007\u0003\u0002\u0002%&\u0005\u0002\u0002\u0002&\'\u0007\u0004\u0002",
    "\u0002\'>\u0003\u0002\u0002\u0002(*\u0007\u001a\u0002\u0002)(\u0003",
    "\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002",
    "+>\u0005\n\u0006\u0002,-\u0005\u0010\t\u0002-.\u0005\u0012\n\u0002.",
    "/\u0005\u0010\t\u0002/>\u0003\u0002\u0002\u00020>\u0005\u0004\u0003",
    "\u00021>\u0005\f\u0007\u00022>\u0005\u000e\b\u00023>\u0005\u0006\u0004",
    "\u000245\u0007\u0003\u0002\u000256\t\u0003\u0002\u000267\u0005\u001a",
    "\u000e\u000278\u0007\t\u0002\u000289\u0005\u0002\u0002\u00029:\u0007",
    "\t\u0002\u0002:;\u0005\u0002\u0002\u0002;<\u0007\u0004\u0002\u0002<",
    ">\u0003\u0002\u0002\u0002=\u001c\u0003\u0002\u0002\u0002=\"\u0003\u0002",
    "\u0002\u0002=)\u0003\u0002\u0002\u0002=,\u0003\u0002\u0002\u0002=0\u0003",
    "\u0002\u0002\u0002=1\u0003\u0002\u0002\u0002=2\u0003\u0002\u0002\u0002",
    "=3\u0003\u0002\u0002\u0002=4\u0003\u0002\u0002\u0002>M\u0003\u0002\u0002",
    "\u0002?@\f\u0007\u0002\u0002@A\u0007\u0005\u0002\u0002AL\u0005\u0002",
    "\u0002\bBC\f\u0006\u0002\u0002CD\u0007\u0006\u0002\u0002DL\u0005\u0002",
    "\u0002\u0007EF\f\u0005\u0002\u0002FG\u0007\u0007\u0002\u0002GL\u0005",
    "\u0002\u0002\u0006HI\f\u0004\u0002\u0002IJ\u0007\b\u0002\u0002JL\u0005",
    "\u0002\u0002\u0005K?\u0003\u0002\u0002\u0002KB\u0003\u0002\u0002\u0002",
    "KE\u0003\u0002\u0002\u0002KH\u0003\u0002\u0002\u0002LO\u0003\u0002\u0002",
    "\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002N\u0003\u0003",
    "\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002PQ\u0005\u0010\t\u0002Q",
    "R\u0007\n\u0002\u0002RS\u0005\u0010\t\u0002S[\u0003\u0002\u0002\u0002",
    "TU\u0005\u0010\t\u0002UV\u0007\u000b\u0002\u0002VW\u0005\u0004\u0003",
    "\u0002WX\u0007\u000b\u0002\u0002XY\u0005\u0010\t\u0002Y[\u0003\u0002",
    "\u0002\u0002ZP\u0003\u0002\u0002\u0002ZT\u0003\u0002\u0002\u0002[\u0005",
    "\u0003\u0002\u0002\u0002\\]\u0007\u0019\u0002\u0002]^\u0007\u0003\u0002",
    "\u0002^_\u0005\b\u0005\u0002_`\u0007\u0004\u0002\u0002`k\u0003\u0002",
    "\u0002\u0002ab\u0007\u0019\u0002\u0002bc\u0007\u0003\u0002\u0002cd\u0005",
    "\u0014\u000b\u0002de\u0007\u000b\u0002\u0002ef\u0005\u0014\u000b\u0002",
    "fg\u0007\u000b\u0002\u0002gh\u0005\u0010\t\u0002hi\u0007\u0004\u0002",
    "\u0002ik\u0003\u0002\u0002\u0002j\\\u0003\u0002\u0002\u0002ja\u0003",
    "\u0002\u0002\u0002k\u0007\u0003\u0002\u0002\u0002lm\u0005\u0010\t\u0002",
    "mn\u0007\u000b\u0002\u0002no\u0005\u0010\t\u0002ow\u0003\u0002\u0002",
    "\u0002pq\u0005\u0010\t\u0002qr\u0007\u000b\u0002\u0002rs\u0005\b\u0005",
    "\u0002st\u0007\u000b\u0002\u0002tu\u0005\u0010\t\u0002uw\u0003\u0002",
    "\u0002\u0002vl\u0003\u0002\u0002\u0002vp\u0003\u0002\u0002\u0002w\t",
    "\u0003\u0002\u0002\u0002xy\u0005\u001a\u000e\u0002y\u0083\u0007\u0003",
    "\u0002\u0002z\u0084\u0003\u0002\u0002\u0002{\u0080\u0005\u0010\t\u0002",
    "|}\u0007\u000b\u0002\u0002}\u007f\u0005\u0010\t\u0002~|\u0003\u0002",
    "\u0002\u0002\u007f\u0082\u0003\u0002\u0002\u0002\u0080~\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0084\u0003\u0002",
    "\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083z\u0003\u0002",
    "\u0002\u0002\u0083{\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0007\u0004\u0002\u0002\u0086\u000b\u0003\u0002",
    "\u0002\u0002\u0087\u0088\b\u0007\u0001\u0002\u0088\u0089\u0005\u0010",
    "\t\u0002\u0089\u008a\t\u0004\u0002\u0002\u008a\u008b\u0005\u0010\t\u0002",
    "\u008b\u0091\u0003\u0002\u0002\u0002\u008c\u008d\f\u0003\u0002\u0002",
    "\u008d\u008e\t\u0004\u0002\u0002\u008e\u0090\u0005\u0010\t\u0002\u008f",
    "\u008c\u0003\u0002\u0002\u0002\u0090\u0093\u0003\u0002\u0002\u0002\u0091",
    "\u008f\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092",
    "\r\u0003\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0094",
    "\u0095\b\b\u0001\u0002\u0095\u0096\u0005\u0010\t\u0002\u0096\u0097\t",
    "\u0005\u0002\u0002\u0097\u0098\u0005\u0010\t\u0002\u0098\u009e\u0003",
    "\u0002\u0002\u0002\u0099\u009a\f\u0003\u0002\u0002\u009a\u009b\t\u0005",
    "\u0002\u0002\u009b\u009d\u0005\u0010\t\u0002\u009c\u0099\u0003\u0002",
    "\u0002\u0002\u009d\u00a0\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002",
    "\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u000f\u0003\u0002",
    "\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a1\u00a3\b\t\u0001",
    "\u0002\u00a2\u00a4\u0007\u001b\u0002\u0002\u00a3\u00a2\u0003\u0002\u0002",
    "\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002",
    "\u0002\u00a5\u00ce\u0007 \u0002\u0002\u00a6\u00a8\u0007\u001b\u0002",
    "\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00ce\u0005\u0014\u000b",
    "\u0002\u00aa\u00ac\u0007\u001b\u0002\u0002\u00ab\u00aa\u0003\u0002\u0002",
    "\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002",
    "\u0002\u00ad\u00ae\u0007\u0003\u0002\u0002\u00ae\u00af\u0005\u0010\t",
    "\u0002\u00af\u00b0\u0007\u0004\u0002\u0002\u00b0\u00ce\u0003\u0002\u0002",
    "\u0002\u00b1\u00b3\u0007\u001b\u0002\u0002\u00b2\u00b1\u0003\u0002\u0002",
    "\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002",
    "\u0002\u00b4\u00ce\u0005\n\u0006\u0002\u00b5\u00b7\u0007\u001b\u0002",
    "\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002",
    "\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\u0003\u0002",
    "\u0002\u00b9\u00ba\t\u0006\u0002\u0002\u00ba\u00bb\u0005\u001a\u000e",
    "\u0002\u00bb\u00bc\u0007\t\u0002\u0002\u00bc\u00bd\u0005\u0002\u0002",
    "\u0002\u00bd\u00be\u0007\t\u0002\u0002\u00be\u00bf\u0005\u0010\t\u0002",
    "\u00bf\u00c0\u0007\u0004\u0002\u0002\u00c0\u00ce\u0003\u0002\u0002\u0002",
    "\u00c1\u00c3\u0007\u001b\u0002\u0002\u00c2\u00c1\u0003\u0002\u0002\u0002",
    "\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002",
    "\u00c4\u00c5\u0007\u0003\u0002\u0002\u00c5\u00c6\u0007\u0018\u0002\u0002",
    "\u00c6\u00c7\u0005\u001a\u000e\u0002\u00c7\u00c8\u0007\t\u0002\u0002",
    "\u00c8\u00c9\u0005\u0002\u0002\u0002\u00c9\u00ca\u0007\t\u0002\u0002",
    "\u00ca\u00cb\u0005\u0002\u0002\u0002\u00cb\u00cc\u0007\u0004\u0002\u0002",
    "\u00cc\u00ce\u0003\u0002\u0002\u0002\u00cd\u00a1\u0003\u0002\u0002\u0002",
    "\u00cd\u00a7\u0003\u0002\u0002\u0002\u00cd\u00ab\u0003\u0002\u0002\u0002",
    "\u00cd\u00b2\u0003\u0002\u0002\u0002\u00cd\u00b6\u0003\u0002\u0002\u0002",
    "\u00cd\u00c2\u0003\u0002\u0002\u0002\u00ce\u00d7\u0003\u0002\u0002\u0002",
    "\u00cf\u00d0\f\u0004\u0002\u0002\u00d0\u00d1\u0007\f\u0002\u0002\u00d1",
    "\u00d6\u0005\u0010\t\u0005\u00d2\u00d3\f\u0003\u0002\u0002\u00d3\u00d4",
    "\t\u0007\u0002\u0002\u00d4\u00d6\u0005\u0010\t\u0004\u00d5\u00cf\u0003",
    "\u0002\u0002\u0002\u00d5\u00d2\u0003\u0002\u0002\u0002\u00d6\u00d9\u0003",
    "\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003",
    "\u0002\u0002\u0002\u00d8\u0011\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003",
    "\u0002\u0002\u0002\u00da\u00e1\u0007\u0010\u0002\u0002\u00db\u00e1\u0007",
    "\u0012\u0002\u0002\u00dc\u00e1\u0007\u0011\u0002\u0002\u00dd\u00e1\u0007",
    "\u0013\u0002\u0002\u00de\u00e1\u0007\n\u0002\u0002\u00df\u00e1\u0007",
    "\r\u0002\u0002\u00e0\u00da\u0003\u0002\u0002\u0002\u00e0\u00db\u0003",
    "\u0002\u0002\u0002\u00e0\u00dc\u0003\u0002\u0002\u0002\u00e0\u00dd\u0003",
    "\u0002\u0002\u0002\u00e0\u00de\u0003\u0002\u0002\u0002\u00e0\u00df\u0003",
    "\u0002\u0002\u0002\u00e1\u0013\u0003\u0002\u0002\u0002\u00e2\u00e4\u0005",
    "\u001a\u000e\u0002\u00e3\u00e5\u0005\u0016\f\u0002\u00e4\u00e3\u0003",
    "\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u0015\u0003",
    "\u0002\u0002\u0002\u00e6\u00e8\u0005\u0018\r\u0002\u00e7\u00e6\u0003",
    "\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003",
    "\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea\u0017\u0003",
    "\u0002\u0002\u0002\u00eb\u00ec\u0007\u000e\u0002\u0002\u00ec\u00ed\u0005",
    "\u0010\t\u0002\u00ed\u00ee\u0007\u000f\u0002\u0002\u00ee\u0019\u0003",
    "\u0002\u0002\u0002\u00ef\u00f0\t\b\u0002\u0002\u00f0\u001b\u0003\u0002",
    "\u0002\u0002\u001b\u001e\")=KMZjv\u0080\u0083\u0091\u009e\u00a3\u00a7",
    "\u00ab\u00b2\u00b6\u00c2\u00cd\u00d5\u00d7\u00e0\u00e4\u00e9"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'&&'", "'||'", "'=>'", "'<=>'", 
                     "':'", "'='", "','", "'*'", "'<>'", "'['", "']'", "'<'", 
                     "'<='", "'>'", "'>='", "'A'", "'E'", "'SUM'", "'PROD'", 
                     "'N'", "'perm'", "'~'", "'-'", "'+'", "'T'", "'F'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "LESS", "LESS_EQ", "GREATER", 
                      "GREATER_EQ", "FORALL", "EXISTS", "SUM", "PROD", "NUM", 
                      "PERM", "NEGATION", "MINUS", "PLUS", "TRUE", "FALSE", 
                      "NAME", "INT", "WS" ];

var ruleNames =  [ "predicate", "vector_equality", "perm", "even_var_list", 
                   "shorthand", "ascending_chain_cmp", "descending_chain_cmp", 
                   "int_expr", "comparison_op", "variable", "selectors", 
                   "selector", "name" ];

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
PredicatesParser.FORALL = 18;
PredicatesParser.EXISTS = 19;
PredicatesParser.SUM = 20;
PredicatesParser.PROD = 21;
PredicatesParser.NUM = 22;
PredicatesParser.PERM = 23;
PredicatesParser.NEGATION = 24;
PredicatesParser.MINUS = 25;
PredicatesParser.PLUS = 26;
PredicatesParser.TRUE = 27;
PredicatesParser.FALSE = 28;
PredicatesParser.NAME = 29;
PredicatesParser.INT = 30;
PredicatesParser.WS = 31;

PredicatesParser.RULE_predicate = 0;
PredicatesParser.RULE_vector_equality = 1;
PredicatesParser.RULE_perm = 2;
PredicatesParser.RULE_even_var_list = 3;
PredicatesParser.RULE_shorthand = 4;
PredicatesParser.RULE_ascending_chain_cmp = 5;
PredicatesParser.RULE_descending_chain_cmp = 6;
PredicatesParser.RULE_int_expr = 7;
PredicatesParser.RULE_comparison_op = 8;
PredicatesParser.RULE_variable = 9;
PredicatesParser.RULE_selectors = 10;
PredicatesParser.RULE_selector = 11;
PredicatesParser.RULE_name = 12;

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


function Quantifier_predContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Quantifier_predContext.prototype = Object.create(PredicateContext.prototype);
Quantifier_predContext.prototype.constructor = Quantifier_predContext;

PredicatesParser.Quantifier_predContext = Quantifier_predContext;

Quantifier_predContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

Quantifier_predContext.prototype.predicate = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PredicateContext);
    } else {
        return this.getTypedRuleContext(PredicateContext,i);
    }
};

Quantifier_predContext.prototype.FORALL = function() {
    return this.getToken(PredicatesParser.FORALL, 0);
};

Quantifier_predContext.prototype.EXISTS = function() {
    return this.getToken(PredicatesParser.EXISTS, 0);
};
Quantifier_predContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitQuantifier_pred(this);
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


function Shorthand_predContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Shorthand_predContext.prototype = Object.create(PredicateContext.prototype);
Shorthand_predContext.prototype.constructor = Shorthand_predContext;

PredicatesParser.Shorthand_predContext = Shorthand_predContext;

Shorthand_predContext.prototype.shorthand = function() {
    return this.getTypedRuleContext(ShorthandContext,0);
};

Shorthand_predContext.prototype.NEGATION = function() {
    return this.getToken(PredicatesParser.NEGATION, 0);
};
Shorthand_predContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitShorthand_pred(this);
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
        this.state = 59;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Bool_const_exprContext(this, localctx);
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
            this.state = 32;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.NEGATION) {
                this.state = 31;
                this.match(PredicatesParser.NEGATION);
            }

            this.state = 34;
            this.match(PredicatesParser.T__0);
            this.state = 35;
            this.predicate(0);
            this.state = 36;
            this.match(PredicatesParser.T__1);
            break;

        case 3:
            localctx = new Shorthand_predContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 39;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.NEGATION) {
                this.state = 38;
                this.match(PredicatesParser.NEGATION);
            }

            this.state = 41;
            this.shorthand();
            break;

        case 4:
            localctx = new Comparison_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 42;
            this.int_expr(0);
            this.state = 43;
            this.comparison_op();
            this.state = 44;
            this.int_expr(0);
            break;

        case 5:
            localctx = new Vector_eq_predContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 46;
            this.vector_equality();
            break;

        case 6:
            localctx = new Asc_chain_predContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 47;
            this.ascending_chain_cmp(0);
            break;

        case 7:
            localctx = new Desc_chain_predContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 48;
            this.descending_chain_cmp(0);
            break;

        case 8:
            localctx = new Perm_predContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 49;
            this.perm();
            break;

        case 9:
            localctx = new Quantifier_predContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 50;
            this.match(PredicatesParser.T__0);
            this.state = 51;
            _la = this._input.LA(1);
            if(!(_la===PredicatesParser.FORALL || _la===PredicatesParser.EXISTS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 52;
            this.name();
            this.state = 53;
            this.match(PredicatesParser.T__6);
            this.state = 54;
            this.predicate(0);
            this.state = 55;
            this.match(PredicatesParser.T__6);
            this.state = 56;
            this.predicate(0);
            this.state = 57;
            this.match(PredicatesParser.T__1);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 75;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 73;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new And_exprContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_predicate);
                    this.state = 61;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 62;
                    this.match(PredicatesParser.T__2);
                    this.state = 63;
                    this.predicate(6);
                    break;

                case 2:
                    localctx = new Or_exprContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_predicate);
                    this.state = 64;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 65;
                    this.match(PredicatesParser.T__3);
                    this.state = 66;
                    this.predicate(5);
                    break;

                case 3:
                    localctx = new Implies_exprContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_predicate);
                    this.state = 67;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 68;
                    this.match(PredicatesParser.T__4);
                    this.state = 69;
                    this.predicate(4);
                    break;

                case 4:
                    localctx = new Iff_exprContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_predicate);
                    this.state = 70;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 71;
                    this.match(PredicatesParser.T__5);
                    this.state = 72;
                    this.predicate(3);
                    break;

                } 
            }
            this.state = 77;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
        this.state = 88;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Vector_eq_baseContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 78;
            this.int_expr(0);
            this.state = 79;
            this.match(PredicatesParser.T__7);
            this.state = 80;
            this.int_expr(0);
            break;

        case 2:
            localctx = new Vector_eq_recContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 82;
            this.int_expr(0);
            this.state = 83;
            this.match(PredicatesParser.T__8);
            this.state = 84;
            this.vector_equality();
            this.state = 85;
            this.match(PredicatesParser.T__8);
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

PermContext.prototype.PERM = function() {
    return this.getToken(PredicatesParser.PERM, 0);
};

PermContext.prototype.even_var_list = function() {
    return this.getTypedRuleContext(Even_var_listContext,0);
};

PermContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

PermContext.prototype.int_expr = function() {
    return this.getTypedRuleContext(Int_exprContext,0);
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
        this.state = 104;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 90;
            this.match(PredicatesParser.PERM);
            this.state = 91;
            this.match(PredicatesParser.T__0);
            this.state = 92;
            this.even_var_list();
            this.state = 93;
            this.match(PredicatesParser.T__1);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 95;
            this.match(PredicatesParser.PERM);
            this.state = 96;
            this.match(PredicatesParser.T__0);
            this.state = 97;
            this.variable();
            this.state = 98;
            this.match(PredicatesParser.T__8);
            this.state = 99;
            this.variable();
            this.state = 100;
            this.match(PredicatesParser.T__8);
            this.state = 101;
            this.int_expr(0);
            this.state = 102;
            this.match(PredicatesParser.T__1);
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
        this.state = 116;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Even_var_list_baseContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 106;
            this.int_expr(0);
            this.state = 107;
            this.match(PredicatesParser.T__8);
            this.state = 108;
            this.int_expr(0);
            break;

        case 2:
            localctx = new Even_var_list_recContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 110;
            this.int_expr(0);
            this.state = 111;
            this.match(PredicatesParser.T__8);
            this.state = 112;
            this.even_var_list();
            this.state = 113;
            this.match(PredicatesParser.T__8);
            this.state = 114;
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

function ShorthandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_shorthand;
    return this;
}

ShorthandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShorthandContext.prototype.constructor = ShorthandContext;

ShorthandContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ShorthandContext.prototype.int_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Int_exprContext);
    } else {
        return this.getTypedRuleContext(Int_exprContext,i);
    }
};

ShorthandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitShorthand(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PredicatesParser.ShorthandContext = ShorthandContext;

PredicatesParser.prototype.shorthand = function() {

    var localctx = new ShorthandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, PredicatesParser.RULE_shorthand);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.name();
        this.state = 119;
        this.match(PredicatesParser.T__0);
        this.state = 129;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PredicatesParser.T__1:
            break;
        case PredicatesParser.T__0:
        case PredicatesParser.FORALL:
        case PredicatesParser.EXISTS:
        case PredicatesParser.SUM:
        case PredicatesParser.PROD:
        case PredicatesParser.NUM:
        case PredicatesParser.PERM:
        case PredicatesParser.MINUS:
        case PredicatesParser.NAME:
        case PredicatesParser.INT:
            this.state = 121;
            this.int_expr(0);
            this.state = 126;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PredicatesParser.T__8) {
                this.state = 122;
                this.match(PredicatesParser.T__8);
                this.state = 123;
                this.int_expr(0);
                this.state = 128;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 131;
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
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, PredicatesParser.RULE_ascending_chain_cmp, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new Asc_chain_cmp_baseContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 134;
        this.int_expr(0);
        this.state = 135;
        _la = this._input.LA(1);
        if(!(_la===PredicatesParser.LESS || _la===PredicatesParser.LESS_EQ)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 136;
        this.int_expr(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 143;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Asc_chain_cmp_recContext(this, new Ascending_chain_cmpContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_ascending_chain_cmp);
                this.state = 138;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 139;
                _la = this._input.LA(1);
                if(!(_la===PredicatesParser.LESS || _la===PredicatesParser.LESS_EQ)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 140;
                this.int_expr(0); 
            }
            this.state = 145;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, PredicatesParser.RULE_descending_chain_cmp, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new Desc_chain_cmp_baseContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 147;
        this.int_expr(0);
        this.state = 148;
        _la = this._input.LA(1);
        if(!(_la===PredicatesParser.GREATER || _la===PredicatesParser.GREATER_EQ)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 149;
        this.int_expr(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 156;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Desc_chain_cmp_recContext(this, new Descending_chain_cmpContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_descending_chain_cmp);
                this.state = 151;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 152;
                _la = this._input.LA(1);
                if(!(_la===PredicatesParser.GREATER || _la===PredicatesParser.GREATER_EQ)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 153;
                this.int_expr(0); 
            }
            this.state = 158;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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


function Sum_prod_quantifierContext(parser, ctx) {
	Int_exprContext.call(this, parser);
    Int_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Sum_prod_quantifierContext.prototype = Object.create(Int_exprContext.prototype);
Sum_prod_quantifierContext.prototype.constructor = Sum_prod_quantifierContext;

PredicatesParser.Sum_prod_quantifierContext = Sum_prod_quantifierContext;

Sum_prod_quantifierContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

Sum_prod_quantifierContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};

Sum_prod_quantifierContext.prototype.int_expr = function() {
    return this.getTypedRuleContext(Int_exprContext,0);
};

Sum_prod_quantifierContext.prototype.SUM = function() {
    return this.getToken(PredicatesParser.SUM, 0);
};

Sum_prod_quantifierContext.prototype.PROD = function() {
    return this.getToken(PredicatesParser.PROD, 0);
};

Sum_prod_quantifierContext.prototype.MINUS = function() {
    return this.getToken(PredicatesParser.MINUS, 0);
};
Sum_prod_quantifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitSum_prod_quantifier(this);
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


function Shorthand_exprContext(parser, ctx) {
	Int_exprContext.call(this, parser);
    Int_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Shorthand_exprContext.prototype = Object.create(Int_exprContext.prototype);
Shorthand_exprContext.prototype.constructor = Shorthand_exprContext;

PredicatesParser.Shorthand_exprContext = Shorthand_exprContext;

Shorthand_exprContext.prototype.shorthand = function() {
    return this.getTypedRuleContext(ShorthandContext,0);
};

Shorthand_exprContext.prototype.MINUS = function() {
    return this.getToken(PredicatesParser.MINUS, 0);
};
Shorthand_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitShorthand_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Quantity_quantifierContext(parser, ctx) {
	Int_exprContext.call(this, parser);
    Int_exprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Quantity_quantifierContext.prototype = Object.create(Int_exprContext.prototype);
Quantity_quantifierContext.prototype.constructor = Quantity_quantifierContext;

PredicatesParser.Quantity_quantifierContext = Quantity_quantifierContext;

Quantity_quantifierContext.prototype.NUM = function() {
    return this.getToken(PredicatesParser.NUM, 0);
};

Quantity_quantifierContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

Quantity_quantifierContext.prototype.predicate = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PredicateContext);
    } else {
        return this.getTypedRuleContext(PredicateContext,i);
    }
};

Quantity_quantifierContext.prototype.MINUS = function() {
    return this.getToken(PredicatesParser.MINUS, 0);
};
Quantity_quantifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitQuantity_quantifier(this);
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
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, PredicatesParser.RULE_int_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Int_const_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 161;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.MINUS) {
                this.state = 160;
                this.match(PredicatesParser.MINUS);
            }

            this.state = 163;
            this.match(PredicatesParser.INT);
            break;

        case 2:
            localctx = new Variable_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 165;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.MINUS) {
                this.state = 164;
                this.match(PredicatesParser.MINUS);
            }

            this.state = 167;
            this.variable();
            break;

        case 3:
            localctx = new Paret_int_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 169;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.MINUS) {
                this.state = 168;
                this.match(PredicatesParser.MINUS);
            }

            this.state = 171;
            this.match(PredicatesParser.T__0);
            this.state = 172;
            this.int_expr(0);
            this.state = 173;
            this.match(PredicatesParser.T__1);
            break;

        case 4:
            localctx = new Shorthand_exprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 176;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.MINUS) {
                this.state = 175;
                this.match(PredicatesParser.MINUS);
            }

            this.state = 178;
            this.shorthand();
            break;

        case 5:
            localctx = new Sum_prod_quantifierContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 180;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.MINUS) {
                this.state = 179;
                this.match(PredicatesParser.MINUS);
            }

            this.state = 182;
            this.match(PredicatesParser.T__0);
            this.state = 183;
            _la = this._input.LA(1);
            if(!(_la===PredicatesParser.SUM || _la===PredicatesParser.PROD)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 184;
            this.name();
            this.state = 185;
            this.match(PredicatesParser.T__6);
            this.state = 186;
            this.predicate(0);
            this.state = 187;
            this.match(PredicatesParser.T__6);
            this.state = 188;
            this.int_expr(0);
            this.state = 189;
            this.match(PredicatesParser.T__1);
            break;

        case 6:
            localctx = new Quantity_quantifierContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PredicatesParser.MINUS) {
                this.state = 191;
                this.match(PredicatesParser.MINUS);
            }

            this.state = 194;
            this.match(PredicatesParser.T__0);
            this.state = 195;
            this.match(PredicatesParser.NUM);
            this.state = 196;
            this.name();
            this.state = 197;
            this.match(PredicatesParser.T__6);
            this.state = 198;
            this.predicate(0);
            this.state = 199;
            this.match(PredicatesParser.T__6);
            this.state = 200;
            this.predicate(0);
            this.state = 201;
            this.match(PredicatesParser.T__1);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 213;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 211;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Mult_exprContext(this, new Int_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_int_expr);
                    this.state = 205;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 206;
                    this.match(PredicatesParser.T__9);
                    this.state = 207;
                    this.int_expr(3);
                    break;

                case 2:
                    localctx = new Add_exprContext(this, new Int_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, PredicatesParser.RULE_int_expr);
                    this.state = 208;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 209;
                    _la = this._input.LA(1);
                    if(!(_la===PredicatesParser.MINUS || _la===PredicatesParser.PLUS)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 210;
                    this.int_expr(2);
                    break;

                } 
            }
            this.state = 215;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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
    this.enterRule(localctx, 16, PredicatesParser.RULE_comparison_op);
    try {
        this.state = 222;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PredicatesParser.LESS:
            localctx = new LtContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 216;
            this.match(PredicatesParser.LESS);
            break;
        case PredicatesParser.GREATER:
            localctx = new GtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 217;
            this.match(PredicatesParser.GREATER);
            break;
        case PredicatesParser.LESS_EQ:
            localctx = new LeqContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 218;
            this.match(PredicatesParser.LESS_EQ);
            break;
        case PredicatesParser.GREATER_EQ:
            localctx = new GeqContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 219;
            this.match(PredicatesParser.GREATER_EQ);
            break;
        case PredicatesParser.T__7:
            localctx = new EqContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 220;
            this.match(PredicatesParser.T__7);
            break;
        case PredicatesParser.T__10:
            localctx = new NeqContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 221;
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

VariableContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
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
    this.enterRule(localctx, 18, PredicatesParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.name();
        this.state = 226;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        if(la_===1) {
            this.state = 225;
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
    this.enterRule(localctx, 20, PredicatesParser.RULE_selectors);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 228;
        		this.selector();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 231; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,24, this._ctx);
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
    this.enterRule(localctx, 22, PredicatesParser.RULE_selector);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.match(PredicatesParser.T__11);
        this.state = 234;
        this.int_expr(0);
        this.state = 235;
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

function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PredicatesParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.EXISTS = function() {
    return this.getToken(PredicatesParser.EXISTS, 0);
};

NameContext.prototype.FORALL = function() {
    return this.getToken(PredicatesParser.FORALL, 0);
};

NameContext.prototype.SUM = function() {
    return this.getToken(PredicatesParser.SUM, 0);
};

NameContext.prototype.PROD = function() {
    return this.getToken(PredicatesParser.PROD, 0);
};

NameContext.prototype.NUM = function() {
    return this.getToken(PredicatesParser.NUM, 0);
};

NameContext.prototype.PERM = function() {
    return this.getToken(PredicatesParser.PERM, 0);
};

NameContext.prototype.NAME = function() {
    return this.getToken(PredicatesParser.NAME, 0);
};

NameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PredicatesVisitor ) {
        return visitor.visitName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PredicatesParser.NameContext = NameContext;

PredicatesParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, PredicatesParser.RULE_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PredicatesParser.FORALL) | (1 << PredicatesParser.EXISTS) | (1 << PredicatesParser.SUM) | (1 << PredicatesParser.PROD) | (1 << PredicatesParser.NUM) | (1 << PredicatesParser.PERM) | (1 << PredicatesParser.NAME))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


PredicatesParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 0:
			return this.predicate_sempred(localctx, predIndex);
	case 5:
			return this.ascending_chain_cmp_sempred(localctx, predIndex);
	case 6:
			return this.descending_chain_cmp_sempred(localctx, predIndex);
	case 7:
			return this.int_expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

PredicatesParser.prototype.predicate_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
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
