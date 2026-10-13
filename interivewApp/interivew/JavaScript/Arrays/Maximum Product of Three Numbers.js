function MaximumProductThree (arr){

    arr = arr.sort((a,b)=> a-b)

    const n = arr.length

    const minProduct = arr[0] *arr[1] * arr[n-1]

    const maxProduct =arr[n-1]* [n-2]* [n-3]

    return Math.max(minProduct,maxProduct)
    
}

console.log(MaximumProductThree([1,2,3]));