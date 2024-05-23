function findKeyPath(targetKey, obj) {
    let result = '';
    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key]!== null) {
        // Recursively call the function on the nested object
        let nestedResult = findKeyPath(targetKey, obj[key]);
        if (nestedResult.length > 0) {
          // Construct the full path
          result = `${key}.${nestedResult}`;
          break; // Stop searching once the key is found
        }
      } else if (key === targetKey) {
        // Key found, construct the path
        result = `${key}`;
        break;
      }
    }
    return result;
  }
  
  const map = {
    a: {
      b: "test",
      c: [],
      d: {
        e: "test",
        f: {
          "target1": "found me"
        }
      }
    },
    b1: [
      {
        c1: {
            "target2": "found me again"
        },
        d1: "test"
      }
    ]
  };
  
  console.log(findKeyPath("target1", map)); // Output: "a.d.f.target1"
  console.log(findKeyPath("target2", map)); // Output: "b1.0.c1.target2"
  console.log(findKeyPath("target2", map)); // Output: ""
  