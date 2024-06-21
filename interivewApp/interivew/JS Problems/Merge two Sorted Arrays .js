function twoArraySum(arr1, m, arr2, n) {
  let result = [arr1.length + arr2.length];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result[k] = arr1[i];
      i++;
      k++;
    } else {
      result[k] = arr2[j];
      j++;
      k++;
    }
  }

  while (i < arr1.length) {
    result[k] = arr1[i];
    i++;
    k++;
  }

  while (i < arr2.length) {
    result[k] = arr2[j];
    j++;
    k++;
  }

  return result;
}

/////////////////////////////////////////////////////
function merge(nums1, m, nums2, n) {
  // i points to the current index of nums1
  let i = m - 1;

  // j points to the current index of nums2
  let j = n - 1;

  // k points to the last index of the merged array
  let k = m + n - 1;

  // While there are elements to merge
  while (i >= 0 && j >= 0) {
    // If element in nums1 is greater, copy it to the merged array
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      // If element in nums2 is greater, copy it to the merged array
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // Copy remaining elements of nums2 if there are any
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
//////////////////////////////////////////////////////////////////













// function merge(arr1, arr2, n, m) {

//     //Declare a 3rd array and 2 pointers:
//     let arr3 = new Array(n + m);
//     let left = 0;
//     let right = 0;

//     let index = 0;

//     //Insert the elements from the 2 arrays
//     // into the 3rd array using left and right
//     // pointers:

//     while (left < n && right < m) {
//         if (arr1[left] <= arr2[right]) {
//             arr3[index] = arr1[left];
//             left++, index++;
//         }
//         else {
//             arr3[index] = arr2[right];
//             right++, index++;
//         }
//     }

//     // If right pointer reaches the end:
//     while (left < n) {
//         arr3[index++] = arr1[left++];
//     }

//     // If left pointer reaches the end:
//     while (right < m) {
//         arr3[index++] = arr2[right++];
//     }

//     // Fill back the elements from arr3[]
//     // to arr1[] and arr2[]:
//     for (let i = 0; i < n + m; i++) {
//         if (i < n) arr1[i] = arr3[i];
//         else arr2[i - n] = arr3[i];
//     }
// }

// let arr1 = [1, 4, 8, 10];
// let arr2 = [2, 3, 9];
// let n = 4, m = 3;
// merge(arr1, arr2, n, m);
// console.log("The merged arrays are: ");
// console.log("arr1[] = " + arr1.join(" "));
// console.log("arr2[] = " + arr2.join(" "));

function twoArraySorted(arr1, a, arr2, b) {
  const result = new Array(n + m);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a && j < b) {
    if (arr1[i] <= arr2[j]) {
      result[k] = arr1[i];
      i++;
      k++;
    } else {
      result[k] = arr2[j];
      j++;
      k++;
    }
  }

  while (i < n) {
    result[k] = arr1[i];
    i++;
    k++;
  }

  while (j < m) {
    result[k] = arr2[j];
    j++;
    k++;
  }

  return result;
}

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];

const mergedArray = twoArraySorted(arr1, a, arr2, b);
console.log('The merged array is: ', mergedArray);
//2

function twoSortedArray(arr1, a, arr2, b) {
  const result = new Array(a + b);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a && j < b) {
    if (arr1[i] <= arr2[j]) {
      result[k] = arr1[i];
      i++;
      k++;
    } else {
      result[k] = arr2[j];
      j++;
      k++;
    }
  }

  while (i < a) {
    result[k] = arr1[i];
    i++;
    k++;
  }

  while (j < b) {
    result[k] = arr2[j]; // corrected from arr1[j]
    j++;
    k++;
  }

  return result;
}

(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);

console.log(twoSortedArray(nums1, m, nums2, n));
