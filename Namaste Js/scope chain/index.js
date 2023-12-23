function a() {
  var b = 10;

  c();
  function c() {
    console.log(b);
  }
}

a();

// when ever execution context is created a lexical enviorment is also created
// lexical enviorment is local memory along with lexical enviorment of its parent

// lexical means in hierarchy or in sequence or in order

// ex - c() is lexically inside a()
// a() is lexical inside global scope
