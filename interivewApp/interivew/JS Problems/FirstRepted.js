function findFirstRepatingElement(arr){

    let seen = {}

    for (let i = 0; i < arr.length; i++){
        if (seen[arr[i]] !== undefined) {
            return arr[i];
        }
        return seen[arr[i]] = i
    }

    return null
}

let arr = [10,25,78, 2,2]

function findFirstRepeatingElement(arr) {
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]] !== undefined) {
            return arr[i];
        }
        seen[arr[i]] = i;
    }

    return null;
}


let arr = [1,2,3,4,1,5]

console.log(findFirstRepeatingElement(arr));