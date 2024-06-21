//promises.all polyfill

const all = promises => {
  return new Promise((resolve, reject) => {
    // Initialize an array to store the results of the promises
    const results = [];
    // Counter to track the number of resolved promises
    let count = 0;

    // Iterate over the promises array
    for (let i = 0; i < promises.length; i++) {
      // Ensure the current item is treated as a promise
      Promise.resolve(promises[i])
        .then(res => {
          // Store the resolved value in the corresponding index
          results[i] = res;
          // Increment the counter
          count++;
          // If all promises have resolved, resolve the main promise
          if (count === promises.length) {
            resolve(results);
          }
        })
        // Reject the main promise immediately if any promise rejects
        .catch(reject);
    }

    // Edge case: if the input array is empty, resolve immediately
    if (promises.length === 0) {
      resolve([]);
    }
  });
};

////////////////////////////////////////////////////////// Simulate asynchronous operations with promises
const promise1 = new Promise(resolve =>
  setTimeout(() => resolve('First'), 500),
);
const promise2 = new Promise(resolve =>
  setTimeout(() => resolve('Second'), 400),
);
const promise3 = new Promise(resolve =>
  setTimeout(() => resolve('Third'), 600),
);

// Wrap promises in an array
const promises = [promise1, promise2, promise3];

// Use Promise.all to wait for all promises to resolve
all(promises)
  .then(results => {
    console.log(results); // ["First", "Second", "Third"]
  })
  .catch(error => {
    console.error(`An error occurred: ${error}`);
  });

////////////////////////////////////////////