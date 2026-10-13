function appearOnce(arr){
  
  let result  = arr[0]


  for (let i = 1; i < arr.length; i++) {
    result = result ^ arr[i]
  }
return result
}
const arr = [2, 3, 4, 3, 2, 4, 5];
const uniqueElement = appearOnce(arr);
console.log("The element that appears once:", uniqueElement);

// xor 
// 0, 0 = 0
// 1, 0 = 1
// 0, 1 = 1
// 1 , 1= 0

//(a + b) + c = a + (b + c).
