
// Input:  arr = [1, 9, 6, 3, 2], size = 3
// Output: [[1, 9, 6], [3, 2]]
const chunk = (arr, size) => {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};

console.log(chunk([1, 9, 6, 3, 2], 3));
// [[1, 9, 6], [3, 2]]