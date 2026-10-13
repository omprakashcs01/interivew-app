
function sumNestedObject(obj) {
  let sum = 0;

  for (let key in obj) {
    if (!Object.hasOwn(obj, key)) continue;

    let value = obj[key];

    if (typeof value === "number") {
      sum += value;
    } else if (value !== null && typeof value === "object") {
      sum += sumNestedObject(value);
    }
  }

  return sum;
}

const obj = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  f: [4, 5],
  g: "hello"
};

console.log(sumNestedObject(obj)); // 15




