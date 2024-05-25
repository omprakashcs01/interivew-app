function searchRotatedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      }
  
      //which side is sorted
  
      if (arr[mid] < arr[right]) {
        if (target > arr[mid] && target <= arr[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      } else {
        if(target < arr[mid] && target>= arr[left]){
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return -1
  }
  