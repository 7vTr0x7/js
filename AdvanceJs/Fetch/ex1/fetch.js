// example of get data using fetch

fetch("./text.txt")
  .then((response) => {
    return response.text();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//Or

//   fetch("./text.txt")
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    // console.log(result);
    // for (let value in result) {  // ************* for in
    //   console.log(result[value]);
    // }
    // for (let value of result) {
    //                                // ************* for of
    //   console.log(value);
    // }
  })
  .catch((error) => {
    console.log("error");
  });

fetch("./student.json")
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    for (let value of result) {
      console.log(value);
    }
  })
  .catch((error) => {
    console.log("error");
  });
