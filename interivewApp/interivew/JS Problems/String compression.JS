function compress(chars) {
  let n = chars.length;
  let i = 0;
  let index = 0;

  while (i < n) {
    let curr = chars[i];
    let count = 0;

    // Find count of duplicates
    while (i < n && chars[i] === curr) {
      i++;
      count++;
    }

    // Assign it to chars and move index ahead to add the count
    chars[index++] = curr;

    // Add the count
    if (count > 1) {
      let countStr = count.toString();
      for (let ch of countStr) {
        chars[index++] = ch;
      }
    }
  }

  return index;
}
