const users = [
  { firstName: "yash", lastName: "purkar", age: 21 },
  { firstName: "kimshor", lastName: "tumbe", age: 24 },
  { firstName: "rumtik", lastName: "chaure", age: 35 },
  { firstName: "saurabh", lastName: "chaure", age: 31 },
  { firstName: "rumshi", lastName: "chaure", age: 22 },
  { firstName: "vtrox", lastName: "chaure", age: 23 },
];

const under30 = (user) => {
  return user.age < 30;
};

const getName = (user) => {
  return user.firstName;
};

// chaining map filter reduce
console.log(users.filter(under30).map(getName));

const output = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);
