const user3 = {
  firstName: "vTrox",
  lastName: "yt",
};

const user4 = {
  firstName: "ayo",
  lastName: "sup",
};

let fullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

fullName.call(user3);
fullName.call(user4);

// if want to add more details / parameters

let details = function (town, city) {
  console.log(`${this.firstName} ${this.lastName}  ${town} ${city}`);
};

details.call(user3, "parner", "Anagar");
details.call(user4, "parner", "pune");

// apply

// difference between call and apply method is how we pass arguments

details.apply(user3, ["parner", "Anager"]); // in apply we pass an array
