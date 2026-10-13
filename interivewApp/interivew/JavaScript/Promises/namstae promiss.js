const cart = ['shoes', 'pants', 'bag'];

createOder(cart, function () {
  proceedToPayment(orderID, function () {
    showOrder(paymentInfo, function () {
      updateBalance();
    });
  });
});






//give orderID
//callback
//issue Inversion Control

////////////////////////////////////
// const promise = createOder(cart);

//{data: orderID}



createOder(cart)
  .than(function (orderID) {
    return proceedToPayment(orderID);
  })
  .than(function (paymentInfo) {
    return showOrder(paymentInfo);
  });
