function countCharter(string) {
  var result = {};

  for (let i = 0; i < string.length; i++) {
    if (result[string[i]]) {
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }

  return result;
}

console.log(countCharter('my name'));




//2. Best solution to remember for interviews
//You can use one simple approach for both arrays and strings.

function countChar(arr) {
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    result[item] = (result[item] || 0) + 1;
  }

  return result;
}

console.log(countChar([1, 2, 1, 5, 3, 5, 2, 8, 4]));
// { 1: 2, 2: 2, 3: 1, 4: 1, 5: 2, 8: 1 }

console.log(countChar("my name"));
// { m: 2, y: 1, " ": 1, n: 1, a: 1, e: 1 }





//   function countCharter (string) {
//     var result = {};

//     for(let i = 0; i < string.length; i++) {
//       if((string[i])){
//         result[string[i]] += 1;
//       } else {
//         result[string[i]] = 1;
//       }
//     }

//     return result;
//   }

//   console.log(count("my name"));

//+ Write a program to find the character which has maximum occurrence in the given string ?

// function findMaxOccurrence(string) {
//   var result = {};
//   var maxChar = '';
//   var maxCount = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (result[string[i]]) {
//       result[string[i]] += 1;
//     } else {
//       result[string[i]] = 1;
//     }

//     // Check if the current character count is the highest so far
//     if (result[string[i]] > maxCount) {
//       maxCount = result[string[i]];
//       maxChar = string[i];
//     }
//   }

//   return {maxChar, maxCount};
// }

// console.log(findMaxOccurrence('my name'));

//// only duplicate occurrences

function countDuplicateCharacters(str) {
  let result = {};

  // Count occurrences of each character
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]] += 1;
    } else {
      result[str[i]] = 1;
    }
  }

  // Filter to show only duplicates
  let duplicates = {};
  for (let char in result) {
    if (result[char] > 1) {
      duplicates[char] = result[char];
    }
  }

  return duplicates;
}

console.log(countDuplicateCharacters('hello'));
// single loop: 


const countChar = (str) => {
  const result = {};
  const duplicate = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (result[char] >= 1) {
      result[char] += 1;
      duplicate[char] = result[char];
    } else {
      result[char] = 1;
    }
  }

  return duplicate;
};

console.log(countChar("test"));
// { t: 2 }
