function compress(str) {
  let n = str.length;
  let i = 0;
  let index = 0;

  while (i < n) {
    let currentString = str[i];
  let count = 0;

    while (i < n && str[i] === currentString) {
      count++;
      i++;
    }

    str[index] = currentString;
    index++;

    if (count > 1) {
      let countString = count.toString();

      for (let i of countString) {
        str[index] = i;
        index++;
      }
    }
  }
  return index;
}
// Test cases
let chars1 = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
console.log(compress(chars1)); // Output: 6
console.log(chars1.slice(0, 6)); // Output: ["a","2","b","2","c","3"]

let chars2 = ['a'];
console.log(compress(chars2)); // Output: 1
console.log(chars2.slice(0, 1)); // Output: ["a"]

let chars3 = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
console.log(compress(chars3)); // Output: 4
console.log(chars3.slice(0, 4)); // Output: ["a","b","1","2"]

//
function compress(str) {
  let n = str.length;
  let i = 0;
  let index = 0;

  while (i < n) {
    let currentString = str[i];
    let count = 0;

    while (i < n && str[i] === currentString) {
      count++;
      i++;
    }

    str[index] = currentString;
    index++;

    if (count > 1) {
      let countString = count.toString();

      for (let i of countString) {
        str[index] = i;
        index++;
      }
    }
  }
  return index;
}
