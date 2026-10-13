function hasZeroSumSubarray(arr) {
  const sumMap = new Map();
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0 || sumMap.has(sum)) {
      return true;
    }

    sumMap.set(sum, i);
  }
  return false;
}

// Example usage:
const arr = [4, 2, -3, 1, 6];
console.log(hasZeroSumSubarray(arr));

///////////////////////////////////// new
function findSubarrayWithZeroSum(arr) {
  let sum = 0;
  let mySum = new Set();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0 || mySum.has(sum)) {
      return true;
    }
    mySum.add(sum);
  }
  return false;
}
