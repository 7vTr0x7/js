// closure is function along with its lexical scope bind together is closure
function x() {
  let a = 20;
  return function y() {
    console.log(a);
  };
  //or
  //   return y;
}

let z = x();
// when funtions are returned from a funtion they still maintain thier lexical scope
// even afer the execution  of " x " even though "x" does not exist in execution context
// returned function still maintains it lexical scope

// when returned y it returned its closure
// closure =  function along with its lexical scope

// // z();
// console.log(z);

// closures means that a function along with its lexical enviorment

//ex

function ex() {
  let z = 9;
  function a() {
    let y = 100;
    function b() {
      console.log(y, z);
    }
    b();
  }
  a();
}

ex();
