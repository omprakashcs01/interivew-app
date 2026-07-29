function findMinDiff(arr, packet) {
  const n = arr.length;

  // If there are no packets or number of packets is less than the number of children
  if (packet === 0 || n === 0 || n < packet) {
    return -1;
  }

  // Sort packets
  arr.sort((a, b) => a - b);

  let minDiff = Number.MAX_VALUE;

  // Find the minimum difference
  for (let i = 0; i + packet - 1 < n; i++) {
    let diff = arr[i + packet - 1] - arr[i];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}

// Example usage
const packets = [
  12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50,
];
const m = 7;
console.log(findMinDiff(packets, m)); // Output: 10
