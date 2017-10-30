## Generate pseodocode/predicates parser

```
cd app/pseudocode-parser/
antlr4 Pseudocode.g4 -visitor -no-listener -Dlanguage=JavaScript
```
Then have a look at `PseudocodeVisitor.js` and check if it
has any new methods. You'll want to implement those in
`ProgramRepresentationBuilder.js`.

## Play with antlr

1. Describe a new grammar in `grammar-name.g4`.

2. Run `antlr4 grammar-name.g4`.
   This will generate lots of .java files.

3. Run `javac grammar-name*.java`.
   This, of course, will compile all those .java files.

4. To test the results, run `grun grammar top-rule -tree file-name`.
   Here `top-rule` is the main rule of your grammar. Omitting the
   file name will result in reading the grammar expressions from stdin -
   just input some example of your grammar, ending in `^D` (`CTRL + D`).
   The `-tree` option will result in output of s-expression
   representation of your input. Instead, you might use `-gui`
   to get a neat graphic representation, or `-tokens` to get
   a list of tokens.

## Docs & examples

Docs: https://github.com/antlr/antlr4/blob/master/doc/getting-started.md

Examples: https://github.com/antlr/grammars-v4
