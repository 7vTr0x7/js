// async func always returns promise
// if we return non-promise value from async function it will wrap that value in promise and will return a promise

// return non-promise values
const getData = async () => {
  return "hello";
};

const dataPromise = getData();

dataPromise.then((result) => {
  console.log(result);
});

// return promise
const newProm = new Promise((resolve, reject) => {
  resolve("promise resolved");
});

const getPromise = async () => {
  return newProm;
};

const promiseData = getPromise();
promiseData.then((result) => {
  console.log(result);
});
