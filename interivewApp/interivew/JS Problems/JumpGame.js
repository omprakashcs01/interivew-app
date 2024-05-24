function canJump(array) {
    let reach = 0;
    for (let i = 0; i <= reach; i++) {
        reach = Math.max(reach, i + array[i]);
        if (reach >= array.length - 1) {
            return true;
        }
    }
    return false;
  }
  
  // Example usage:
  const array = [2, 3, 1, 1, 4]; // Example array
  console.log(canJump(array)); // Output: true
  ///https://www.youtube.com/watch?v=OjsmwsdCtX8