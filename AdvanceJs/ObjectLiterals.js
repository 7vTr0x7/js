//old

let myName = "yo";

let obj = {
  myName: myName,
};

// console.log(obj);

//new

let myName1 = "vTrox";

const obj1 = {
  myName1,
};

// console.log(obj1);

// use varible as property

let n = "name";

const obj2 = {
  [n]: "vTrox",
  course: "bca",
};

const obj3 = {
  ["student" + n]: "vTrox", // can concat string in property
  course: "bca",
  details: function () {
    // old syntax of creating methods in object
    return ` ${this.studentname} ${this.course} `;
  },
};

// console.log(obj2);
// console.log(obj3.details());

// new syntax for creating methods/function in object

let obj4 = {
  user: "vTrox",
  display() {
    console.log(this.user);
  },
};

obj4["display"]();

// return obj
let name1 = "vTrox";
let course = "bca";

const create = (name, course) => {
  return {
    name,
    course,
  };
};

let result = create(name1, course);

console.log(result);
