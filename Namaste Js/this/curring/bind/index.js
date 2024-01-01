let multi = function (x, y) {
  console.log(x * y);
};

let multipleByTwo = multi.bind(this, 2);
multipleByTwo(4);

let multipleByThree = multi.bind(this, 3);
multipleByThree(4);
