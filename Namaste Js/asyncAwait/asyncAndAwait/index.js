// async and await are used to handle promises
// await can only be used inside async function
// await is written in front of promise
// await resolves promise

// before async await

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 3000);
});

function getData() {
  p.then((result) => {
    console.log(result); // js engine will not wait for promise to resolve it will move to next line
  });

  console.log("hello");
}

// getData();

// async await

const newProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved value");
  }, 5000);
});

//using async/await

const handlePromise = async () => {
  const val = await newProm; // js engine will wait here until promise resolves then only code will go to next line
  console.log("hello mf");
  console.log(val);
};

// handlePromise();

// if we take same promise twice

// both promise will resolve at same time
const newProm1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved value");
  }, 5000);
});

//using async/await

const handlePromise1 = async () => {
  const val = await newProm1;
  console.log("hello mf");
  console.log(val);

  const val2 = await newProm1;
  console.log("hello mfs");
  console.log(val2);
};

// handlePromise1();

// if we take 2 promises
// js engine will run both of them
// and will be resolved at same time after 5000ms
// even if first promise take 3000ms still function takes 5000ms

//only if order is reverse if  1st promise takes more time than 2nd
// then js engine will wait for it to be resolved

const newProm2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved value");
  }, 5000);
});

const newProm3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved value");
  }, 3000);
});

const handlePromise2 = async () => {
  const val = await newProm2;
  console.log("hello mf");
  console.log(val);

  const val2 = await newProm3;
  console.log("hello mfs");
  console.log(val2);
};

// handlePromise2();

// js will execute code line by line
// when it enters handlePromise2() it will execute code line by line
// when it see await newProm2 is not resolved handlePromise2() will be suspended and moved out of call stack
// 1st newProm2 promise takes 5000ms to resolve after that
// handlePromise2() will again moves in call stack and start executing code line by line where it left last time
// then  it sees newProm5 is already  resolved by that time
// so code is executed immediately

// handlePromise2() will be suspended until promise is resolved
// once promise resolves handlePromise3() move in call stack again

//////////////////////////

// if we change the order of execution
// if 1st promise take less time than 2nd promise then
// 1st promise will be resolved first
// then 2nd promise

const newProm4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved value1");
  }, 10000);
});

const newProm5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved value2");
  }, 20000);
});

const handlePromise3 = async () => {
  console.log("hello");
  const val = await newProm4;
  console.log("hello mf");
  console.log(val);

  const val2 = await newProm5;
  console.log("hello mfs");
  console.log(val2);
};

handlePromise3();

// js will execute code line by line
// when it enters handlePromise3() it will execute code line by line
// when it see await newProm4 is not resolved handlePromise3() will be suspended and moved out of call stack
// 1st newProm4 promise  takes 3000ms to resolve after that
// handlePromise3() will again moves in call stack and start executing code line by line where it left last time
// then again it sees newProm5 is not resolved again  handlePromise3() will be suspended and moved out of call stack
// once newProm5 is resolved handlePromise3() will move in call stack again to execute code

// handlePromise3() will be suspended until promise is resolved
// once promise resolves handlePromise3() move in call stack again
