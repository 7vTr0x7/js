let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

multiply(2)(5);

// or

let multipleByTwo = multiply(2);
multipleByTwo(5);
