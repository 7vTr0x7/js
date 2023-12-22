// example of insert , update ,delete
// insert - post
// update - put
//delete - delete

let obj = {
  title: "header",
  body: "body",
  userId: 1,
};

// ************* post

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(obj),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// ****************** put

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "vtROX",
    body: "yoii",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// **************** delete
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});

document.getElementById("save").addEventListener("click", function (e) {
  e.preventDefault();

  console.log("obj format");
  let newObj = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
    userId: document.getElementById("user").value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});

document.getElementById("data").addEventListener("click", function (e) {
  e.preventDefault();

  console.log("form format");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: new FormData(document.getElementById("myForm")),
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
