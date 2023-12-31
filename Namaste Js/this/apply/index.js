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

// details.call(user3, "parner", "Anagar");
// details.call(user4, "parner", "pune");

// bind method

// bind vs call
// bind give us a copy of function to invoke it later

// bind method binds details() with object and returns copy of that method

let printDetails = details.bind(user3, "parner", "Anagar"); // it returns us a function
console.log(printDetails); // function

printDetails();
