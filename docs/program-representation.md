
# Arithmetic

This chapter describes all the forms `<int_expr>` could take.

## Values

### Constants

```
{
  type: 'const',
  const: <int>
}
```

### Variables

// TODO: What about map-variables (arrays)

## Lvalues

Whatever it is, map or integer, lvalue has
nothing but a name. Any selectors that were used
in source code `a[i] := x` are moved to the
corresponding rvalue `a := (a; i:x)`.

```
{
  type: 'lval',
  name: <string>
}
```

## Rvalues

```
{
  type: 'rval',
  name: <string>,
  selectors: [<int_expr>, <int_expr>, ...]
}
```

## Unary Operators

There is only one unary operator, negation.
Note that parentheses are not needed, because of
the tree structure of the representation.

```
{
  type: 'negate',
  inner: <int_expr>
}
```

## Binary Operators

There are three inreger binary operations:
- addition,
- subtraction,
- multiplication.

```
{
  type: ('plus'|'minus'|'mult'),
  left: <predicate>,
  right: <predicate>
}
```

