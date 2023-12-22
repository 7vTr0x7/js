// spread operator converts an array into multiple arguments

const sum = (name, course, ...args) => {
  let sum = 0;

  for (let i in args) {
    sum += args[i];
  }
  console.log(`name: ${name} course: ${course} - ${sum} `);
};

// sum("ayo", "bca", 87, 82, 26, 24, 42);

let arr = [55, 77, 56, 75, 45];
console.log(...arr);

// sum("dmn", "ba", ...arr);

let arr1 = [...arr]; // ***************** spread oparator can be use to copy an array
arr.push(80);

// console.log(arr);
// console.log(arr1);

let arr2 = [70, 90];

let final = [...arr, ...arr2]; // ***************** spread oparator can be used to concatinate to array

let final1 = [5, ...arr, ...arr2, 7]; // ***************** can add values

// console.log(final);
// console.log(final1);

// spread operator in object

let obj = {
  name: "yo",
  city: "nagar",
};

let obj2 = {
  age: 21,
};

let obj3 = { ...obj, ...obj2 }; // can merge object using spead op

console.log(obj3);
