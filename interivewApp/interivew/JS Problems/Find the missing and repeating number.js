// Function to find two repeating elements in an array of size n.
function findTwoElement(arr, n) {
  let frequency = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    frequency[arr[i]]++;
  }

  let missing, repeating;

  for (let i = 1; i <= n; i++) {
    if (frequency[i] === 0) {
      missing = i;
    }
    if (frequency[i] > 1) {
      repeating = i;
    }
  }

  return [repeating, missing];
}

class Solution {
  // Function to find two repeating elements in an array of size n.
  findTwoElement(arr, n) {
    // Create an array to keep track of the frequency of each element.
    // The size of the array is n + 1 because array indices start from 0.
    let frequency = new Array(n + 1).fill(0);

    // Traverse through the given array to populate the frequency array.
    for (let i = 0; i < n; i++) {
      // Increment the count for each element found in the array.
      frequency[arr[i]]++;
    }

    // Variables to hold the values of the missing and repeating elements.
    let missing, repeating;

    // Traverse through the frequency array to find the missing and repeating elements.
    for (let i = 1; i <= n; i++) {
      // If the frequency of an index is 0, it means this number is missing from the array.
      if (frequency[i] === 0) {
        missing = i;
      }
      // If the frequency of an index is greater than 1, it means this number is repeating.
      if (frequency[i] > 1) {
        repeating = i;
      }
    }

    // Return the result as an array with the repeating element first and the missing element second.
    return [repeating, missing];
  }
}
//sorting
// function findTwoElement(arr, n) {
//   // Sort the array
//   arr.sort((a, b) => a - b);

//   let repeating, missing;

//   // Traverse the sorted array to find the repeating and missing numbers
//   for (let i = 0; i < n - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       repeating = arr[i];
//     } else if (arr[i + 1] - arr[i] > 1) {
//       missing = arr[i] + 1;
//     }
//   }

//   // Check for the missing number at the end of the array
//   if (arr[n - 1] !== n) {
//     missing = n;
//   }

//   // If the missing number was not found in the middle, it must be at the start
//   if (!missing && arr[0] !== 1) {
//     missing = 1;
//   }

//   return [repeating, missing];
// }

// Example usage
let arr1 = [2, 2];
let n1 = 2;
console.log(findTwoElement(arr1, n1)); // Output: [2, 1]

let arr2 = [1, 3, 3];
let n2 = 3;
console.log(findTwoElement(arr2, n2)); // Output: [3, 2]
