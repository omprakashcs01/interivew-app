var findKthLargest = function (arr, k) {
  let minVal = Infinity;
  let maxVal = -Infinity;

  // Find the minimum and maximum values in the array
  for (let i = 0; i < arr.length; i++) {
    minVal = Math.min(minVal, arr[i]);
    maxVal = Math.max(maxVal, arr[i]);
  }

  // Create a frequency array
  let frequencyArr = new Array(maxVal - minVal + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    frequencyArr[arr[i] - minVal]++;
  }

  // Iterate over the frequency array in reverse order to find the kth largest element
  let count = 0;
  for (let i = frequencyArr.length - 1; i >= 0; i--) {
    count += frequencyArr[i];
    if (count >= k) {
      return i + minVal;
    }
  }
};

// Example usage
let arr1 = [3, 2, 1, 5, 6, 4];
let k1 = 2;
console.log(findKthLargest(arr1, k1)); // Output: 5

let arr2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k2 = 4;
console.log(findKthLargest(arr2, k2)); // Output: 4
