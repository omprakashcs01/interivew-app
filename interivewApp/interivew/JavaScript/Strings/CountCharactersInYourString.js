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
