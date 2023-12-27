const users = [
  { firstName: "yash", lastName: "purkar", age: 21 },
  { firstName: "kimshor", lastName: "tumbe", age: 21 },
  { firstName: "rumtik", lastName: "chaure", age: 21 },
];

const fullName = (user) => {
  return `${user.firstName} ${user.lastName}`;
};

console.log(users.map(fullName));
