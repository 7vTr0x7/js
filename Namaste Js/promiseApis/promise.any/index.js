// promise.race takes array of promises and run all of them simultaneously
// and will return data from promise
// it wil wait for the first success/resolves then only it will return data of that promise
// if all of them fails then it will return aggregate error which is array of all errors

// example 1
// first promise to resolve will be returned

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 Success");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 Success");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 Success");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// example 2
// only resolve will be returned
// if all promises fails it will return aggregate error which is array of errors

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p4 fails");
  }, 3000);
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p5 fails");
  }, 1000);
});
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p6 fails");
  }, 2000);
});
const p7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p7 fails");
  }, 2000);
});

Promise.any([p4, p5, p6, p7])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors); // aggregate errors
  });
