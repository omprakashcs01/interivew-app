function rotateArray(arr, k) {
    let size = arr.length;
   
    if (size > k) {
        k = k % size;
    }
    reverse(arr, 0, size - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, size - 1);
    return arr;
}

function reverse(arr, left, right) {
    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 1));



//function rotateArray(arr, k) {
//   size = arr.length;  // 8

//   if (size > k) {
//     k = size % k;  
//   }

//   const rotateArray = arr.splice(size-k, size) //7-3=4 ,

//  arr.unshift(...rotateArray)

//  return arr;



// }


// console.log(rotateArray([1, 2, 3, 4, 5,6,7],5));
