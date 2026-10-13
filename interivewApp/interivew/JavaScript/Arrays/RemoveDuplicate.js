   
 
let arr = ["apple", "mango", "apple",
"orange", "mango", "mango"];

function RemoveDuplicate(arr){
return arr.filter((item, index)=>{
return  arr.indexOf(item)===index;
})
}

console.log(RemoveDuplicate(arr));

//

//2nd
function removeDuplicates(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (input[i] === result[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(input[i]);
        }
    }
    return result;
  }
  
  var input = [1, 2, 3,3];
  console.log(removeDuplicates(input)); // Output: [1, 2, 3, 4, 5,s