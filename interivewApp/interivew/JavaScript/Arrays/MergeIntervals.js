function MergeIntervals(arr) {
    let start = 0;
    let end = 1;
  
    arr = arr.sort((a, b) => a[start] - b[start]);
  
    let previous = arr[0];
    let result = [previous];
  
    for (let current of arr) {
      if (current[start] <= previous[end]) {
        previous[end] = Math.max(previous[end], current[end]);
      } else {
        result.push(current);
        previous = current;
      }
  
      
    }
    return result
  }



  
  ////////////////////////////////////////////////////
  /////////////////////////////////////////
var merge = function(intervals) {
    if (intervals.length === 0) {
  return [];
}

// Sort the intervals by the starting value
intervals.sort((a, b) => a[0] - b[0]);

const result = [];
let pair = intervals[0];

for (let i = 1; i < intervals.length; i++) {
  if (pair[1] >= intervals[i][0]) {
    // There is an overlap, so merge the intervals
    pair[1] = Math.max(intervals[i][1], pair[1]);
  } else {
    // No overlap, push the current interval to the result and update the pair
    result.push(pair);
    pair = intervals[i];
  }
}
// Push the last interval
result.push(pair);

return result;
};