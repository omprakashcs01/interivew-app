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
      if (target < arr[mid] && target >= arr[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
}

///////only once
function countChar(arr) {
  let set = new Set();
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) {
      result[arr[i]] += 1;
    } else if (set.has(arr[i])) {
      result[arr[i]] = 2; // First repetition sets count to 2
    } else {
      set.add(arr[i]);
    }
  }

  return result;
}

console.log(countChaifr([1, 2, 1, 5, 3, 5, 2, 8, 4]));
