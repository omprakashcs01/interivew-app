function deepClone(obj) {
  // Check if the input is null or not an object/array
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Create an array or object to hold the values
  let clone;
  if (Array.isArray(obj)) {
    clone = [];
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i]);
    }
  } else {
    clone = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
  }

  return clone;
}

// Example usage:
const original = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, {e: 5}],
  },
  f: null,
};

const cloned = deepClone(original);

console.log(cloned);
console.log(cloned.b.d[2] === original.b.d[2]); // Should be false
//////////////////////////// inblud
const original = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, {e: 5}],
  },
  f: null,
};

const cloned = JSON.parse(JSON.stringify(original));

console.log(cloned);
console.log(cloned.b.d[2] === original.b.d[2]); // Should be false
