// what is the callback function in js?
// ans : funtions that are passed in a function as arguments known as callback function

setTimeout(() => {
  console.log("hallo");
}, 5000);

function x(func) {
  console.log("x");
  func();
}

x(function y() {
  console.log("y");
});
