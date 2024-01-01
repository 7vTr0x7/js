const user1 = {
  firstName: "vTrox",
  lastName: "yt",
};

let fullName = function (city, state, country) {
  console.log(`${this.firstName} ${this.lastName} ${city} ${state} ${country}`);
};

let printName = fullName.bind(user1, "Nagar");
printName("maharastra", "india");

//creating a function which should work like bind method

Function.prototype.myBind = function (...args) {
  let obj = this; // this is pointing to fullName()
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printName2 = fullName.myBind(user1, "Nagar");
printName2("maharastra", "india");
