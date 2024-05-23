function read(obj, path) {
  // Split the path into keys
  const keys = path.split(".");

  // Iterate through each key
  let currentObj = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    // Check if the current key exists in the current object
    if (!currentObj.hasOwnProperty(key)) {
      // If the key does not exist, return undefined
      return undefined;
    }

    // Move to the next level of nesting
    currentObj = currentObj[key];
  }

  // Return the final value
  return currentObj;
}

const obj = {
  A: {
    B: {
      C: {
        D: {
          E: 2,
        },
      },
    },
  },
};

console.log(read(obj, "A.B.C.D.E")); // Output: 2
console.log(read(obj, "A.B.C.F.G")); // Output: undefined
/////////////////////////////////////////////////////////
// chat gpt
function read(obj, path) {
    const keys = path.split('.');
    let current = obj;
    
    for (const key of keys) {
      if (current[key] !== undefined) {
        current = current[key];
      } else {
        return undefined;
      }
    }
    
    return current;
  }
  
  const obj = {
    A: {
      B: {
        C: {
          D: {
            E: 2,
          },
        },
      },
    },
  };
  
  console.log(read(obj, "A.B.C.D.E")); // Output: 2
  console.log(read(obj, "A.B.C.D.F")); // Output: undefined
  console.log(read(obj, "A.B.X.Y.Z")); // Output: undefined
  