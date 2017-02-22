import java.io.IOException;
import org.antlr.v4.runtime.tree.*;
import org.antlr.v4.runtime.*;

public class Main {
    public static void main(String[] args) {
        try {
            ANTLRFileStream fileReader = new ANTLRFileStream(args[0]);

            PseudocodeLexer lexer = new PseudocodeLexer(fileReader);
            CommonTokenStream tokenStream = new CommonTokenStream(lexer);
            PseudocodeParser parser = new PseudocodeParser(tokenStream);
            ParserRuleContext tree = parser.program();

            ProgramDtoBuilder builder = new ProgramDtoBuilder();
            Program program = builder.buildProgramDto(tree);
            String convertedProgram = program.toString();
            
            System.out.println(convertedProgram);
        }
        catch (IOException e) {
            System.err.println("Bad file: " + args[0]);
        }
    }
}