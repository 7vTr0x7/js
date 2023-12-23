var a = 100;

{
  var a = 10;

  console.log(a);
}

console.log(a);

// output : 10
//          10

// var is stored in global scope
// bcz of shadowing it asign same value to variable

// but it is different for let

let b = 100;

{
  let b = 10;
  console.log(b);
}

console.log(b);

// let have a block scope
