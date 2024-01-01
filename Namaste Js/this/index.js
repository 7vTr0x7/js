"use strict";

// ** this in global space
// this in global scape refers to global object

console.log(this);

// ** this inside function

/*
  it depends on strict / non-strict mode
   if its strict mode then this will return undefined
   and if its non-strict then it will return window object
*/

function x() {
  console.log(this);
}

/*
   only in non-strict = (this substitution)
   when the value of this keyword is null or undefined this will be replaced with global object
*/

// ** this value depends on how this is called

x(); // when function is called without reference then its undefined

window.x(); //hen function is called with window reference then its window object

// ** this inside object's methods

const obj = {
  a: 10,
  x() {
    console.log(this);
  },
};

obj.x();

/*
value of this in objects method is object "obj"
*/

// ** call ,apply and bind methods (sharing methods)

// value of this can be modified using call ,apply and bind

const student1 = {
  studName: "vtrox",
  getName() {
    console.log(this.studName);
  },
};

student1.getName();

const student2 = {
  studName: "nothing",
};

/*
 if we want to share the getName() method of student1 with student2

  we can achieve this by overriding this keyword
*/

student1.getName.call(student2); // value of this is student2

/*
  we override the this of student1 by passing student2
*/

// ** this inside arrow function

// arrow functions do not have there own "this"

/*
  they take the value of there lexical environment where they enclosed
*/

const obj1 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

obj1.x();

/*

this will be it enclosing lexical context 
enclosing lexical context - out side the lexical environment
were this obj is lexically present inside code
it is present in global space
value of this will be global object 
*/

// ** this inside nested Arrow function

const object1 = {
  a: 10,
  x() {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

object1.x();

/*

this will be it enclosing lexical context 
enclosing lexical context - out side the lexical environment
were this y is lexically present inside code
it is present in object1 space
value of this will be  object 1
*/
