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
////////////////////////
// define custom reduce()
if (!Array.prototype.customReduce) {
  Array.prototype.customReduce = function (callback, initialValue) {
    let accumulator;
    let firstIndex;
    //we get only the callback param,in this case we know initialValue is not pass and
    //we set the accumulator to be with the first item and set firstIndex to be 1
    if (arguments.length === 1) {
      accumulator = this[0];
      firstIndex = 1;
    }
    //we get both callback and initialValue
    //in this case we set the accumulator to initialValue and firstIndex to be 0
    else {
      accumulator = initialValue;
      firstIndex = 0;
    }
    //we will iterate on each item in the array (depend what we set for the firstIndex)
    //and each time we keep the new accumulator
    for (let index = firstIndex; index < this.length; index++) {
      accumulator = callback(accumulator, this[index], index);
    }
    //when iteration is done we return the accumulator
    return accumulator;
  };
}

// declare an array
var numbers = [1, 2, 3, 4, 5];
//function getSum(total, num) {
//  return total + num;
//}
//console.log(numbers.customReduce(getSum))

// call custom reduce() on array to get sum of all elements
console.log(numbers.customReduce((total, num) => total + num, 0));
// prints 15
