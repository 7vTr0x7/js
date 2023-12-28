// callback hell

const cart = ["t-shirt", "shoes", "earphone"];

createOrder(cart, function (orderId) {
  payment(orderId, function (paymentInfo) {
    showOrderSummery(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

// solving above problem

// using promise chaining

createOrder(cart)
  .then(function (orderId) {
    return payment(orderId);
  })
  .then(function () {
    return showOrderSummery(paymentInfo);
  })
  .then(function () {
    return updateWalletBalance();
  });
