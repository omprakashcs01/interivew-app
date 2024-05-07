function isValid (s) {
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
