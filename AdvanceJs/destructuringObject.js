//ex

const obj = {
  myName: "vTrox",
  age: 20,
};

let { myName, age } = obj;
console.log(`${myName} ${age}`); //variable name should be same as property

let { myName: n, age: a } = obj; // can use alias name

console.log(`${n} ${a}`);
