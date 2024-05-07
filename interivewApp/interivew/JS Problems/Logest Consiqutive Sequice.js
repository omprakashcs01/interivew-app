function longestConsecutive(arr) {
  if (arr.length == 0) return 0;

  let count = 1;
  let max = 1;
  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] == 1) {
      count++;
      max = Math.max(max, count);
    } else if (arr[i] == arr[i - 1]) {
      continue;
    } else {
      count = 1;
    }
  }
  return max;
}


// gpt code 
function longestConsecutive(arr) {
    if (arr.length == 0) return null;

    let count = 1;
    let max = 1;
    let sorted = arr.sort((a, b) => a - b);

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] - sorted[i - 1] == 1) {
            count++;
            max = Math.max(max, count);
        } else if (sorted[i] - sorted[i - 1] != 0) { // Change here
            count = 1;
        }
    }

    return max;
}

const arr = [1, 2, 0, 1];
console.log(longestConsecutive(arr));  // Output: 3
///////////










// Here are the comments extracted from your code:

// 1. Step1: Sort karo
// 2. Aur dekho ki, [mai - mere_se_pichla_elem == 1?]
// 3. Ek time aisa ayega, ki, consecutive ginn'ne ka streak tut jyega, aur count phirse apne ko 1 se suru krna pdega
//    example: [1 2 3 4 6 7]
//             isme 1234 ka streak rhega, phir 6 pe tut jyega
//             toh 1234 ke liye count aur max dono = 4.
//             6 pe tuta, so, count became 1 (look in else condition)
//             so, 67 ke liye, count=2 , aur max = Math.max(4{from 1234}, 2{from 67})
// 4. yeh step LEARNING hai tere liye. nahi toh tu toh SET laga rha tha duplicate hataane ke liye
