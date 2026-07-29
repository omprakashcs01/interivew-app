function asyncfn1(callback) {
  setTimeout(() => {
    let result1 = 'Result';
    callback(result1);
  });
}

function asyncfn2(input, callback) {
  setTimeout(() => {
    let result2 = input + 'Result2';
    callback(result2);
  });
}

function asyncfn3(input, callback) {
  setTimeout(() => {
    let result3 = input + 'Result3';
    callback(result3);
  });
}

// asyncfn1(result1 => {
//   asyncfn2(result1, result2 => {
//     asyncfn3(result2, result3 => {
//       console.log(result3);
//     });
//   });
// });

asyncfn1(result1 => {
  asyncfn2(result1, result2 => {
    asyncfn3(result2, result3 => {
      console.log(result3);
    });
  });
});
