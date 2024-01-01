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

window.x() //hen function is called with window reference then its window object 