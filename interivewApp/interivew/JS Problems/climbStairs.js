//Brute Force Approach:
function climbStairsBruteForce(steps) {
  // Base case: if there are no steps or negative steps, there's no way to climb
  if (steps <= 0) {
    return 0;
  }

  // Base case: if there's 1 step, there's only one way to climb it
  if (steps === 1) {
    return 1;
  }

  // Base case: if there are 2 steps, there are two ways to climb (1+1 or 2)
  if (steps === 2) {
    return 2;
  }

  // Recursive case: the number of ways to climb 'steps' is the sum of the ways to climb 'steps-1' and 'steps-2'
  return climbStairsBruteForce(steps - 1) + climbStairsBruteForce(steps - 2);
}

///////////

function climbStairsBruteForce(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairsBruteForce(n - 1) + climbStairsBruteForce(n - 2);
}

// Example usage:
console.log(climbStairsBruteForce(2)); // Output: 2
console.log(climbStairsBruteForce(3)); // Output: 3

///////////////////////////////
//Optimized Approach (Dynamic Programming):
function climbStairsOptimized(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
