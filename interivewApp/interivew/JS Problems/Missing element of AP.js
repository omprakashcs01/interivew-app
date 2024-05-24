function findMissing(arr) {
    let n = arr.length;
    // Calculate the common difference
    let d = (arr[n - 1] - arr[0]) / n;

    // Traverse the array to find the missing element
    for (let i = 0; i < n - 1; i++) {
        if (arr[i + 1] - arr[i] !== d) {
            return arr[i] + d;
        }
    }

    // If no element is missing in the given range, return -1 or a suitable value indicating no missing element
    return -1;
}

// Test the function with the given examples
console.log(findMissing([2, 4, 8, 10, 12, 14])); // Output: 6
console.log(findMissing([1, 6, 11, 16, 21, 31])); // Output: 26


//with - number////////////////////////////

function findMissing(arr) {
    let n = arr.length;
    // Calculate the common difference
    let d = (arr[n - 1] - arr[0]) / n;

    // Traverse the array to find the missing element
    for (let i = 0; i < n - 1; i++) {
        if (arr[i + 1] - arr[i] !== d) {
            return arr[i] + d;
        }
    }

    // If no element is missing in the given range, return -1 or a suitable value indicating no missing element
    return -1;
}

// Test the function with examples including negative numbers
console.log(findMissing([2, 4, 8, 10, 12, 14])); // Output: 6
console.log(findMissing([1, 6, 11, 16, 21, 31])); // Output: 26
console.log(findMissing([-10, -5, 5, 10])); // Output: 0
console.log(findMissing([-10, -8, -6, -2, 0])); // Output: -4
