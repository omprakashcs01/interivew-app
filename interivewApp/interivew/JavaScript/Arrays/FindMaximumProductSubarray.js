function findMaximumProductSubarray(arr) {
    let prevMax = arr[0];
    let prevMin = arr[0];
    let result = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      let currentMax = Math.max(arr[i], arr[i] * prevMax, arr[i] * prevMin);
  
      let currentMin = Math.min(arr[i], arr[i] * prevMax, arr[i] * prevMin);
  
      prevMax = currentMax;
      prevMax = currentMin;
  
     result = Math.max(result, currentMax);
    }
    return result;
  }
  