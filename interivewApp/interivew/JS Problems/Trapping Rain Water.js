function trap(hight) {
  let left = 0;
  let right = hight.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, hight[left]);
    rightMax = Math.max(rightMax, hight[right]);

    if (hight[left] < hight[right]) {
      trappedWater += leftMax - hight[left];
      left++;
    } else {
      trappedWater += rightMax - hight[right];
      right--;
    }
  }
  return trappedWater;
}
