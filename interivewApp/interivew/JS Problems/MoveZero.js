function moveZero(arr) {
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
    }
    right++;
  }
  return arr;
}

console.log(moveZero([0, 1, 0, 3, 12]));

function moveNegatives(arr) {
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    if (arr[right] >= 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
    }
    right++;
  }
  return arr;
}

// Example usage:
let array = [0, -1, 2, -3, 4, -5];
console.log(moveNegatives(array)); // Output: [0, 2, 4, -3, -1, -5]

/////
function moveNegativesToLeft(arr) {
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    if (arr[right] < 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
    }
    right++;
  }
  return arr;
}

// Example usage:
let array = [0, -1, 2, -3, 4, -5];
console.log(moveNegativesToLeft(array)); // Output: [-1, -3, -5, 2, 4, 0]


