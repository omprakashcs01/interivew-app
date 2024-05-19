function ConationMaxWater(arr) {
    let left = 0;
    let right = arr.length-1;
    let maxima = 0;
  
    while (left < right) {
      let width = right - left;
      let maxArea = Math.min(arr[left], arr[right]) * width;
  
      maxima = Math.max(maxima, maxArea);
  
      if (arr[left] < arr[right]) {
        left++;
      } else {
        right--;
      }
    }
    return maxima;
  }
  