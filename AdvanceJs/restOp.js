// Rest operator converts remaining arguments in an array

const sum = (name, ...args) => {
  let sum = 0;

  for (let i in args) {
    sum += args[i];
  }

  console.log(`${name} - ${sum}`);
};

sum("hello", 30, 40, 50, 60, 70);

const add = (...args) => {
  let sum = 0;

  for (let i in args) {
    sum += args[i];
    console.log(i);
  }
  console.log(sum);
};

add(20, 30, 40, 50, 60, 70);
