const cart = ["t-shirt", "shoes", "earphone"];

api.createOrder(cart, function () {
  api.payment(function () {
    api.showOrder(function () {
      api.updateWallet();
    });
  });
});

// this is called callbacks hell call back inside callbacks

// this structure is called pyramid of doom
