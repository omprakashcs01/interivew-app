function removeDuplicates(arr){
    let arr = [1, 2, 2, 3, 4, 4, 5];
let arrWithoutDuplicates = [];
for (let i = 0; i < arr.length; i++) {
    if (!arrWithoutDuplicates.includes(arr[i])) {
        arrWithoutDuplicates.push(arr[i]);
    }
}

}

console.log(arrWithoutDuplicates);
