//
// One question contained an array of letters and numbers had to return sum of numbers and the string formed by letters from the array

// ChatGPT
// You can solve this problem by iterating through the array, checking each element to see if it's a number or a letter, and then accumulating the results accordingly. Here's a JavaScript function that does this

function processArray(arr) {
  let sum = 0;
  let letters = '';

  arr.forEach(item => {
    if (typeof item === 'number') {
      sum += item;
    } else if (typeof item === 'string' && isNaN(item)) {
      letters += item;
    }
  });

  return {sum, letters};
}

// Example usage
const inputArray = [1, 'a', 2, 'b', 3, 'c', 4];
const result = processArray(inputArray);
console.log(result); // { sum: 10, letters: 'abc' }

function arrFilter(arr) {
  let sum = 0;
  let letters = '';

  arr.forEach(item => {
    if (typeof item === 'number') {
      sum += item;
    } else if (typeof item === 'string' && !isNaN(item)) {
      letters = letters + item;
    }
  });
  return {sum, letters};
}
