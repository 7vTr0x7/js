// map function is used to transform an array
// transformation = to each and every value of array and create new array

let arr = [5, 1, 3, 2, 6];

// double
const double = (value) => {
  return value * 2;
};

// triple

const triple = (value) => {
  return value * 3;
};

// binary

const binary = (value) => {
  return value.toString(2);
};

console.log(arr.map(double));
console.log(arr.map(triple));
console.log(arr.map(binary));
