let str = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

function validAnagram(str) {
  const sorted = str.map(item => {
    return item.split('').sort().join('');
  });
  let map = {};

  for (let i = 0; i < sorted.length; i++) {
    if (!map[sorted[i]]) {
      map[sorted[i]] = [str[i]];
    } else {
      map[sorted[i]].push(str[i]);
    }
  }

  return Object.values(map);
}

console.log(validAnagram());



// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

function subsets(nums) {
  let result = [[]];  // Start with an empty subset
  
  for (let num of nums) {
      let newSubsets = result.map(subset => [...subset, num]);
      result.push(...newSubsets);
  }
  
  return result;
}

// Example usage
console.log(subsets([1,2,3]));
