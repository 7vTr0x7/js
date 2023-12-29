// promise.race takes array of promises and run all of them simultaneously
// and will return data from promise
// only promise to settles first will be returned
// if the first promise fails then it will return error
// whatever the case it first promise to resolves or rejects it will return it

// example 1
// first promise to settle will be returned
// whether its resolve of rejected it will be returned

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

Promise.race([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// example 2
// first promise to settle will be returned
// whether its resolve of rejected it will be returned
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

Promise.race([p4, p5, p6, p7])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
