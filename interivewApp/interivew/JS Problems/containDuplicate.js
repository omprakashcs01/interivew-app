function containDuplicate(arr){
 arr= arr.sort()

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return  true
    }
  }
  return false
}

console.log(containDuplicate([1,2,3,4,2,8,6]));