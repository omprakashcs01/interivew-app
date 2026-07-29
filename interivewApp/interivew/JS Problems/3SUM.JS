var threeSum = function (arr) {
  arr.sort((a, b) => a - b);
  let result = new Set();
  for (i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    let sum = 0;
    while (left < right) {
      sum = arr[i] + arr[left] + arr[right];
      if (sum == 0) {
        result.add(JSON.stringify([arr[i], arr[left], arr[right]]));
        left++;
        right--;
      } else if (sum > 0) right--;
      else {
        left++;
      }
    }
  }
  return Array.from(result).map(el => JSON.parse(el));
};

//chatgpt

// Brute Force
function threeSumBruteForce(nums) {
  const n = nums.length;
  const result = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          result.add(triplet.toString());
        }
      }
    }
  }

  return Array.from(result).map(str => str.split(',').map(Number));
}

// Example usage
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSumBruteForce(nums)); // Output: [[-1, -1, 2], [-1, 0, 1]]

//optimal solution

function threeSum(arr) {
  arr.sort((a, b) => a - b); // Step 1: Sort the array
  const result = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue; // Skip duplicates for the first number
    }

    let left = i + 1,
      right = n - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        while (left < right && arr[left] === arr[left + 1]) {
          left++; // Skip duplicates for the second number
        }
        while (left < right && arr[right] === arr[right - 1]) {
          right--; // Skip duplicates for the third number
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Example usage
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // Output: [[-1, -1, 2], [-1, 0, 1]]

////MORE WWY
function threeSum(nums) {
  nums.sort((a, b) => a - b); // Step 1: Sort the array
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Step 4: Skip duplicates for the first element

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Step 4: Skip duplicates for the second element
        while (left < right && nums[left] === nums[left + 1]) left++;

        // Step 4: Skip duplicates for the third element
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // Output: [[-1, -1, 2], [-1, 0, 1]]
