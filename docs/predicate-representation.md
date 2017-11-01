The current document describes the internal application predicate representation
format. Predicates are parsed into simple (plain old) JavaScript objects,
that, if needed, can easily be converted to JSON.

The described format is compatible with
[program-representation format](./program-representation.md) in a sense
that every boolean expression used in a program representation is a valid
predicate in the described format. This is also true for integer expressions,
as they can appear in a predicate.

## Predicates

A predicate can take different forms, all of which are described below.

### Constants

```
{
  type: 'const',
  const: <bool>
}
```

### Negation

There is only one unary operator, boolean negation.

```
{
  type: 'not',
  inner: <predicate>
}
```

### Binary Operators

There are four binary operators:
- conjunction,
- disjuntion,
- implication,
- equivalention (iff, if and only if).

```
{
  type: ('and'|'or'|'implies'|'iff'),
  left: <predicate>,
  right: <predicate>
}
```

### Comparisons

Comparisons state one of six relations:
- less then,
- greater then,
- less or equal to,
- greater or equal to,
- equal to,
- not equal to.

```
{
  type: 'comp',
  op: ('<'|'>'|'<='|'>='|'='|'<>'),
  left: <int_expr>,
  right: <int_expr>
}
```

### Shorthand Call

Predicate shorthand is a parametrised predicate definition,
used to shorten the predicate it is used in.

```
{
  type: 'call',
  name: <string>,
  args: [ (<store> | <int_expr>), ... , (<store> | <int_expr>) ]
}
```

### Quantifiers

There are two types of quantifiers: universal (for all)
and existential (exists). A quantifier binds a variable
of the inner predicate and is applied only to those
values of the variable that meet the condition, described by the
condition predicate.

Here are some equivalent notations used in logic, so you can get
a better intuition:

```
 (∀ x : Q(x) : P(x))
= ∀ Q(x) P(x)
= ∀ x [Q(x) => P(x)]

 (∃ x : Q(x) : P(x))
= ∃ Q(x) P(x)
= ∃ x [Q(x) ^ P(x)]
```

And, finally, our quantifier representation format looks like this:

```
{
  type: ('exists'|'forall'),
  boundVar: <name>,
  condition: <predicate>,
  inner: <predicate>
}
```

`<name>` refears to the simplest class of variables. To read more about
it see [program representation docs](./program-representation.md).

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
  var: (<name> | <select>)
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

### Shorthand Call

Integer expression shorthand is a parametrised integer expression
definition, used to shorten the expression it is used it.

```
{
  type: 'call',
  name: <string>,
  args: [ (<store> | <int_expr>), ... , (<store> | <int_expr>) ]
}
```

### SUM and PROD Quantifiers

These quantifier are used to represent expressions like
sum or product of all array elements:
`(SUM/PROD k : 0 <= k < n : a[k])`.

```
{
  type: 'sum'|'prod',
  boundVar: <name>,
  condition: <predicate>
  inner: <int_expr>
}
```

### Quantity Quantifier

This quantifier is used to represent expressions like
the amount of array elements, that are less than 5:
`(N k : 0 <= k < n : a[k] < 5)`.

```
{
  type: 'sum'|'prod',
  boundVar: <name>,
  condition: <predicate>
  inner: <predicate>
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
