// normal function
const nor = () => {
  console.log(1);
  console.log(2);
  console.log(3);
};

// nor();

// generator function

function* gen() {
  console.log(1);
  yield "yield 1";
  console.log(2);
  yield "yield 2";
  console.log(3);
  yield "yield 3";
}

let g = gen();
// console.log(g.next().value);
// g.next();
// console.log(g.next());

// for (let value of g) {
//   console.log(value);
// }

function* ex() {
  let num = 100;

  while (true) {
    yield num++;
  }
}

let e = ex();

for (let value of e) {
  if (value > 110) break;
  console.log(value);
}
