The current article describes the internal system predicate representation
format. Predicates are parsed into simple (plain old) JavaScript objects,
that can be easily be converted to JSON if a need arises.

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

## Unary Operators

There is only one unary operator, which is boolean negation.
Note that parentheses are not needed, because of
the tree structure of the representation.

```
{
  type: 'not',
  inner: <predicate>
}
```

## Binary Operators

There are three binary operators:
- conjunction,
- disjuntion,
- implication.

```
{
  type: ('and'|'or'|'implies'),
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

And finaly our quantifier representation format.

```
{
  type: ('exists'|'forall'),
  boundedVars: [<var>, <var>, ...],
  condition: <predicate>,
  inner: <predicate>
}
```
