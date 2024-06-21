function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 2, 3, 4, 5], 9)); // Output: [3, 4]
//O(N^2)

//optimized solution
//hashmap
// input  =[1,5,9]
// target =10

// map = {1(num ): 0(index), 5:1, }
// i =2
//  value = 9
// complent_Pair = 10 -9 = 1

// output [0,2]

function twoSum(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let competentPair = target - value;

    if (map[competentPair] !== undefined) {
      return [map[competentPair], i];
    } else {
      map[value] = i;
    }
  }
}
//twosSum2

function twoSumSorted(arr, target) {
  let n = arr.length;

  // Initialize pointers
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    // Adjust pointers based on sum comparison
    if (sum < target) {
      left++; // Move towards higher values
    } else if (sum > target) {
      right--; // Move towards lower values
    } else {
      // Found the pair
      return [left + 1, right + 1]; // Adding 1 because array indices start at 0
    }
  }

  // Return null if no pair found
  return null;
}
