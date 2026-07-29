var findDisappearedNumbers = function (nums) {
  const hashmap = {};
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = i + 1;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!hashmap[i]) output.push(i);
  }

  return output;
};

////
// Polyfill for setTimeout
// (function () {
//   if (typeof window.setTimeout === 'undefined') {
//     window.setTimeout = function (callback, delay) {
//       var start = Date.now();
//       var handle = {};

//       function check() {
//         var now = Date.now();
//         if (now - start >= delay) {
//           callback();
//         } else {
//           handle.timer = setTimeout(check, 0);
//         }
//       }

//       handle.timer = setTimeout(check, 0);
//       return handle;
//     };
//   }
// })();

///  reverse Integer 1

let rev = 0;
let pop;

while (x != 0) {
  pop = x % 10;
  x = x / 10;
  x = parseInt(x);
  rev = rev * 10 + pop;
}

if (rev > 0x7fffffff) {
  return 0;
}
if (rev < -0x7fffffff) {
  return 0;
}

return rev;

///  reverse Integer 2

// let rev = 0;
// let pop;

// while (x != 0) {
//   pop = x % 10;
//   x = x / 10;
//   x = parseInt(x);
//   rev = rev * 10 + pop;
// }

// if (rev > 0x7fffffff) {
//   return 0;
// }
// if (rev < -0x7fffffff) {
//   return 0;
// }

// return rev;


//////////////  remove duplicate 

function removeDuplicateString(str) {
  let seen = new Set();
  let stack = [];
  let lastIndex = {};

  for (let i = 0; i < str.length; i++) {
    lastIndex[str[i]] = i;
  }

  for (let i = 0; i < str.length; i++) {
    if (!seen.has(str[i])) {
      let k = stack.length;
      while (k > 0 && stack[k - 1] > str[i] && lastIndex[stack[k - 1]] > i) {
        seen.delete(stack[k - 1]);
        stack.pop(str[i]);
        k--;
      }
      stack.push(str[i]);
      seen.add(str[i]);
    }
  }
  return stack.join('');
}

//

function () {
  if (typeof window.setTimeout === 'undefined') {
    window.setTimeout = function (callback, delay) {
      console.log('Custom setTimeout called with delay:', delay);
      var start = Date.now();
      var handle = { timer: null };

      function check() {
        var now = Date.now();
        if (now - start >= delay) {
          console.log('Delay reached, executing callback');
          callback();
        } else {
          handle.timer = window.setTimeout(check, 0);
        }
      }

      handle.timer = window.setTimeout(check, 0);
      return handle;
    };
    
    window.clearTimeout = function (handle) {
      if (handle && handle.timer) {
        clearTimeout(handle.timer);
      }
    };
  }
}();

// Example usage of the custom setTimeout
function myCallback() {
  console.log('Callback executed');
}

// Call the custom setTimeout with a delay of 2000ms (2 seconds)
window.setTimeout(myCallback, 2000);



//thotling 


function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

//new 
const throttling = (fn, limit) => {
  let lastCall = 0;

  return function (...args) {
    let now = Date.now(); // Corrected
    if (now - lastCall >= limit) {
      fn.apply(this, args);
      lastCall = now; // Update lastCall time
    }
  };
};


// Example usage:
const handleResize = throttle(() => {
  console.log('Window resized');
}, 200); // Throttle the function to execute at most once every 200 milliseconds

window.addEventListener('resize', handleResize);




////////////////////////////////////////////

/// search in obj
function searchNestedObject(obj, targetValue) {
  // If the current object is not an object or array, return false
  if (typeof obj !== 'object' || obj === null) {
      return false;
  }

  // Check if the current o serachbject matches the target value
  for (let key in obj) {
      if (obj[key] === targetValue) {
          return true;
      }

      // If the value is an object or array, recursively search it
      if (typeof obj[key] === 'object') {
          const found = searchNestedObject(obj[key], targetValue);
          if (found) {
              return true;
          }
      }
  }

  return false;
}

// Example usage:
const nestedObject = {
  a: {
      b: {
          c: 3,
          d: {
              e: 5
          }
      }
  },
  f: 6
};

console.log(searchNestedObject(nestedObject, 5)); // true
console.log(searchNestedObject(nestedObject, 10)); // false



function stirlingNumber(n, k) {
  if (k === 0 && n === 0) return 1;
  if (k === 0 || k > n) return 0;
  if (k === 1 || k === n) return 1;

  return k * stirlingNumber(n - 1, k) + stirlingNumber(n - 1, k - 1);
}

// Test cases
console.log(stirlingNumber(3, 2)); // Output: 3
console.log(stirlingNumber(3, 1)); // Output: 1

// join  two array by id



function join(arr1, arr2) {
  let result = {};

  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i].id] = arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    if (result[arr2[i].id]) {
      for (let key in arr2[i]) {
        result[arr2[i].id][key] = arr2[i][key];
      }
    } else {
      result[arr2[i].id] = arr2[i];
    }
  }
  return Object.values(result);
}