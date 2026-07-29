Promise.myAll = promises => {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then(res => {
          results[i] = res;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch('NOT_FOUND');
    }
  });
};

////////////////////////////////\
// Create three promises that resolve after different durations
////////////////////////////////////////
Promise.allPolyfill = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let pendingPromises = promises.length;

    if (!pendingPromises) {
      return resolve(result);
    }

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then(res => {
          result[i] = res;
          pendingPromises--;

          if (pendingPromises === 0) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
};

const promise1 = Promise.resolve(1);
const promise2 = new Promise(resolve => setTimeout(resolve, 100, 2));
const promise3 = new Promise(resolve => setTimeout(resolve, 200, 3));
// const promise4 = Promise.reject('Error in promise4');

Promise.allPolyfill([promise1, promise2, promise3])
  .then(results => {
    console.log('All promises resolved:', results); // Expected output: All promises resolved: [1, 2, 3]
  })
  
  .catch(error => {
    console.log('One of the promises rejected:', error);
  });
