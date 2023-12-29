// promise.allSettled takes array of promises and run all of them simultaneously
// and will return an array of returned data from promises
// if any one of the promise fails then promise.allSettled will wait for other promises to settle
// it will return data promises returned in array with error if there is one

// example 1
// all promises resolves and returns array of returned data from promises

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

Promise.allSettled([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// example 2
// one promise fails promise.allSettled wait for other promises to settle and returns array of objects of data and error respectively

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p4 Success");
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
    resolve("p7 success");
  }, 2000);
});

Promise.allSettled([p4, p5, p6, p7])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
