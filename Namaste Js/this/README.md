note - "this" keyword works differently in strict mode and non-strict mode

1. this in global space
   --> this in global space refers to global object

2. this inside function
   --> it depends on strict / non-strict mode
   if its strict mode then this will return undefined
   and if its non-strict then it will return global object

   --> only in non-strict mode - (this substitution)
   when the value of this keyword is null or undefined this will be replaced with global object

3. this value depends on how this is called
   --> x(); - when function is called without reference then its undefined
   window.x() - when function is called with window reference then its window object

4. this inside object's methods
   --> value of this in objects method is object

5. call ,apply and bind methods (sharing methods)
   -->value of this can be modified using call ,apply and bind

   --> if we want to share the getName() method of student1 with student2
   we can achieve this by overriding this keyword
