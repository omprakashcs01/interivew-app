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
