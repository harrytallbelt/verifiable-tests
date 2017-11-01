This folder contains a few scripts, that make life a little easyer for the ones
working on the system. You might find them helpful when adding a new task or
making changes to the old ones. Below, you will find an explanation for every
script's purpose and an example of its usage.

## Test All Tasks

`test.js` is a script, that is useful to run after changing the tasks somehow.
For each task, it verifies a correct program, so they should all pass. The
syntax is
```
node test.js SOLUTION.txt [TASK_0.json ... TASK_N.json]
```
where SOLUTION is a text file that contain the correct programs in format
```
###task_name_1
x, y := y, x
###task_name_2
if x < 0 -> x := -x | x >= 0 -> skip fi
```
The file with the correct solutions is not included in the repo. If you need
it, send a message to @harrytallbelt.

All the invalidated solutions are printed to stdout in this format:
```
; TASKNAME, TASKFILENAME.json
; ------------------------
[ ; Axioms
  AXIOMS ]
; FAILING_PREDICATE_IN_PREDICATE_SYNTAX
FAILING_PREDICATE_IN_SIMPLIFY_SYNTAX
```

You would usually use it like this:
```
node testing-utils/test.js testing-utils/solutions.txt `ls tasks/*.json` > out.txt
```

## Formatting Symplify Code

While debugging tasks we often need to work with predicates in Simplify syntax,
but the system does not generate them nicely formatted. `format-simplify.js`
solves precisely this problem. Given (in stdin) a list of Simpligy predicates,
it parses them and puts back nicely formatted (in stdout). It also combines
nested AND's and OR's so `(AND (AND P1 P2) P3)` becomes `(AND P1 P2 P3)` and
removes comments. The later one is not a good thing, really, but keeping the
comments requires a trickier implementation and, probably, not worth the time
it would take.

Usually you would use the script like this:
```
node format-simplify.js < in.txt > out.txt
```

For a quick example, try this:
```
echo '(IMPLIES (OR P1 (AND (AND P1 P2) P3)) P1)' | node format-simplify.js
(IMPLIES
  (OR P1 (AND P1 P2 P3))
  P1)
```

Have a look at `DEFAULT_INDENT_STR`, `DEFAULT_LINE_ENDING`, and
`DEFAULT_MAX_LENGTH` constants in `format-simplify.js`. By changing them you
can (more or less) adjust the output to your taste.The output above is
generated with indent string `'  '`, line ending `'\n'` and oneliner max length
of 20.

## Parsing Pseudocode, Predicates, and Integer Expressions

To parse a program (see Pseudocode.g4), a predicate or an integer expression
(see Predicates.g4), use these three scripts:
- `parse-pseudocode.js`,
- `parse-predicate.js`,
- `parse-integer-expression.js`.

The scripts expect pseudocode program / predicate / integer expression input to
stdin and pring the appropriate inner representation object (see docs) in JSON
format to stdout. If parsing error occur, nothing is printed to stdout, the
errors are printed to stderr and script finishes its execution with -1 error
code.

Usually you would use it like this:
```
node parse-pseudocode.js < in.txt > out.txt
```

For a quick example, try this:
```
echo 'if T -> skip fi' | node parse-pseudocode.js
```

## Rendering Pseudocode, Predicates, and Integer Expressions

You can also render pseudocode programs / predicates / integer expressions from
the inner representation in JSON format, using:
- `render-pseudocode.js`,
- `render-predicate.js`,
- `render-integer-expression.js`.

Usually you would use it like this:
```
node parse-pseudocode.js < in.txt > out.txt
```

## Formatting Pseudocode, Predicates, and Integer Expressions

You can format pseudocode programs / predicates / integer expressions by
parsing and then rendering them back. For example
```
echo 'do i<>n->s:=s+a[i];i:=i+1 od' | node parse-pseudocode.js | node render-pseudocode.js
do
  i <> n  ->
    s := s + a[i];
    i := i + 1
od
```
