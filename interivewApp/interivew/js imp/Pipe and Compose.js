const add2 = x => x + 2;
const subtract1 = x => x - 1;
const multiply5 = x => x * 5;

const result = multiply5(subtract1(add2(5)));
console.log(result);

const compose =
  (...fns) =>
  val =>
    fns.reduceRight((prev, fn) => fn(prev), val);

const compoFn = compose(multiply5, subtract1, add2);
console.log(compoFn(5));
const pipe =
  (...fns) =>
  val =>
    fns.reduce((prev, fn) => fn(prev), val);
