const cart = ["t-shirt", "shoes", "earphone"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  // .catch(function (err) {
  //   console.log(err.message);  // this catch will check for error the above of it and run below code even if there is an error above
  // })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message); // this catch will return error if any error occurs in code
  });

////

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // create order
    // validateCart
    // orderId

    if (!validateCart(cart)) {
      const err = new Error("cart not found");
      reject(err);
    }

    const orderId = "1234";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment successful");
  });
}

function validateCart(cart) {
  return true;
}
