function longestCommonPrefix(str) {
  if (str.length == 0) return '';

  for (let i = 0; i < str[0].length; i++) {
    for (let j = 1; j < str.length; j++) {
      if (str[0][i] !== str[j][i]) {
        return str[0].slice(0, i);
      }
    }
  }
  return str[0]; 
}
//https://www.youtube.com/watch?v=0SF6RLMYBcE

//https://www.youtube.com/watch?v=0SF6RLMYBcE

//

function longestCommonPrefix(str) {
  str = str.sort();

  let result = '';

  let first = str[0].split('');
  let last = str[str.length - 1].split('');

  for (let i = 0; i < str.length; i++) {
    if (last[i] == first[i]) {
      result += last[i];
    } else {
      break;
    }
  }
  return result;
}

//https://www.youtube.com/watch?v=gIseUl0sO58
