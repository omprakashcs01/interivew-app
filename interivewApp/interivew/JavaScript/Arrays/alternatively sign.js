function rearrangeArray(nums) {
  let positive = [];
  let negative = [];

  // Separate positive and negative numbers
  for (let num of nums) {
    if (num > 0) {
      positive.push(num);
    } else {
      negative.push(num);
    }
  }

  // Merge arrays alternatively
  let result = [];
  for (let i = 0; i < positive.length; i++) {
    result.push(positive[i]);
    result.push(negative[i]);
  }

  return result;
}

//
function alternative(arr) {
  let positive = [];
  let negative = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }

  let result = [];

  for (let i = 0; i < positive.length; i++) {
    result.push(positive[i]);
    result.push(negative[i]);
  }
  return result;
}
