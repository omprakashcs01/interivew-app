function subarrayGivenSum(arr, n, s) {
  for (let i = 0; i < n; i++) {
    let currentSum = 0;
    for (let j = i; j < n; j++) {
      currentSum += arr[j];
      if (currentSum === s) {
        return [i + 1, j + 1]; // converting 0-based index to 1-based index
      }
    }
  }
  return [-1];
}

// Test examples
console.log(subarrayGivenSum([1, 2, 3, 7, 5], 5, 12)); // Output: [2, 4]
console.log(subarrayGivenSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 15)); // Output: [1, 5]
console.log(subarrayGivenSum([7, 2, 1], 3, 2)); // Output: [2, 2]
console.log(subarrayGivenSum([5, 3, 4], 3, 2)); // Output: [-1]

///
function subarrayGivenSum(arr, n, s) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < n; end++) {
    currentSum += arr[end];

    while (currentSum > s && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === s) {
      return [start + 1, end + 1]; // converting 0-based index to 1-based index
    }
  }

  return [-1];
}

// Test examples
console.log(subarrayGivenSum([1, 2, 3, 7, 5], 5, 12)); // Output: [2, 4]
console.log(subarrayGivenSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 15)); // Output: [1, 5]
console.log(subarrayGivenSum([7, 2, 1], 3, 2)); // Output: [2, 2]
console.log(subarrayGivenSum([5, 3, 4], 3, 2)); // Output: [-1]

//optimize

function subarrayGivenSum(arr, n, s) {
  let start = 0;
  let currentSum = arr[0];

  for (let end = 1; end <= n; end++) {
    // Adjust the start position until currentSum is less than or equal to s
    while (currentSum > s && start < end - 1) {
      currentSum -= arr[start];
      start++;
    }

    // If the currentSum equals the target sum, return the indices (1-based)
    if (currentSum === s) {
      return [start + 1, end];
    }

    // Add the next element to currentSum
    if (end < n) {
      currentSum += arr[end];
    }
  }

  // If no subarray found, return -1
  return [-1];
}

// Test examples
console.log(subarrayGivenSum([1, 2, 3, 7, 5], 5, 12)); // Output: [2, 4]
console.log(subarrayGivenSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 15)); // Output: [1, 5]
console.log(subarrayGivenSum([7, 2, 1], 3, 2)); // Output: [2, 2]
console.log(subarrayGivenSum([5, 3, 4], 3, 2)); // Output: [-1]
console.log(subarrayGivenSum([1, 2, 3, 4], 4, 0)); // Output: [-1]
console.log(subarrayGivenSum([0, 0, 0, 0], 4, 0)); // Output: [1, 1]
console.log(subarrayGivenSum([1, 2, 3], 3, 6)); // Output: [1, 3]
console.log(subarrayGivenSum([1, 2, 3], 3, 0)); // Output: [-1]
