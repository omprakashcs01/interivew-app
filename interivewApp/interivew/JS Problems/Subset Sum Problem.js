function isSubsetSum(arr, n, sum) {
  // Create a 2D array to store results of subproblems
  let dp = Array.from({length: n + 1}, () => Array(sum + 1).fill(false));

  // A sum of 0 is always possible with an empty subset
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  // Fill the dp array
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] <= j) {
        // Include arr[i-1] in the subset or exclude it
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
      } else {
        // Exclude arr[i-1] from the subset
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // The answer is whether we can get the sum using all elements
  return dp[n][sum];
}

// Example usage
console.log(isSubsetSum([3, 34, 4, 12, 5, 2], 6, 9)); // Output: true (1)
console.log(isSubsetSum([3, 34, 4, 12, 5, 2], 6, 30)); // Output: false (0)
