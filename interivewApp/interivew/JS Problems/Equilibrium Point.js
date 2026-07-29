function equilibriumPoint(arr) {
  // Get the total sum of the array
  let totalSum = arr.reduce((acc, val) => acc + val, 0);

  // Initialize left sum to 0
  let leftSum = 0;

  // Iterate through the array to find the equilibrium point
  for (let i = 0; i < arr.length; i++) {
    // Calculate the right sum for the current index
    let rightSum = totalSum - leftSum - arr[i];

    // Check if left sum is equal to right sum
    if (leftSum === rightSum) {
      // Return the equilibrium point (1-based indexing)
      return i + 1;
    }

    // Update left sum for the next iteration
    leftSum += arr[i];
  }

  // Return -1 if no equilibrium point is found
  return -1;
}

// Test examples
console.log(equilibriumPoint([1, 3, 5, 2, 2])); // Output: 3
console.log(equilibriumPoint([1])); // Output: 1
console.log(equilibriumPoint([1, 2, 3])); // Output: -1
