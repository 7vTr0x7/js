// function which takes another function as an argument
// or returns a function from it is higher order function

let radius = [3, 4, 5, 6];

// repeating code bad way to write a code

const calculateArea = function (arr) {
  let output = [];

  for (let values of arr) {
    output.push(Math.PI * values * values);
  }
  return output;
};

// console.log(calculateArea(radius));

const calculateCircumference = function (arr) {
  let output = [];

  for (let values of arr) {
    output.push(2 * Math.PI * values);
  }
  return output;
};

// console.log(calculateCircumference(arr));

const calculateDiameter = function (arr) {
  let output = [];

  for (let values of arr) {
    output.push(2 * values);
  }
  return output;
};

// console.log(calculateDiameter(arr));

// making above code more optimize

const area = function (arr) {
  return Math.PI * arr * arr;
};

const circumference = function (arr) {
  return 2 * Math.PI * arr;
};

const diameter = function (arr) {
  return 2 * arr;
};
const calculate = function (cb, arr) {
  let output = [];

  for (let values of arr) {
    output.push(cb(values));
  }
  return output;
};

console.log(calculate(area, arr));
console.log(calculate(circumference, arr));
console.log(calculate(diameter, arr));
