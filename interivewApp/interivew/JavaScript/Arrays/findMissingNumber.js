function findMissingNumber(arr) {
    let expectedSum = 0;
    let actualSum = 0;
    const n = arr.length + 1; // Adding 1 to account for the missing number
    
    // Calculate the expected sum of the first n natural numbers
    for (let i = 1; i <= n; i++) {
        expectedSum += i;
    }
    
    // Calculate the actual sum of the array elements
    for (let num of arr) {
        actualSum += num;
    }
    
    // The difference between the expected sum and the actual sum will be the missing number
    return expectedSum - actualSum;
}

// Example usage
const array = [1, 2, 3, 5, 6, 7, 8];
console.log("Missing number:", findMissingNumber(array)); // Output: Missing number: 4
