function rob(arr) {
    if (arr.length == 0) return 0;
    if (arr.length == 1) return arr[0];
  
    let dp = Array(arr + 1).fill(0);
  
    //
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);
  
    for (let i = 2; i < arr.length; i++) {
      dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);
    }
    return dp[dp.length - 1];
  }
  /////////////////// leedcode 
  var rob = function(nums) {
  
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let maxAtTwoBefore = nums[0];
    let maxAtOneBefore = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
        
        maxAtTwoBefore = maxAtOneBefore;
        maxAtOneBefore = maxAtCurrent;
    }
    
    return maxAtOneBefore;
  };
  //https://leetcode.com/problems/house-robber/solutions/282624/easy-to-read-javascript-o-n-time-o-1-space-iterative/