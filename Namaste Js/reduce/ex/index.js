const users = [
  { firstName: "yash", lastName: "purkar", age: 21 },
  { firstName: "kimshor", lastName: "tumbe", age: 24 },
  { firstName: "rumtik", lastName: "chaure", age: 25 },
  { firstName: "rumtik", lastName: "chaure", age: 21 },
];

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output);
