// what is an event loop

// event loop monitors call stack and call back queue
// when code runs callbacks are registered in web api enviorment
// and when interact with callbacks they pushed in call back queue
// event loop checks if call stack is empty or not
// and then event loop which is monitoring call back queue push  it in call stack

console.log("start");

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("callback");
});

//when code runs the cb() call back is registered in web api enviorment with click event
// when click event triggers then only this callback will move in callback queue
// and then through evenloop it will be moved in call stack
//
//call stack was empty till then bcz entire code was done executing so (GEC) was pop out of call stack
// after executing callback callstack and call back queue is empty

// callback queue is exists to maintain callbacks in order and then move the cb to be moved by eventloop to call stack

console.log("end");

setTimeout(function cb() {
  console.log("callback");
}, 5000);

// same thing happens with setTimeOut it registers callback in web api enviorment
// with timmer attached to it when timmer expires callback moves in callback queue and then callstack

// fetch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    for (let value of result) {
      console.log(value.name);
    }
  })
  .catch((error) => {
    console.log("error");
  });

// now we have 2 call backs  setTimeout and fetch both are registered in webapi enviorment
// now which will be executed first
// for this here comes

// micro task queue
// micro task queue is similar as call back queue but
// micro task queue have higher "priority"
// what comes in this queue will be executed first then the callback queue

// all call back function which comes through  promises mutation observer will go in this queue


// micro task queue has more priority bcz of this if there are many task in micro task queue
// which are creating more of it tasks then c
// call back queues task will never execute or will take lot of time

// this is called starvation of task in callback queue