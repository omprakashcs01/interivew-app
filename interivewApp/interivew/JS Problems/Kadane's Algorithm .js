function subArray(arr) {
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currantSum = 0;

    for (let j = i; j < arr.length; j++) {
      currantSum = currantSum + arr[j];
      if (currantSum > maxSum) {
        maxSum = currantSum;
      }
    }
  }

  return maxSum;
}

arr = [1, -2, 3, -4, 5, -6];

function maxSubArray(arr) {
  let csum = [0];
  let osum = [0];

  for (let i = 0; i < arr.length; i++) {
    if (csum > 0) {
      csum += arr[i];
    } else {
      csum = arr[i];
    }

    if (csum > osum) {
      osum = csum;
    }
  }
  return osum;
}

console.log(maxSubArray(arr));

//current

arr = [5, 4, -1, 7, 8];

function maxSubArray(arr){

    let currentSum = arr[0]
    let overallSum= arr[0]

    for(let i=1; i<arr.length; i++){
        if(currentSum>0) {
            currentSum  += arr[i]
        } else {
            currentSum = arr[i]
        }

        if(currentSum> overallSum){
            overallSum =currentSum
        }
    }
    return overallSum
}

console.log(maxSubArray(arr));
