//if there are multiple promises then we can use promise.all()
//if all promises are resolved then() will be called
// and if any one promise fails it will call catch()

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("first");
    resolve(10);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("second");
    resolve(20);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("third");
    resolve(30);
  }, 3000);
});

Promise.all([p1, p2, p3])
  .then((result) => {
    for (let i in result) {
      console.log(` ${result[i]}`); // for in loop
    }

    console.log(...result); // spread op

    const display = (value) => {
      console.log(value);
    };
    result.forEach(display); // forEach
  })
  .catch((error) => {
    console.log(error);
  });
