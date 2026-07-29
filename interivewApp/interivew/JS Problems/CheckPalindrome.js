var isPalindrome = function (s) {
  // turn string to lowercase and use regex to remove non-alphanumeric
  s = s.toLowerCase();
  s = s.replace(/[^A-Za-z0-9]/g, '');

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
};

//
function isPalindrome(str) {
  let rev = str.split('').reverse().join('');

  if (rev == str) {
    return true;
  }
  return false;
}

let str1 = 'racecar';
let str2 = 'nitin';
let str3 = 'Rama';

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

///
function isPalindrome(str) {
  let rev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (rev == str) {
    return true;
  } else {
    return false;
  }
}

let str1 = 'racecar';
let str2 = 'nitin';
let str3 = 'Rama';

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
