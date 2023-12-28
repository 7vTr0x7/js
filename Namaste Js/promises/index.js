// before promises

const cart = ["t-shirt", "shoes", "earphone"];

createOrder(cart, function (orderId) {
  payment(orderId);
});

// in above example there are chances of facing issues regarding inversion of control or callback hell

// handle this situation using promises

// rather than passing callbacks in function we will use promises

const promise = createOrder(cart);

//now this createOrder will return us a promise
// promise is an object with data
// ith will take time to get us the data from createOrder
// till then { data : undefined }
// after the finishing the task it will fill the data with actual data
// {data : orderDatails}

//  proceed to payment
// now we will attach a call back function to promise object

promise.then((orderId) => {
  return payment(orderId);
});

// in first example we were passing the callback function in another function with risk to it

// but in second example we attached the callback to promise
// is case or promise it will wait until the data comes then only it will call callback function
