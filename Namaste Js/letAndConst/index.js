// let and const decleration are hoisted
// but they are in temporal dead zone for time being

// console.log(a);

let a = 10;
console.log(a);
var b = 100;

// temporal dead zone is time since the let variable is hoisted
// till it is initialized the variable time between is temporal dead zone

// when we try to access varibles from  temporal dead zone it will throw reference error

//before initialization " a "  is temporal dead zone

const c = 100;

// const behaves same as let in hoisting
