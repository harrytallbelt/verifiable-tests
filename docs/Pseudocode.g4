grammar Pseudocode;

program : /* nothing */ | statements ;

statements : statement (';' statement)* ;
statement : 'abort'                     # abort
          | 'skip'                      # skip
          | assignment                  # assignment_statement
          | 'if' guarded_commands 'fi'  # if_statement
          | 'do' guarded_commands 'od'  # do_statement
          ;

guarded_commands : guarded_command ('|' guarded_command)* ;
guarded_command : bool_expr '->' statements ;

assignment : variable ':=' int_expr                # scalar_assignment
           | variable ',' assignment ',' int_expr  # vector_assignment
           ;

int_expr : MINUS? INT                        # int_const_expr
         | MINUS? variable                   # variable_expr
         | MINUS? '(' int_expr ')'           # paret_int_expr
         | int_expr '*' int_expr             # mult_expr
         | int_expr (PLUS | MINUS) int_expr  # add_expr
         ;

bool_expr : NEGATION? (TRUE | FALSE)         # bool_const_expr
          | NEGATION? '(' bool_expr ')'      # paret_bool_expr
          | int_expr comparison_op int_expr  # comparison_expr
          | bool_expr '&&' bool_expr         # and_expr
          | bool_expr '||' bool_expr         # or_expr
          ;

comparison_op : '<'  # lt
              | '>'  # gt
              | '<=' # leq
              | '>=' # geq
              | '='  # eq
              | '<>' # neq
              ;

variable : NAME selectors? ;

selectors : selector+ ;
selector : '[' int_expr ']' ;

NEGATION : '~' ;

MINUS : '-' ;
PLUS : '+' ;

TRUE : 'T';
FALSE : 'F';

NAME : [a-zA-Z_] [0-9a-zA-Z_]* ;
INT : '0' | [1-9] [0-9]* ;

WS : [ \t\r\n] + -> skip ;   // Skipping all the whitespaces.
