let a = -1;
const prom = (num) => {
  return new Promise((resolve, reject) => {
    console.log("wait ... . ... ..");

    setTimeout(() => {
      if (num > 0) {
        resolve("true");
      } else {
        reject("false");
      }
    }, 3000);
  });
};

// let onResolve = (result) => {
//   console.log(result);
// };
// let onReject = (error) => {
//   console.log(error);
// };

// prom(a).then(onResolve).catch(onReject);

//OR

prom(a)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
