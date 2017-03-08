This document describes how WP converts a program and its specification
to a set of predicates and context objects, which can be used to construct
a meaningful error message should a predicate fail.

The input of WP is a Hoare triple `{Q}S{R}`, where

 - Q is the precondition predicate,
 - R is the postcondition predicate,
 - S is the program code (represented as a tree),

extended with a list of invariants `P` and a list of boundary functions `t`,
that contain an entity for each loop, used in the program.

## Loops

WP begins with searching for the loops in the given program. Specifically,
it looks for the last loop.

Suppose the program can be represented as

```
S = S_0; DO_1; S_1; DO_2; ... ; S_n-1; DO_n; S_n
  = I; DO_n; S_n
```

where `S_i` contains no loops for `i = 0..n`. 

What we want to do is to prove `{Q} I; DO_n; S_n {R}` using the DO theorem.

Assume `DO_n` looks like this


```
do
  B_1 -> C_1
  ...
  B_m -> C_m
od
```

Together with loop invarian `P_n` and boundary function `t_n` we compose
these triples (and one predicate):

 1. `{Q} I {P_n}`
 2. `{P_n ^ B_i} C_i {P_n}`, for `i = 1..m`
 3. `{P_n ^ ~BB} S_n {R}`
 4. `P_n ^ BB => t > 0`
 5. `{P_n ^ B_i} t_prev := t; C_i {t < t_prev}`, for `i = 1..m`

where `BB` is a shorhand for `B_1 v B_2 v ... v B_m`.

As one can notice, all the generated Hoare triples can be fed to the same
algorithm recursively (removing the last loop invariant and boundary function
and adding to context list a context object that marks the triples as used
to prove `DO_n` on some specific step).
After all the sub-calls are finished, we get a set of lists with predicates and
corresponding context objects. We merge all the predicate and context lists
into two list and return this result wrapped into a result object.

## Branches

If no loops are found in the program tree, WP starts searching for IF
statements. Specifically, it wants the first IF statement.

Suppose the program can be represented like this

```
S = S_0; IF_1; S_1; IF_2; ... ; S_n-1; IF_n; S_n
  = S_0; IF_1; J
```

where `S_i` contains no loops or if statements for `i = 0..n`.

We will proove `{Q} S_0; IF_1; J {R}` using IF theorem.

Assume `IF_1` looks like this

```
if
  B_1 -> C_1
  ...
  B_m -> C_m
fi
```

We can compose these triples

 1. `{Q} S_0 {BB}`
 2. `{Q ^ wp(S_0, B_i)} S_0; C_i; S_1 {R}` for `i = 1..m`

Further, we do the same thing as for loops: WP is used recursively on
each triple and the results are combined. The information about usage in a
specific step of `IF_1` proof is preserved in context obejcts.

## Elementary commands

If WP does not find a loop nor an if statement in the program, then we are
dealing with a sequence of elementary commands.

```
S = S_1; S_2; ... ; S_n
```

where `S_i` is a single elementary command for `i = 1..n`.

To prove this sequence we compose the predicate

```
Q => wp(S, R)
Q => wp(S_0, wp(S_1, ... , wp(S_n, R) ... ))
```

where each of the wp is computed by these rules:

 1. `wp(abort, R) = F`
 2. `wp(skip, R) = R`
 3. `wp("a := e", R) = R[e/a]`, where
   - `a = a_1, a_2, ... , a_m`,
   - `e = e_1, e_2, ... , e_m`,
   - `R[e/a]` is `R` with each free variable `a_i`
     substituted with corresponding expression `e_i`.

## Context propagation

To construct a meaningful error message if a predicate turns out not to be 
a tautology, we store a context object list for each of the output predicates.
The structure of a context object can be seen below.

```
{
  start: { row: <int>, col: <int> }, // the start and the end of 
  end: { row: <int>, col: <int> },   // the statemets being proven
  cause: {
    type: ('seq' | 'if' | 'do'),
    step: <int>,  // step of the theorem proof
    branch: <int> // branch of the if or do statement
  }
}
```

On each recursive call to WP this object is created and added to the start
of `context` field of specification, passed to WP sub-call.

```
{
  precondition: <predicate>,
  postcondition: <predicate>,
  invariants: [<predicate>, ... , <predicate>],
  boundaryFunctions: [<int-expr>, ... , <int-expr>],
  program: <program>,
  context: [<context-obj>, ... , <context-obj>]
}
```

When WP execution comes to the point of constructing a predicate to proove an
elementary command sequence, the last context object is created and added to
the list, and then, after resulting predicate construction, the list becomes
the result's context field. When if and do statements are proven, the results
of sub-proofs are combined into one object, so the final WP result looks like
this.

```
{
  predicates: [<predicate>, ... ],
  contexts: [ [<context-obj>, ... , <context-obj>], ... ]
}
```
