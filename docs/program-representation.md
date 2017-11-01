This document describes the internal application program representation
format. Pseudocode programs are parsed into simple (plain old) JavaScript
objects, that, if needed, can easily be converted to JSON.

The described format is compatible with
[predicate representation format](./predicate-representation.md) in a sense
that every boolean expression used in a program representation is a valid
predicate in the described format. This is also true for integer expressions,
as they can appear in a predicate.

You can find the ANTLR4 grammar of the language we use [here](./Pseudocode.g4).

## Program

The root object of a program representation simply looks like this.

```
{
  statements: [<statement>, ... , <statement>]
}
```

So, a program is a (possibly empty) list of statements.

## Statement

There are several types of statements in our language. Nevertheless, all types
of statements have some common fields.

```
{
  type: ('abort'|'skip'|'assign'|'if'|'do'),
  textRange: {
    start: { row: <int>, col: <int> },
    end: { row: <int>, col: <int>  }
  }
  ...
}
```

Text range field is used to remember the statement's original position in the
program source code.

### Skip and Abort

Skip and abort are simple statements, whose representation contains no fields,
except for the common statement fields described above.

### Assignment

Assignment statement representation contains two lists:
- a list of lvalues, the variables that will change their value,
- a list of rvalues, the values being assigned to the variables.

```
{
  type: 'assign',
  textRange: {...},
  lvalues: [<name>, ... , <name>],
  rvalues: [<rvalue>, ... , <rvalue>]
}
```

Lvalues can only be represented via the name variables (see below).
On the other hand, rvalues can be either `<int_expr>` or store `<var>`.

### If and Do

If and Do statement representations have similar structure.
Each contain two lists:
- a list of guards, the predicates acting like a branch condition,
- a list of commands, where each "command" is a nonempty list of statements.

```
{
  type: ('if'|'do'),
  textRange: {...},
  guards: [<bool_expr>, ... , <bool_expr>],
  commands: [ [<statement>, ... , <statement>], ... , [<statement>, ... , <statement>] ]
}
```

## Boolean Expressions

A boolean expression is a more restricted form of a predicate.
Concretely, it cannot contain
- implications,
- equivalentions,
- quantifiers,
- shorthand calls.

This leaves us with:
- boolean constants,
- boolean negation,
- conjunction/disjunction,
- comparisons.

You can read about those in [predicate format describtion](./predicate-representation.md).


## Integer Expressions

An integer expression in pseudocode is a more restricted form
of an integer expression in predicate.
Concretely, it cannot contain
- quantifiers,
- shorthand calls.

Which leaves us with:
- integer constants,
- integer negation,
- variable expressions
- +, -, *.

You can read about those in [predicate format describtion](./predicate-representation.md).

## Variable

A variable in pseudocode is the same as in predicate.
You can read about those in [predicate format describtion](./predicate-representation.md).
