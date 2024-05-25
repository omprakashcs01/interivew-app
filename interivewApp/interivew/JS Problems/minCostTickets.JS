var minCostTickets = function(days, costs) {
    
    let total = Array(365);
    let dayPtr = 0;
    
    total[0] = 0;
    for(let i = 1; i < 365; i++){
        let curCost = total[i - 1];
        
        if(days[dayPtr] == i){
            curCost += costs[0];
            dayPtr++;
        }
        curCost = Math.min(curCost,total[Math.max(0,i - 7)] + costs[1]);
        curCost = Math.min(curCost,total[Math.max(0, i - 30)] + costs[2]); 
  
        
        total[i] = curCost;
    }
    
    return total[365 - 1];
  };

  ////////https://leetcode.com/problems/minimum-cost-for-tickets/solutions/238974/javascript-as-simple-as-it-gets/