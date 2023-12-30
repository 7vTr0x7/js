// async and await are used to handle promises
// await can only be used inside async function
// await is written in front of promise
// await resolves promise

// before async await

const p = new Promise((resolve, reject) => {
  resolve("resolved");
});

function getData() {
  p.then((result) => {
    console.log(result);
  });
}

getData();

// after async await

const newProm = new Promise((resolve, reject) => {
  resolve("resolved value");
});

const handlePromise = async () => {
  const val = await newProm;
  console.log(val);
};

handlePromise();
