
const sortArray = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]


2. 


const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]
