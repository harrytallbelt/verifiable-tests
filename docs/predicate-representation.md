The current document describes the internal application predicate representation
format. Predicates are parsed into simple (plain old) JavaScript objects,
that, if needed, can easily be converted to JSON.

The described format is compatible with
[program-representation format](./program-representation.md) in a sense
that every boolean expression used in a program representation is a valid
predicate in the described format. This is also true for integer expressions,
as they can appear in a predicate.

A predicate can take different forms, all of which are described below.

## Constants

```
{
  type: 'const',
  const: <bool>
}
```

## Negation

There is only one unary operator, boolean negation.

```
{
  type: 'not',
  inner: <predicate>
}
```

## Binary Operators

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

## Comparisons

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

To read more about integer expressions,
see [program representation docs](./program-representation.md).

## Shorthand Call

Predicate shorthand is a parametrised predicate definition,
used to shorten the predicate it is used in.

```
{
  type: 'call',
  name: <string>,
  args: [ (<store> | <int_expr>), ... , (<store> | <int_expr>) ]
}
```

## Array Permutation Predicate

States that two arrays (arr1[0:n-1] and arr2[0:n-1]) contain
all the same elements, but, possibly, in a different order.

```
{
  type: 'perm',
  arr1: <var>,
  arr2: <var>,
  n: <int_expr>
}
```

## Quantifiers

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
