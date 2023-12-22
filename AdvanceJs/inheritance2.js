class employee {
  constructor(name, age, salary) {
    this.empName = name;
    this.empAge = age;
    this.empSalary = salary;
  }

  info() {
    console.log(` employee class
          ${this.empName}
          ${this.empAge}
          ${this.empSalary}
        `);
  }
}

class manager extends employee {
  info() {
    let additionalEx = 1000;
    let travelEx = 3000;

    let total = this.empSalary + additionalEx + travelEx;

    console.log(` manager class
        ${this.empName}
        ${this.empAge}
        ${total}
      `);
  }
}

let mang = new manager("vTrox", 21, 20000);
let emp = new employee("zed", 21, 20000);

mang.info();
emp.info();

//multi level inheritance

class test extends manager {
  constructor() {
    super();
    console.log("test");
  }
}

let testEx = new test();
