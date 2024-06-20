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
////////////////////////////////////////////////////////////////

const addFive = num => {
  return num + 5;
};

const subOne = num => {
  return num - 1;
};

const multiplyTwo = num => {
  return num * 2;
};

const evolute = compose(addFive, subOne, multiplyTwo);

console.log(evolute(5));

function compose(...args) {
  return function (init) {
    let result = init;
    for (let i = args.length - 1; i >= 0; i--) {
      result = args[i](result);
    }
    return result;
  };
}

///inbuild

function compose(...args) {
  return function (init) {
    return args.reduceRight((acc, curr) => {
      return curr(acc);
    }, init);
  };
}
