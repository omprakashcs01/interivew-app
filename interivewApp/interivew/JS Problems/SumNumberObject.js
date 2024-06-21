const sumCalcFunc = obj => {
  let sum = 0;
  for (const val in obj) {
    if (typeof obj[val] === 'number') {
      sum += obj[val];
    } else if (typeof obj[val] === 'object') {
      sumCalcFunc(obj[val]);
    }
  }
  return sum;
};

console.log(sumCalcFunc(data));

function sumNumbers(obj) {
  let sum = 0;

  function recursiveSum(o) {
    for (let key in o) {
      if (typeof o[key] === 'number') {
        sum += o[key];
      } else if (typeof o[key] === 'object' && o[key] !== null) {
        recursiveSum(o[key]);
      }
    }
  }

  recursiveSum(obj);
  return sum;
}

// Test data
let data = {
  a: {
    a: 'a',
    b: 1,
  },
  b: {
    b: 1,
  },
  c: {
    c: {
      e: 'e',
      b: {
        c: 'c',
        a: 1,
      },
    },
  },
};

// Calculate and print the sum of all numbers in the nested object
console.log(sumNumbers(data)); // Output: 3
