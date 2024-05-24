//Brute Force Approach:



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