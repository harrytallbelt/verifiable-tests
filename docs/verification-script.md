This file provides a step-by-step description of the verification process
(i.e. what happens with the code after it gets sent to the server side).

1. The verification script is invoked with an input of the user's program
   code and the path to the task description file.
2. The task description file is read and all the needed information is
   extracted from it. This information includes:
   - the precondition predicate,
   - the postcondition predicate,
   - the list of loop invariants and boundary functions if loops are needed
     to solve the task,
   - the necessary proover definitions (e.g. the sum or product quantifiers).
3. The predicates are then parsed to form an expression tree in JSON format.
4. The program is also parsed and stored in JSON format, convinient for the
   further transformations. The parsed program also contains the position
   (row and column) of each its statement in original code.
5. After being parsed, the predicates and the program are passed to the wp
   script, that digests them and returns two arrays: the list of all the
   predicates, that need to be prooven to show the original program
   correctness, and the list of the objects, containing the information,
   necessary to form a error messamge should some predicate fail the proof.
   You can reed more about this process in [this document](wp.md).
6. All the predicates are converted to a format, acceptable by the theorem
   proover (S-expressions in case of simplify).
7. The theorem proover is provided with the list of necessary definitions
   and is run on every predicate.
8. For each of the predicates, that the proover has failed to proove,
   the error messamge is formed. The error information objects, returned
   by the wp script, allow us to form a sensible error messamge, that
   says which code construction failed and why.
9. The error messages (if any) are packed together and passed back to
   the user.
