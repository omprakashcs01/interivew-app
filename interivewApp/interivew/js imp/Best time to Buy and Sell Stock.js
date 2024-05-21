function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    
    return maxProfit;
}

// Example usage:
const stockPrices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(stockPrices);
console.log(profit); // Output: 5

//burte force



function bestTimeToSellSockets(price) {
  let globalProfit = 0;

  for (let i = 0; i < price.length; i++) {
    for (let j = i + 1; j < price.length; j++) {
      const currentProfit = price[j] - price[i];

      if (currentProfit > globalProfit) {
        globalProfit = currentProfit;
      }
    }
  }
  return globalProfit;
}

////// 
function bestTimeToSellSockets(price) {
  let maxProfit = 0;  // Initialize the maximum profit to 0
  let minPrice = Infinity;  // Initialize the minimum price to infinity

  for (let i = 0; i < price.length; i++) {
    if (price[i] < minPrice) {
      minPrice = price[i];  // Update the minimum price if the current price is lower
    } else if (price[i] - minPrice > maxProfit) {
      maxProfit = price[i] - minPrice;  // Update the maximum profit if the current profit is higher
    }
  }

  return maxProfit;
}


console.log(bestTimeToSellSockets([7,1,5,3,6,4]));
/////////////////////
//leedcode
const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };