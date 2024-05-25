//Brute-force Solution

function findMinBruteForce(nums) {
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
}

// Example usage:
console.log(findMinBruteForce([3, 4, 5, 1, 2])); // Output: 1
console.log(findMinBruteForce([4, 5, 6, 7, 0, 1, 2])); // Output: 0
console.log(findMinBruteForce([11, 13, 15, 17])); // Output: 11


/////////////////////////////////////////// Optimal Solution
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // If mid element is greater than the rightmost element,
        // the minimum must be in the right part
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            // Otherwise, the minimum is in the left part including mid
            right = mid;
        }
    }

    return nums[left];
}

// Example usage:
console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
console.log(findMin([11, 13, 15, 17])); // Output: 11

