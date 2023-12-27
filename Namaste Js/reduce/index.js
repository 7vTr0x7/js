// reduce takes all array element  and come up with single value out of them

const arr = [5, 6, 3, 7, 8, 10];

// normal function
const sum = (value) => {
  let sum = 0;
  for (let i of value) {
    sum += i;
  }
  return sum;
};

console.log(sum(arr));

// reduce

const output = arr.reduce((acc, curr) => {
  // reduce takes 2 parameter accumulator and current
  // current is the values of array
  // accumulator is the result we have to get from current value by performing task
  acc += curr;
  return acc;
}, 0); // we can pass initial value to accumulator as second argument of reduce
console.log(output);

// find max

//normal function

const findMax = (arr) => {
  let max = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

console.log(findMax(arr));

// reduce

const maximum = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(maximum);
