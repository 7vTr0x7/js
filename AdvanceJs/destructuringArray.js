//old way asign array elements to variable

let user2 = ["vTr0x", 17];

let myName = user2[0];
let age = user2[1];

// new  way asign array elements to variable

let user1 = ["vTr0x", 20, ["male", 20000]];

let [myName1, age1, [gender, salary]] = user1;
// console.log(myName1, age1, gender, salary);

let ex = [1, 2, 34, 5, 56];
let [...args] = ex;
// console.log(args);

let arr = [55, 77, 56, 75, 45];
// console.log(...arr);

const user = (name, age, salary) => {
  console.log(`${name} ${age} ${salary}`);
};

let arr1 = ["vTrox", 19, 20000];

// user(...arr1);

//ex

const func = ([user, age, salary]) => {
  console.log(`${user} ${age} ${salary}`);
};

func(["vTrox", 19, 20000]);

//ex2

const func1 = () => {
  return ["v", 21, 20000];
};

let [userName, userAge, userSalary] = func1();

console.log(userName, userAge, userSalary);
