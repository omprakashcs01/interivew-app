function findMissingNumber(arr) { 
	const n = arr.length + 1; 
	const sumOfFirstN = (n * (n + 1)) / 2; 

	let sumOfArray = 0; 
	for(let i = 0; i < n - 1; i++) { 
		sumOfArray = sumOfArray + arr[i]; 
	} 

	

	return missingNumber; 
} 

const arr = [1, 2, 5, 4, 6, 8, 7]; 
const missingNumber = findMissingNumber(arr); 
console.log("Missing Number: ", missingNumber);

//2nd method


function missingNumber (arr){

	const  n = arr.length+1
	let sumArray= 0
	const exactedSum = (n*(n+1))/2
	  
   
	  for(let i=0; i<arr.length; i++) {
		  sumArray = sumArray +arr[i]
	  }


   const missingNumber = exactedSum -sumArray  

   return missingNumber
}

console.log(missingNumber([1,2,3,5]))