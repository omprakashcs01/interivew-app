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
const promise1 = new Promise(resolve => setTimeout(() => resolve('One'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Two'), 2000));
const promise3 = new Promise(reject =>
  setTimeout(() => resolve('Three'), 3000),
);

// Use Promise.all to wait for all promises to resolve
Promise.myAll([promise1, promise2, promise3])
  .then(values => console.log(values)) // Logs: ['One', 'Two', 'Three']
  .catch(error => console.error('RJECT ISSUE')); // Catches any errors if any promise rejects
/////////////////////////////////////////////////////////////////////////////////////////////////

const t1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('T1 success');
    }, 500);
  });
};

const t2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('T2 fail');
    }, 500);
  });
};

const t3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('T3 success');
    }, 500);
  });
};


