// console.log('start')

const sub = new Promise((resolve, reject) =>{


    setTimeout (()=>{
        const result = true;
        if (result)  resolve("success");
        else reject("error");
 },2000 );
})

sub.then((res)=>{
    console.log(res)
})
.catch((err)=>{ console.log(res)});

//promiss

// console.log('start');

// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         // Replace the following line with your API call
//         fetch('https://api.example.com/data')
//             .then(response => {
//                 if (response.ok) {
//                     resolve("success");
//                 } else {
//                     reject("error");
//                 }
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// };

// const sub = fetchData();

// sub.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


promisschaing
//promisi.all
//promiss.race
//promiis.allsettled
//Promise.any()

//pending
// fulfill
// reject



const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

const promise = createOrder(cart);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

