import java.util.*;

/* The class, that allows for converting to a string using
 * a passed StringBuilder object. All the program tree
 * classes inherit it.
 */
abstract class StringBuilderAppender {
    public abstract StringBuilder appendToStringBuilder(StringBuilder sb);
    
    @Override
    public String toString() {
        return appendToStringBuilder(new StringBuilder()).toString();
    }
}

/* The root of the final object tree.
 */
class Program extends StringBuilderAppender {
    public List<Statement> statements = new ArrayList<>();

    @Override
    public StringBuilder appendToStringBuilder(StringBuilder sb) {
        sb.append('[');
        for (Statement statement : statements) {
            statement.appendToStringBuilder(sb);
            sb.append(',');
        }
        sb.deleteCharAt(sb.length() - 1).append(']');
        return sb;
    }
}


/* Statements */

abstract class Statement extends StringBuilderAppender {
    public TextRange textRange;

    @Override
    public StringBuilder appendToStringBuilder(StringBuilder sb) {
        sb.append('{');
        
        appendTextRange(sb);
        sb.append(',');
        
        sb.append("\"type\":\"");
        appendType(sb);
        sb.append("\",");

        int initialLength = sb.length();
        appendAdditionalInfo(sb);

        if (initialLength == sb.length()) {
            sb.deleteCharAt(sb.length() - 1); // removes last comma
        }
        
        sb.append('}');

        return sb;
    }

    protected abstract void appendType(StringBuilder sb);
    
    protected void appendAdditionalInfo(StringBuilder sb) {
        
    }

    private void appendTextRange(StringBuilder sb) {
        sb.append("\"start\":");
        appendTextPosition(textRange.start, sb);
        sb.append(",\"end\":");
        appendTextPosition(textRange.end, sb);
    }

    private static void appendTextPosition(TextPosition pos, StringBuilder sb) {
        sb.append("{\"row\":")
          .append(pos.row)
          .append(",\"col\":")
          .append(pos.col)
          .append('}');
    }
}

class AbortStatement extends Statement {
    @Override
    protected void appendType(StringBuilder sb) {
        sb.append("abort");
    }
}

class SkipStatement extends Statement {
    @Override
    protected void appendType(StringBuilder sb) {
        sb.append("skip");
    }
}

class AssignmentStatement extends Statement {
    public List<Variable> lvalues = new ArrayList<>();
    public List<IntegerExpression> rvalues = new ArrayList<>();
    
    @Override
    protected void appendType(StringBuilder sb) {
        sb.append("assignment");
    }

    @Override
    protected void appendAdditionalInfo(StringBuilder sb) {
        sb.append("\"lvalues\":[");
        
        for (Variable lvalue : lvalues) {
            lvalue.appendToStringBuilder(sb);
            sb.append(',');
        }
        
        sb.deleteCharAt(sb.length() - 1)
          .append("],\"rvalues\":[");
        
        for (IntegerExpression rvalue : rvalues) {
            rvalue.appendToStringBuilder(sb);
            sb.append(',');
        }

        sb.deleteCharAt(sb.length() - 1)
          .append("]");
    }
}

abstract class GuardedCommandsContainerStatement extends Statement {
    public List<BooleanExpression> guards = new ArrayList<>();
    public List<List<Statement>> commands = new ArrayList<>();

    @Override
    protected void appendAdditionalInfo(StringBuilder sb) {
        sb.append("\"guards\":[");
        
        for (BooleanExpression guard : guards) {
            guard.appendToStringBuilder(sb);
            sb.append(',');
        }
        
        sb.deleteCharAt(sb.length() - 1)
          .append("],\"commands\":[");
        
        for (List<Statement> statements : commands) {
            sb.append('[');
            for (Statement statement : statements) {
                statement.appendToStringBuilder(sb);
                sb.append(',');
            }
            sb.deleteCharAt(sb.length() - 1).append("],");
        }

        sb.deleteCharAt(sb.length() - 1).append("]");
    }
}

class IfStatement extends GuardedCommandsContainerStatement {
    @Override
    protected void appendType(StringBuilder sb) {
        sb.append("if");
    }
}

class DoStatement extends GuardedCommandsContainerStatement {
    @Override
    protected void appendType(StringBuilder sb) {
        sb.append("do");
    }
}



/* Integer expressions */

abstract class IntegerExpression extends StringBuilderAppender {
    @Override
    public StringBuilder appendToStringBuilder(StringBuilder sb) {
        sb.append("{\"type\":\"");
        appendType(sb);
        sb.append("\",");

        int oldLength = sb.length();
        appendAdditionalInfo(sb);

        if (sb.length() == oldLength) {
            sb.deleteCharAt(sb.length() - 1);
        }

        sb.append('}');

        return sb;
    }

    protected abstract void appendType(StringBuilder sb);

    protected abstract void appendAdditionalInfo(StringBuilder sb);
}

abstract class IntegerNegateblaExpression extends IntegerExpression {
    public boolean isNegated;

    @Override
    protected void appendAdditionalInfo(StringBuilder sb) {
        sb.append("\"negated\":")
          .append(isNegated);
    }
}

class VariableExpression extends IntegerNegateblaExpression {
    public Variable variable;

    @Override
    protected void appendType(StringBuilder sb) {
        sb.append("var");
    }

    @Override
    protected void appendAdditionalInfo(StringBuilder sb) {
        super.appendAdditionalInfo(sb);
        sb.append(",\"var\":");
        variable.appendToStringBuilder(sb);
    }
}

class IntegerConstantExpression extends IntegerNegateblaExpression {
    public String constant;

    @Override
    protected void appendType(StringBuilder sb) {
        sb.append("const");
    }

    @Override
    protected void appendAdditionalInfo(StringBuilder sb) {
        super.appendAdditionalInfo(sb);
        sb.append(",\"const\":")
          .append(constant);
    }
}

class IntegerParethesesExpression extends IntegerNegateblaExpression {
    public IntegerExpression innerExpression;

    @Override
    protected void appendType(StringBuilder sb) {
        sb.append("parets");
    }

    @Override
    protected void appendAdditionalInfo(StringBuilder sb) {
        super.appendAdditionalInfo(sb);
        sb.append(",\"inner\":");
        innerExpression.appendToStringBuilder(sb);
    }
}

enum IntegerOperators {
    PLUS,
    MINUS,
    MULTIPLY
}

class IntegerBinatyOperatorExpression extends IntegerExpression {
    public IntegerExpression leftHandSideExpression, rightHandSideExpression;
    public IntegerOperators operator;
    
    @Override
    protected void appendType(StringBuilder sb) {
        switch (operator) {
            case PLUS:
                sb.append("plus");
                break;

            case MINUS:
                sb.append("minus");
                break;

            case MULTIPLY:
                sb.append("mult");
                break;

            default:
                throw new UnsupportedOperationException();
        }
    }

    @Override
    protected void appendAdditionalInfo(StringBuilder sb) {
        sb.append("\"left\":");
        leftHandSideExpression.appendToStringBuilder(sb);
        sb.append(",\"right\":");
        rightHandSideExpression.appendToStringBuilder(sb);
    }
}


/* Boolean expressions */

abstract class BooleanExpression extends StringBuilderAppender {
    @Override
    public StringBuilder appendToStringBuilder(StringBuilder sb) {
        sb.append("{\"type\":\"");
        appendType(sb);
        sb.append("\",");

        int oldLength = sb.length();
        appendAdditionalInfo(sb);

        if (sb.length() == oldLength) {
            sb.deleteCharAt(sb.length() - 1);
        }

        sb.append('}');
        return sb;
    }

    protected abstract void appendType(StringBuilder sb);
    protected abstract void appendAdditionalInfo(StringBuilder sb);
}

abstract class BooleanNegateblaExpression extends BooleanExpression {
    public boolean isNegated;

    @Override
    protected void appendAdditionalInfo(StringBuilder sb) {
        sb.append("\"negated\":")
          .append(isNegated);
    }
}

class BooleanConstantExpression extends BooleanNegateblaExpression {
    public boolean constant;

    @Override
    protected void appendType(StringBuilder sb) {
        sb.append("\"const\"");
    }

    @Override
    protected void appendAdditionalInfo(StringBuilder sb) {
        super.appendAdditionalInfo(sb);
        sb.append(",\"const\":").append(constant);
    }
}

class BooleanParethesesExpression extends BooleanNegateblaExpression {
    public BooleanExpression innerExpression;
    
    @Override
    protected void appendType(StringBuilder sb) {
        sb.append("\"parets\"");
    }

    @Override
    protected void appendAdditionalInfo(StringBuilder sb) {
        super.appendAdditionalInfo(sb);
        sb.append(",\"inner\":");
        innerExpression.appendToStringBuilder(sb);
    }
}

enum BooleanOperators {
    AND,
    OR
}

class BooleanBinaryOperatorExpression extends BooleanExpression {
    public BooleanExpression leftHandSideExpression, rightHandSideExpression;
    public BooleanOperators operator;
    
    @Override
    protected void appendType(StringBuilder sb) {
        switch (operator) {
            case AND:
                sb.append("and");
                break;

            case OR:
                sb.append("or");
                break;

            default:
                throw new UnsupportedOperationException();
        }
    }

    @Override
    protected void appendAdditionalInfo(StringBuilder sb) {
        sb.append("\"left_bool\":");
        leftHandSideExpression.appendToStringBuilder(sb);
        sb.append(",\"right_bool\":");
        rightHandSideExpression.appendToStringBuilder(sb);
    }
}

enum ComparisonOperators {
    LESS,
    LESS_OR_EQ,
    GREATER,
    GREATER_OR_EQ,
    EQ,
    NOT_EQ
}

class ComparisonExpression extends BooleanExpression {
    public IntegerExpression leftHandSideExpression, rightHandSideExpression;
    public ComparisonOperators operator;

    @Override
    protected void appendType(StringBuilder sb) {
        sb.append("comp");
    }

    @Override
    public void appendAdditionalInfo(StringBuilder sb) {
        sb.append("\"comp\":\"");
        appendOperator(operator, sb);
        sb.append("\",\"left_int\":");
        leftHandSideExpression.appendToStringBuilder(sb);
        sb.append(",\"right_int\":");
        rightHandSideExpression.appendToStringBuilder(sb);
    }

    private static void appendOperator(ComparisonOperators op, StringBuilder sb) {
        switch (op) {
            case LESS:
                sb.append('<');
                break;

            case LESS_OR_EQ:
                sb.append("<=");
                break;

            case GREATER:
                sb.append('>');
                break;

            case GREATER_OR_EQ:
                sb.append(">=");
                break;

            case EQ:
                sb.append("=");
                break;

            case NOT_EQ:
                sb.append("<>");
                break;

            default:
                throw new UnsupportedOperationException();
        }
    }
}


/* Names */

class Variable extends StringBuilderAppender {
    public String name;
    public List<IntegerExpression> selectors = new ArrayList<>();

    @Override
    public StringBuilder appendToStringBuilder(StringBuilder sb) {
        sb.append("{\"name\":\"")
          .append(name)
          .append("\",\"selectors\":[");

        int oldLength = sb.length();

        for (IntegerExpression selector : selectors) {
            selector.appendToStringBuilder(sb);
            sb.append(',');
        }

        if (sb.length() > oldLength) {
           sb.deleteCharAt(sb.length() - 1);  // remove last comma
        }
        
        sb.append("]}");
        return sb;
    }
}


/* Text position info. */

class TextRange {
    public TextPosition start, end;

    public TextRange() {
        this(new TextPosition(), new TextPosition());
    }

    public TextRange(TextPosition start, TextPosition end) {
        this.start = start;
        this.end = end;
    }
}

class TextPosition {
    public int row, col;
    
    public TextPosition() {
        this(0, 0);
    }

    public TextPosition(int row, int col) {
        this.row = row;
        this.col = col;
    }
}