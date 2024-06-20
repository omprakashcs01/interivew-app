//polyfill Map
// Array.map((num, i, arr) => {});

Array.prototype.myMap = cb => {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

/////polyfill filter
// Array.flitter((num, i, arr) => {});

Array.prototype.myFilter = cb => {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
};

// arr.reduce((acc, curr, i)=>{},initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};
const arr = [1, 2];

const polyfill = arr.myReduce((acc, curr) => {
  return acc + curr;
});

console.log(polyfill);
