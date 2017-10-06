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

On the other hand, there are two cases of rvalues. They can be either

```
{
  type: 'int',
  inner: <int_expr>
}
```

if we want to assign an integer value, or

```
{
  type: 'map',
  inner: <var>
}
```

if we want to assign a map value.

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
- quantifiers.

This leaves us with:
- boolean constants,
- negation,
- conjunction/disjunction,
- comparisons.

Tou can read about those in [predicate format describtion](./predicate-representation.md).


## Integer Expressions

There are several types of integer expressions.

### Constants

```
{
  type: 'const',
  const: <int>
}
```

### Variable Expressions

```
{
  type: 'var',
  var: (<name>|<select>)
}
```

Note that `<store>` variable will not appear in
integer expression, as its value is allways a map.

### Negation

There is only one unary operator, integer negation.

```
{
  type: 'negate',
  inner: <int_expr>
}
```

### Binary Operators

There are three inreger binary operations:
- addition,
- subtraction,
- multiplication.

```
{
  type: ('plus'|'minus'|'mult'),
  left: <int_expr>,
  right: <int_expr>
}
```

## Variables

We support arrays via the theory of maps, i.e. each array
is represented by a map `index -> value`. This way each assignment
to an array element is converted to an assignment of a new map
to the array variable.

```
a[i] := x   <===>   a := (a; i:x)

where (a; i:x)[i] = x
      (a; i:x)[j] = a[j],  i ≠ j
```

Because of that, variables come in three different types:
- name-variable,
- store-variable,
- select-variable.

### Names

Name-variables are the simplest case of a variable.
Note that only this class of variables can take place
of an lvalue of an assignment operation.

```
{
  type: 'name',
  name: <string>
}
```

### Select

Select-variables represent access by index `a[i]`.

```
{
  type: 'select',
  base: <var>,
  selector: <int_expr>
}
```

### Store

Store-variables represent a map, changed in one place `(a: i:x)`.

```
{
  type: 'store',
  base: <var>,
  selector: <int_expr>,
  value: (<store> | <int_expr>)
}
```
