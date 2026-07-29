function isValid(s) {
  let stack = [];
  for (let idx = 0; idx < s.length; idx++) {
    if (s[idx] == '{') {
      stack.push('}');
    } else if (s[idx] == '[') {
      stack.push(']');
  } else if (s[idx] == '(') {
      stack.push(')');
    } else if (stack.pop() !== s[idx]) {
      return false;
    }
  }
  return !stack.length;
}

// NEW

function validParentheses(str) {
  let stack = [];

  for (let char of str) {
    if (char === '{') stack.push('}');
    else if (char === '[') stack.push(']');
    else if (char === '(') stack.push(')');
    else if (stack.length === 0 || stack.pop() !== char) return false;
  }

  return stack.length === 0;
}
