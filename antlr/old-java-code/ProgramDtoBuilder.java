import java.util.*;
import org.antlr.v4.runtime.*;

public class ProgramDtoBuilder extends PseudocodeBaseVisitor<Object> {

    public Program buildProgramDto(ParserRuleContext programContext) {
        if (programContext instanceof PseudocodeParser.ProgramContext) {
            return visitProgram((PseudocodeParser.ProgramContext)programContext);
        }
        return null;
    }

    @Override
    public Program visitProgram(PseudocodeParser.ProgramContext ctx) {
        Program program = new Program();

        if (ctx.statements() != null) {
            program.statements = (List<Statement>)visit(ctx.statements());
        }

        return program;
    }
    
    @Override
    public List<Statement> visitStatements(PseudocodeParser.StatementsContext ctx) {
        List<Statement> statements = new ArrayList<>();

        for (PseudocodeParser.StatementContext statementContext : ctx.statement()) {
            Statement statement = (Statement)visit(statementContext);
            statement.textRange = getTextRange(statementContext);
            statements.add(statement);
        }

        return statements;
    }

    private TextRange getTextRange(ParserRuleContext ctx) {
        Token start = ctx.getStart();
        int startRow = start.getLine();
        int startCol = start.getCharPositionInLine();

        Token end = ctx.getStop();
        int endRow = end.getLine();
        int endCol = end.getCharPositionInLine() + end.getText().length();

        TextPosition startPosition = new TextPosition(startRow, startCol);
        TextPosition endPosition = new TextPosition(endRow, endCol);
        
        return new TextRange(startPosition, endPosition);
    }

    @Override
    public AbortStatement visitAbort(PseudocodeParser.AbortContext ctx) {
        return new AbortStatement();
    }

    @Override
    public SkipStatement visitSkip(PseudocodeParser.SkipContext ctx) {
        return new SkipStatement();
    }

    @Override
    public AssignmentStatement visitAssignment_statement(PseudocodeParser.Assignment_statementContext ctx) {
        return (AssignmentStatement)visit(ctx.assignment());
    }

    @Override
    public AssignmentStatement visitScalar_assignment(PseudocodeParser.Scalar_assignmentContext ctx) {
        AssignmentStatement assignment = new AssignmentStatement();
        assignment.lvalues.add((Variable)visit(ctx.var()));
        assignment.rvalues.add((IntegerExpression)visit(ctx.int_expr()));
        
        return assignment;
    }

    @Override
    public AssignmentStatement visitVector_assignment(PseudocodeParser.Vector_assignmentContext ctx) {
        AssignmentStatement assignment = (AssignmentStatement)visit(ctx.assignment());
        assignment.lvalues.add(0, (Variable)visit(ctx.var()));
        assignment.rvalues.add((IntegerExpression)visit(ctx.int_expr()));

        return assignment;
    }

    @Override
    public IfStatement visitIf_statement(PseudocodeParser.If_statementContext ctx) {
        IfStatement ifStatement = new IfStatement();
        addGuardedCommandsToContainer(ifStatement, ctx.guarded_commands());
        return ifStatement;
    }

    @Override
    public DoStatement visitDo_statement(PseudocodeParser.Do_statementContext ctx) {
        DoStatement doStatement = new DoStatement();
        addGuardedCommandsToContainer(doStatement, ctx.guarded_commands());
        return doStatement;
    }

    private void addGuardedCommandsToContainer(
        GuardedCommandsContainerStatement container,
        PseudocodeParser.Guarded_commandsContext ctx)
    {
        for (PseudocodeParser.Guarded_commandContext guardedCommand : ctx.guarded_command()) {
            container.guards.add((BooleanExpression)visit(guardedCommand.bool_expr()));
            container.commands.add((List<Statement>)visit(guardedCommand.statements()));
        }
    }

    @Override
    public IntegerParethesesExpression visitParet_int_expr(PseudocodeParser.Paret_int_exprContext ctx) {
        IntegerParethesesExpression expression = new IntegerParethesesExpression();
        expression.isNegated = ctx.MINUS() != null;
        expression.innerExpression = (IntegerExpression)visit(ctx.int_expr());

        return expression;
    }

    @Override
    public VariableExpression visitVariable_expr(PseudocodeParser.Variable_exprContext ctx) {
        VariableExpression expression = new VariableExpression();
        expression.isNegated = ctx.MINUS() != null;
        expression.variable = (Variable)visit(ctx.var());

        return expression;
    }

    @Override
    public IntegerConstantExpression visitInt_const_expr(PseudocodeParser.Int_const_exprContext ctx) {
        IntegerConstantExpression expression = new IntegerConstantExpression();
        expression.isNegated = ctx.MINUS() != null;
        expression.constant = ctx.INT().getText();

        return expression;
    }

    @Override
    public IntegerBinatyOperatorExpression visitAdd_expr(PseudocodeParser.Add_exprContext ctx) {
        IntegerBinatyOperatorExpression expression = new IntegerBinatyOperatorExpression();
        expression.leftHandSideExpression = (IntegerExpression)visit(ctx.int_expr(0));
        expression.rightHandSideExpression = (IntegerExpression)visit(ctx.int_expr(1));
        expression.operator = ctx.PLUS() != null ? IntegerOperators.PLUS : IntegerOperators.MINUS;
        
        return expression;
    }

    @Override
    public IntegerBinatyOperatorExpression visitMult_expr(PseudocodeParser.Mult_exprContext ctx) {
        IntegerBinatyOperatorExpression expression = new IntegerBinatyOperatorExpression();
        expression.leftHandSideExpression = (IntegerExpression)visit(ctx.int_expr(0));
        expression.rightHandSideExpression = (IntegerExpression)visit(ctx.int_expr(1));
        expression.operator = IntegerOperators.MULTIPLY;
        
        return expression;
    }

    @Override
    public BooleanConstantExpression visitBool_const_expr(PseudocodeParser.Bool_const_exprContext ctx) {
        BooleanConstantExpression expression = new BooleanConstantExpression();
        expression.isNegated = ctx.NEGATION() != null;
        expression.constant = ctx.TRUE() != null ? true : false;

        return expression;
    }

    @Override
    public BooleanBinaryOperatorExpression visitAnd_expr(PseudocodeParser.And_exprContext ctx) {
        BooleanBinaryOperatorExpression expression = new BooleanBinaryOperatorExpression();
        expression.leftHandSideExpression = (BooleanExpression)visit(ctx.bool_expr(0));
        expression.rightHandSideExpression = (BooleanExpression)visit(ctx.bool_expr(1));
        expression.operator = BooleanOperators.AND;

        return expression;
    }

    @Override
    public BooleanParethesesExpression visitParet_bool_expr(PseudocodeParser.Paret_bool_exprContext ctx) {
        BooleanParethesesExpression expression = new BooleanParethesesExpression();
        expression.isNegated = ctx.NEGATION() != null;
        expression.innerExpression = (BooleanExpression)visit(ctx.bool_expr());

        return expression;
    }

    @Override
    public BooleanBinaryOperatorExpression visitOr_expr(PseudocodeParser.Or_exprContext ctx) {
        BooleanBinaryOperatorExpression expression = new BooleanBinaryOperatorExpression();
        expression.leftHandSideExpression = (BooleanExpression)visit(ctx.bool_expr(0));
        expression.rightHandSideExpression = (BooleanExpression)visit(ctx.bool_expr(1));
        expression.operator = BooleanOperators.OR;

        return expression;
    }

    @Override
    public ComparisonExpression visitComparison_expr(PseudocodeParser.Comparison_exprContext ctx) {
        ComparisonExpression expression = new ComparisonExpression();
        expression.leftHandSideExpression = (IntegerExpression)visit(ctx.int_expr(0));
        expression.rightHandSideExpression = (IntegerExpression)visit(ctx.int_expr(1));
        expression.operator = (ComparisonOperators)visit(ctx.comparison_op());
        
        return expression;
    }

    @Override
    public ComparisonOperators visitLt(PseudocodeParser.LtContext ctx) {
        return ComparisonOperators.LESS;
    }

    @Override
    public ComparisonOperators visitGt(PseudocodeParser.GtContext ctx) {
        return ComparisonOperators.GREATER;
    }

    @Override
    public ComparisonOperators visitLeq(PseudocodeParser.LeqContext ctx) {
        return ComparisonOperators.LESS_OR_EQ;
    }

    @Override
    public ComparisonOperators visitGeq(PseudocodeParser.GeqContext ctx) {
        return ComparisonOperators.GREATER_OR_EQ;
    }

    @Override
    public ComparisonOperators visitEq(PseudocodeParser.EqContext ctx) {
        return ComparisonOperators.EQ;
    }

    @Override
    public ComparisonOperators visitNeq(PseudocodeParser.NeqContext ctx) {
        return ComparisonOperators.NOT_EQ;
    }

    @Override
    public Variable visitVar(PseudocodeParser.VarContext ctx) {
        Variable variable = new Variable();
        variable.name = ctx.NAME().getText();

        if (ctx.selectors() != null) {        
            variable.selectors = (List<IntegerExpression>)visit(ctx.selectors());
        }
        
        return variable;
    }

    @Override
    public List<IntegerExpression> visitSelectors(PseudocodeParser.SelectorsContext ctx) {
        List<IntegerExpression> selectors = new ArrayList<>();

        for (PseudocodeParser.SelectorContext selectorCtx : ctx.selector()) {
            selectors.add((IntegerExpression)visit(selectorCtx));
        }

        return selectors;
    }

    @Override
    public IntegerExpression visitSelector(PseudocodeParser.SelectorContext ctx) {
        return (IntegerExpression)visit(ctx.int_expr());
    }
}
