const user1 = {
  firstName: "vTrox",
  lastName: "yt",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

user1.fullName();

const user2 = {
  firstName: "ayo",
  lastName: "sup",
};

// if we want to use methods of another object
// we can use it to override the this keyword

// function borrowing
// we can borrow methods of  object and use them with other object

//call

user1.fullName.call(user2); // now value of this is user2

// we can do all this with creating methods in objects

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


