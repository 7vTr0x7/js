// what are anonymous functions in js?
// ans : the function with out a name is anonymous function

// function statement and function declaration  are same thing
function a() {
  console.log("a");
}

//  the difference between function expression and function statement is hoisting
//  hoisting accessing function and variables before creating it
// we can access funtion statement bcz it hoisted as function in memory alloction phase
// but function expression is treated as variable untill it gets assigned that y it will throw  error
// f is not a function

// function expression
let f = function () {
  console.log("f");
};

// anonymous function
// what are anonymous functions in js?
// ans : the function with out a name is anonymous function

// function used as a value
let func = function () {
  console.log("f");
};

// named function expression
let ex = function xyc() {
  // xyc is created as local variable we cannot access it outside but we can access it inside
  console.log(xyc);
};

// difference between parameters and arguments

// parameters are passed in function declaration
// arguments are passed while calling a function

function ex1(num1, num2) {
  //num1 , num2 are parameters
  console.log(num1 + num2);
}

ex1(2, 4); // 2 and 4 are arguments

// what are first class function?
// ans : ability to use functions as values is known as first class funtions 
// and also known as first class citizens
// can be passed as argument to a function
// or return a function from a function

function check(para) {
  return function func2() {
    console.log("func2", para);
    para();
  };
}

function func1() {
  console.log("func1");
}

let example = check(func1);
example();


// arrow functions

