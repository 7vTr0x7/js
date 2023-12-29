// promise.all takes  array of promises and run all of them simultaneously
// and will return an array of returned data from promises
// if any one of the promise fails then then promise.all wil return same error
// promise.all will get rejected if any promise fails
// and it will not wait for other promises if any on eof promise fails promise.all will shut down

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

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// example 2
// one promise fails promise.all shuts down and returns an error after particular time

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
    resolve("p6 Success");
  }, 2000);
});

Promise.all([p4, p5, p6])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
