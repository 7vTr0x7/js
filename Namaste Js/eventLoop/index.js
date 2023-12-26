// what is an event loop

// event loop monitors call stack and call back queue
// when code runs callbacks are registered in web browser
// and when interact with callbacks they pushed in call back queue
// and then event loop which is monitoring call back queue push  it in call stack

console.log("start");

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("callback");
});

//when code runs the cb() call back is registered in browser with click event
// when click event triggers then only this callback will move in callback queue
// and then through evenloop it will be moved in call stack
//
//call stack was empty till then bcz entire code was done executing so (GEC) was pop out of call stack
// after executing callback callstack and call back queue is empty

console.log("end");
