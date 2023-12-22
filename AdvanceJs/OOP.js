// types of methods

// contructor

/*

    constructor(){
    console.log("hello");
    }

*/

class student {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  display() {
    console.log(this.name);
    console.log(this.age);
  }
}

let a = new student("vtrox", 19);

a.display();

// prototype

/*

    message(){
    console.log("hello");
    }

*/

class msg {
  message() {
    console.log("hello");
  }
}

let text = new msg();

text.message();

// static

/*

    static name(){
    console.log("hello");
    }

*/

class ex {
  static name() {
    console.log("vTrox");
  }
}

ex.name();
