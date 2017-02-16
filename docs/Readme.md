This document is intended to give a global overview of the system's
workflow.

The main idea of the system is to teach CS students how formal program
specification looks and feels by giving them one and asking to write
a program that will satisfy it.

Using the web interface, a user can choose a task from the list of
available tasks. After this, the user will see a page, on which they
will be provided with:
- an informal description of the problem;
- the _precondition_ predicate Q;
- the _postcondition_ predicate R;
- in case the task demands the usage of (one or more) loops, the user
  is given a set of _loop invariants_ P and _boundary functions_ t;
- a text area to intput the solution code and a submit button.

By submitting the code the user starts the process of its formal
verification on the server side. After this process is performed,
the user is given the output on the submitted program. The output
either states that the program is correct or that it is not and
provides the locations of the code constructions, that lead to the
proof failure.

To see how the formal verification is implemented step by step,
take a look at [this file](verification-script.md).