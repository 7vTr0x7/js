// the issue with setTimeOut is it can take more time than expected
// ex.
// setTimeout takes a call back function  this function when code runs this function is registered in webapi env
// waiting for timmer to expire when it does it move in callback queue
// problem lies here suppose our code is taking more time to execute than expected
// like 10 sec so event loop will wait until the code executed and call stack is empty then only callback will run
// even if the setTimeOuts time is expired before the execution

// this is called conqurrency model

console.log("start");

setTimeout(function cb() {
  console.log("hii");
}, 5000);

console.log("end");

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("2 end");
