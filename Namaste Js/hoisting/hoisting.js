ex();
console.log(a);
console.log(ex);

var a = 10; // ---------> undefined
//let a =10; ---------> error

function ex() {
  console.log("hello");
}

// var ex = () => {
//   // when we use arrow function in execution context in 1st phase :- memmory creation phase it is allocated as undefined

//   //  ---------> hoisting.js:1 Uncaught TypeError: ex is not a function
//   console.log("hello");
// };

// const ex = () => {

//   //  ---------> hoisting.js:1 Uncaught ReferenceError: Cannot access 'ex' before initialization
//   console.log("hello");
// };
