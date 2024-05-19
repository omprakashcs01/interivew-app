function moveZero(arr) {
    let left = 0;
    let right = 0;
  
    while (right < arr.length) {
      if (arr[right] !== 0) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
      }
      right++;
    }
    return arr
  }
  
  console.log(moveZero([0,1,0,3,12]));
  