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

## Negation and Parentheses

There is only one unary operator, boolean negation.
Its representation has similar structure to parentheses representation.

```
{
  type: ('not'|'parets'),
  inner: <predicate>
}
```

Note that we keep parentheses in representation even though they
loose their value with the tree way of struturing an expression.
It will simplify tree-to-expression conversion, in case we ever need one.

## Binary Operators

There are three binary operators:
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
  leftIntExpr: <int_expr>,
  rightIntExpr: <int_expr>
}
```

To read more about integer expressions,
see [program representation docs](./program-representation.md).

## Quantifiers

There are two types of quantifiers: universal (for all)
and existential (exists). A quantifier bounds some of the
variables of the inner predicate and is applied only to those
values of the variables that meet the condition, described by the
condition predicate.

Here are some equivalent notations used in logic, so you can get
a better intuition.

```
 (∀ v1, ... , vn : Q(v1, ... , vn) : P(v1, ... , vn))
= ∀ Q(v1, ... , vn) P(v1, ... , vn)
= ∀ v1, ... , vn [Q(v1, ... , vn) => P(v1, ... , vn)]

 (∃ v1, ... , vn : Q(v1, ... , vn) : P(v1, ... , vn))
= ∃ Q(v1, ... , vn) P(v1, ... , vn)
= ∃ v1, ... , vn [Q(v1, ... , vn) ^ P(v1, ... , vn)]
```

And finally our quantifier representation format looks like this.

```
{
  type: ('exists'|'forall'),
  boundedVars: [<name>, <name>, ...],
  condition: <predicate>,
  inner: <predicate>
}
```

`<name>` refears to the simplest class of variables. To read more about
it see [program representation docs](./program-representation.md).
  