let num = [1, 2, 3, 4, 5];

console.log(typeof num[Symbol.iterator]); // function

let itr = num[Symbol.iterator]();

// console.log(itr);
// itr.next();
// itr.next();
// itr.next();
// itr.next();
// console.log(itr.next().value);

let result = itr.next();
while (!result.done) {
  console.log(result.value);
  result = itr.next();
}

let str = "akjhfkjkakjhak;abjkBKJKF";

// let newStr = str[Symbol.iterator]();

// let ex = newStr.next();

// while (!ex.done) {
//   console.log(ex.value);
//   ex = newStr.next();
// }

//OR

for (let value of str) {
  console.log(value);
}
