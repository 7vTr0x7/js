// symbol data type
// ex - let a = Symbol("hello");
// datatye of "a" is Symbol
//description or identifier of symbol is "hello"

// symbol datatype is unique value

let a = Symbol("hello"); //  -----> unique value

console.log(a);
console.log(typeof a);

console.log(a.description);

let b = Symbol("hello");

if (a === b) {
  // ----> it will return false bcz both a and b are unique values
  console.log(true);
} else {
  console.log(false);
}

let age = Symbol("user_age");

let obj = {
  userName: "vtrox",
  class: "bca",
};

obj[age] = 21;

// console.log(obj);
console.log(obj["userName"]);
console.log(obj[age]);

for (let value in obj) {
  console.log(obj[value]); //  skiped symbol
}

console.log(obj);
console.log(JSON.stringify(obj)); //  skiped symbol
