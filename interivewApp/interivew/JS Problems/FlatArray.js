function flatArray(arr) {
  const result = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      const newFlatSubArray = flatArray(item);
      acc = acc.concat(newFlatSubArray);
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return result;
}

console.log(
  flatArray([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],3)
);

/// with n

function flatArray(arr, n) {
  const result = arr.reduce((acc, item) => {
    if (Array.isArray(item) && n > 0) {
      const newFlatSubArray = flatArray(item, n - 1);
      acc = acc.concat(newFlatSubArray);
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return result;
}
