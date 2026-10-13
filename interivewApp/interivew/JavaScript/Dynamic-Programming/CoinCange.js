//my code

function coinChange(coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);

  //base

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j];
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}
////////
/**
 * Determines the minimum number of coins needed to sum up to a given amount,
 * or returns -1 if it's impossible.
 *
 * @param {number[]} coins - An array of coin denominations.
 * @param {number} amount - The target amount to reach using the coins.
 * @return {number} The minimum number of coins required, or -1 if it's impossible.
 */
var coinChange = function (coins, amount) {
  // Initialize a dynamic programming array to keep track of the minimum number of coins needed
  // to sum up to each amount from 0 to the target amount. Initially, set all values to Infinity
  // except for dp[0] which represents the base case where the sum is 0, and thus requires 0 coins.
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  // Use explicit i and j variables for iteration
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j];
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }

  // After filling the dynamic programming array, return the value at the target amount.
  // If this value is greater than the target amount, it means it's impossible to sum up
  // to the target amount using the given coins, so return -1. Otherwise, return the minimum
  // number of coins needed.
  return dp[amount] > amount ? -1 : dp[amount];
};

//original

// https: www.youtube.com/watch?v=mSdNNaG5oPc

var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);

  // base case
  dp[0] = 0;

  for (let curAmount = 1; curAmount <= amount; curAmount++) {
    for (let coin of coins) {
      if (curAmount - coin >= 0) {
        dp[curAmount] = Math.min(dp[curAmount], 1 + dp[curAmount - coin]);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};
