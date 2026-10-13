function counterCreator(arr) {
  let index = 0; // Initialize the index to keep track of the current position in the array
  let counters = {}; // Object to store the counts for each key

  return function counter() {
    // Get the current item from the array
    const item = arr[index];

    // Get the key of the current item (e.g., "A", "B", "C")
    const key = Object.keys(item)[0];

    // If this key has been encountered before, increment its counter, otherwise initialize it to 1
    if (counters[key] === undefined) {
      counters[key] = 1;
    } else {
      counters[key]++;
    }

    // Move to the next item in the array
    index = (index + 1) % arr.length;

    // Return the key and the current count for this key
    return `${key}: ${counters[key]}`;
  };
}

// Example usage:
let a = [{A: 0}, {B: 0}, {C: 0}];
let counter = counterCreator(a);

console.log(counter()); // Output: "A: 1"
console.log(counter()); // Output: "B: 1"
console.log(counter()); // Output: "C: 1"
console.log(counter()); // Output: "A: 2"
console.log(counter()); // Output: "B: 2"
console.log(counter()); // Output: "C: 2"
