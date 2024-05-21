function ConationMaxWater(arr) {
    let left = 0;
    let right = arr.length-1;
    let maxima = 0;
  
    while (left < right) {
      let width = right - left;
      let maxArea = Math.min(aarrrr[left], arr[right]) * width;
  
      maxima = Math.max(maxima, maxArea);
  
      if (arr[left] < arr[right]) {
        left++;
      } else {
        right--;
      }
    }
    return maxima;
  }
  ///////////
  function ContainMostWater(arr){
    let left = 0
    let right = arr.length-1
    let result =0
    
    
      while(left < right){
         let width = right - left
         let minHeight = Math.min(arr[left], arr[right])
    
         let maxArea = minHeight * width
    
         result  = Math.max(result,maxArea)
    
    
         if(arr[left]<arr[right]){
          left++
         } else {
          right--
         }
      }
    
    return result
    }
    
    console.log(ContainMostWater([1,8,6,2,5,4,8,3,7]));