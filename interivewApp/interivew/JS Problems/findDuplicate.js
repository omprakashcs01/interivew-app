
//pass leedcode
function findDuplicates(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    const duplicates = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }

    return duplicates;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1];
console.log("Duplicates in array:", findDuplicates(arr));


//2 brute force
function findDuplicates(array) {
    const duplicates = [];
    
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j] && !duplicates.includes(array[i])) {
          duplicates.push(array[i]);
        }
      }
    }
    
    return duplicates;
  }
  
  // Usage 
  const numbers = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8, 8];
  const duplicateNumbers = findDuplicates(numbers);
  console.log('Duplicate numbers:', duplicateNumbers);

  //optimal
 //pass leedcode
  function findDuplicatesOptimized(array) {
    const duplicates = [];
    const frequencyMap = {};
    
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      
      if (frequencyMap[element]) {
        if (!duplicates.includes(element)) {
          duplicates.push(element);
        }
      } else {
        frequencyMap[element] = true;
      }
    }
    
    return duplicates;
  }
  
  // Usage
  const numbers = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8, 8];
  const duplicateNumbers = findDuplicatesOptimized(numbers);
  console.log('Duplicate numbers:', duplicateNumbers);