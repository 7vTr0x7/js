// inversion of control occurs while using callbacks

// inversion of control is like when you loose the control of code when we are using callbacks

const cart = ["t-shirt", "shoes", "earphone"];

api.createOrder(cart, function () {
  api.payment();
});

/*
we gave this callback function to createOrder api
 function () {
 api.payment();
 }

 now we are expecting createOrder api will create a order and then call our function

 ** this is risky **

 we gave control of our program to createOrder api
 now it is responsibility of createOrder api to call our function

 we are blindly trusting createOrder api
we don't know what happens in createOrder it can call payment function twice 

*/

// when we have a callback function and we pass it in another functions we are giving the control of our function to some other function
