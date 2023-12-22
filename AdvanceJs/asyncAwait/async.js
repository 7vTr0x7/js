const ex = async () => {
  return "hello";
};
// console.log(ex());

ex()
  .then((response) => {
    // console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//await

const test = async () => {
  try {
    //   const data = await fetch("./student.json")
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch(() => {
    //       console.log("error");
    //     });

    // OR
    const data = await fetch("./student.json");

    const response = await data.json();

    return response;

    // Or

    // return (await fetch("./student.json")).json();
  } catch (error) {
    console.log("error", error.message);
  }
};

test().then((result) => {
  console.log(result);
});
