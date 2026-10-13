function longestPalindrome(s) {
  if (s.length === 0) return '';

  let start = 0;
  let end = 0;

  const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i); // Odd length palindromes
    const len2 = expandAroundCenter(s, i, i + 1); // Even length palindromes
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

// Example usage
const str = 'babad';
console.log(longestPalindrome(str)); // Output: "bab" or "aba"
