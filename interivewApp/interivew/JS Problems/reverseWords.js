function reverseWords(str) {
    let reversedWord = '';
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        reversedWord = str[i] + reversedWord;
      } else {
        reversedStr += reversedWord + ' ';
        reversedWord = '';
      }
    }
    return reversedStr + reversedWord;
  }

  //2

  function reverseWords(str) {
    // Go for it
    return str.split(" ").map(item=> [...item].reverse().join("")).join(" ")
  }

  // function reverseWords(str) {
  //   return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  // }
  
  // let originalString = 'Hello this world!';
  // let reversedString = reverseWords(originalString);
  // console.log(reversedString); // Output: 'olleH siht !dlrow'
  