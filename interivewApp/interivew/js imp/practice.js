function rprivateCounter() {
  let counter = 0;

  return {
    increment() {
      return (counter += 1);
    },

    decreed() {
      return (counter -= 1);
    },

    getData() {
      return counter;
    },
  };
}

let count = rprivateCounter();
console.log(count.increment());
console.log(count.increment());

console.log(count.getData());
