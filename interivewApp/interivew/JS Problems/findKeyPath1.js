//good one find key path
function findKeyPath(targetKey, obj, currentPath = '') {
  if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      let newPath = currentPath ? `${currentPath}.${key}` : key;
      if (key === targetKey) {
        return newPath;
      }
      let result = findKeyPath(targetKey, obj[key], newPath);
      if (result) {
        return result;
      }
    }
  }
  return '';
}

console.log(findKeyPath('target1', map)); // Output: "a.d.f.target1"
console.log(findKeyPath('target2', map)); // Output: "b1.0.c1.target2"
console.log(findKeyPath('target3', map)); // Output: ""

const map = {
  a: {
    b: 'test',
    c: [],
    d: {
      e: 'test',
      f: {
        target1: 'found me',
      },
    },
  },
  b1: [
    {
      c1: {
        target2: 'found me again',
      },
      d1: 'test',
    },
  ],
};

//2nd way
function findKeyPath(targetKey, obj) {
  let foundPath = '';

  function search(key, value, currentPath) {
    if (typeof value === 'object' && value !== null) {
      for (let k in value) {
        let newPath = currentPath ? `${currentPath}.${k}` : k;
        if (k === targetKey) {
          foundPath = newPath;
          return;
        }
        search(k, value[k], newPath);
        if (foundPath) return; // Exit early if the path is found
      }
    }
  }

  search('', obj, '');
  return foundPath;
}

const obj = {
  a: {
    b: 'test',
    c: [],
    d: {
      e: 'test',
      f: {
        target1: 'found me',
      },
    },
  },
  b1: [
    {
      c1: {
        target2: 'found me again',
      },
      d1: 'test',
    },
  ],
};

console.log(findKeyPath('target1', obj)); // Output: "a.d.f.target1"
console.log(findKeyPath('target2', obj)); // Output: "b1.0.c1.target2"
console.log(findKeyPath('target3', obj)); // Output: ""

function findKeyPath(targetKey, obj, path = '') {
  // Convert the object keys to an array for easier iteration
  const keys = Object.keys(obj);

  // Iterate over the keys
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];

    // Check if the current key is the target key
    if (key === targetKey) {
      // Return the full path including the target key
      return `${path}${key}`;
    }

    // If the value is an object, recurse into it
    if (typeof value === 'object' && value !== null) {
      const result = findKeyPath(targetKey, value, `${path}${key}.`);
      // If the target key was found in the nested object, return the path
      if (result) {
        return result;
      }
    }
  }

  // If the target key was not found, return an empty string
  return 'not find';
}

const map = {
  a: {
    b: 'test',
    c: [],
    d: {
      e: 'test',
      f: {
        target1: 'found me',
      },
    },
  },
  b1: [
    {
      c1: {
        target2: 'found me again',
      },
      d1: 'test',
    },
  ],
};

console.log(findKeyPath('target1', map)); // Output: "a.d.f.target1"
console.log(findKeyPath('target2', map)); // Output: "b1.0.c1.target2"
console.log(findKeyPath('target3', map)); // Output: ""

//////////////////////////////////////////////////////////
function findKeyPath(targetKey, obj, path = '') {
  // Convert the object keys to an array for easier iteration
  const keys = Object.keys(obj);

  // Iterate over the keys
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];

    // Check if the current key is the target key
    if (key === targetKey) {
      // Return the full path including the target key
      return `${path}${key}`;
    }

    // If the value is an object, recurse into it
    if (typeof value === 'object' && value !== null) {
      const result = findKeyPath(targetKey, value, `${path}${key}.`);
      // If the target key was found in the nested object, return the path
      if (result) {
        return result;
      }
    }

    // If the value is an array, iterate over its elements
    if (Array.isArray(value)) {
      for (let j = 0; j < value.length; j++) {
        const element = value[j];
        if (typeof element === 'object' && element !== null) {
          const result = findKeyPath(
            targetKey,
            element,
            `${path}${key}[${j}].`,
          );
          if (result) {
            return result;
          }
        }
      }
    }
  }

  // If the target key was not found, return an empty string
  return '';
}

const map = {
  a: {
    b: 'test',
    c: [],
    d: {
      e: 'test',
      f: {
        target1: 'found me',
      },
    },
  },
  b1: [
    {
      c1: {
        target2: 'found me again',
      },
      d1: 'test',
    },
  ],
};

console.log(findKeyPath('target1', map)); // Output: "a.d.f.target1"
console.log(findKeyPath('target2', map)); // Output: "b1.0.c1.target2"
console.log(findKeyPath('target3', map)); // Output: ""
