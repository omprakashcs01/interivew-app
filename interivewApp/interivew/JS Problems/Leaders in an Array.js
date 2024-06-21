function LeadersArray(arr) {
    let ans = [];
    let maxi = -Infinity; // Initialize to negative infinity for comparison
    let n = arr.length;
    
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] > maxi) {
            ans.push(arr[i]);
        }
        maxi = Math.max(maxi, arr[i]);
    }
    
    ans.reverse(); // Reverse to maintain the order of appearance
    return ans;
}

// Example usage:
console.log(Leaders in an Array([16, 17, 4, 3, 5, 2])); // Output: [17, 5, 2]
console.log(Leaders in an Array([10, 4, 2, 4, 1])); // Output: [10, 4, 4, 1]


///2nd take u forwards
function printLeaders(arr, n) {

    let ans = [];
  
    // Last element of an array is always a leader,
    // push into ans array.
    let max = arr[n - 1];
    ans.push(arr[n - 1]);
  
    // Start checking from the end whether a number is greater
    // than max no. from right, hence leader.
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > max) {
        ans.push(arr[i]);
        max = arr[i];
      }
    }
  
    return ans;
  }
  
  // Array Initialization.
  let n = 6;
  let arr = [10, 22, 12, 3, 0, 6];
  
  let ans = printLeaders(arr, n);
  
  for (let i = ans.length - 1; i >= 0; i--) {
    console.log(ans[i]);
  }
  
////////brute froce
function findLeadersBruteForce(arr) {
  const leaders = [];

  for (let i = 0; i < arr.length; i++) {
    let isLeader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) {
      leaders.push(arr[i]);
    }
  }
  return leaders;
}

// Example usage
const arr = [16, 17, 4, 3, 5, 2];
const result = findLeadersBruteForce(arr);
console.log(result); // Output: [17, 5, 2]
//
function findLeaders(arr) {
  const leaders = [];
  let currentLeader = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > currentLeader) {
      leaders.push(arr[i]);
      currentLeader = arr[i];
    }
  }
  return leaders.reverse();
}

// Example usage
const arr = [16, 17, 4, 3, 5, 2];
const result = findLeaders(arr);
console.log(result); // Output: [17, 5, 2]