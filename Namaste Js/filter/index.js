// filter is used to filter out stuff

let arr = [18, 12, 40, 25, 22, 21, 10, 17, 16, 20];

const check = (age) => {
  return age >= 18 && age <= 25;
};

const odd = (age) => {
  return age % 2 !== 0;
};

const even = (age) => {
  return age % 2 === 0;
};

const divisibleBy3 = (age) => {
  return age % 3 === 0;
};

const data = arr.filter(check);

console.log(data.sort());
console.log(arr.filter(odd));
console.log(arr.filter(even));
console.log(arr.filter(divisibleBy3));
