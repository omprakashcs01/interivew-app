function maxLenZeroSumSubarray(arr) {
  const sumMap = new Map();
  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) {
      maxLen = i + 1;
    } else if (sumMap.has(sum)) {
      maxLen = Math.max(maxLen, i - sumMap.get(sum));
    } else {
      sumMap.set(sum, i);
    }
  }

  return maxLen;
}

// Example usage:
const arr = [15, -2, 2, -8, 1, 7, 10, 23];
console.log(
  'Length of the largest subarray with 0 sum is:',
  maxLenZeroSumSubarray(arr),
);
