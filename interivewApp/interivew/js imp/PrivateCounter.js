//private counter


function counter() {
  let count = 0;

  function add(increment) {
    count += increment;
  }

  function getData() {
    return `counter = ${count}`;
  }

  return {
    add,
    getData,
  };
}

const result = counter();

result.add(3);
result.add(5);

console.log(result.getData()); // counter = 8