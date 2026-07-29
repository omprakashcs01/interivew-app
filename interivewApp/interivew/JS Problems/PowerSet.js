function powerSet(arr) {
  const result = [[]]; // start with the empty set

  for (const element of arr) {
    const length = result.length;
    for (let i = 0; i < length; i++) {
      result.push([...result[i], element]);
    }
  }

  return result;
}

// Example usage
console.log(powerSet([1, 2, 3]));

///new
const powerSet = arr => {
  let result = [[]];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let length = result.length;

    for (let j = 0; j < length; j++) {
      result.push([...result[j], element]); // Corrected here
    }
  }

  return result;
};

console.log(powerSet([0])); // Expected output: [[], [0]]
