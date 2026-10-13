function jumpGame(arr) {
    let distance = 0;
  
    for (let i = 0; i <= arr.length; i++) {
      distance = Math.max(distance, i + arr[i]);
  
      if (distance >= arr.length - 1) {
        return true;
      }
    }
    return false;
  }
  const array = [3, 2, 1, 0, 4];
  console.log(jumpGame(array));
  