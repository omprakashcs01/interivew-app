function FindElementAppearanceOnce(arr) {


  let result = 0;

  for(let i = 0; i <arr.length;i++){
    result = result ^ arr[i];
  }

  return result;
}

const arr = [2, 3, 4, 3, 2, 4, 5];
const uniqueElement = findElementAppearsOnce(arr);
console.log("The element that appears once:", uniqueElement);