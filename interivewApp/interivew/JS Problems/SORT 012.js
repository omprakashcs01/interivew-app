function sortColors(arr) {
    let left = 0;
    let current = 0
    let right = arr.length - 1;
  
    while (current < right) {
      if (arr[current] === 0) {
        [arr[left], arr[current]] = [arr[current], arr[left]];
        current++;
        left++;
      } else if (arr[current] === 1) {
        current++;
      } else if (arr[current] === 2){
          [arr[right], arr[current]] = [arr[current], arr[right]]
          right--
      }
    }
  
    return arr
  }
  
  console.log(sortColors( [2,1,1,0]));
  