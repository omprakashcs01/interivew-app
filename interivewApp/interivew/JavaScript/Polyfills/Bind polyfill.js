const student1 = {
  name: 'Om Prakash',
  age: 25,
  college: 'UTU',
  allData: function (country) {
    // Check if country is provided; otherwise, set it to an empty string
    const countryParam = country || '';
    return 'Welcome ' + this.name + ' ' + this.college + ' ' + countryParam;
  },
};

const student2 = {
  name: 'Deppak',
  age: 26,
  college: 'Some College', // Add a college property to student2
};

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + " cannot be bound as it's not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = student1.allData.myBind(student2, 'UK'); // Pass only the country argument

console.log(newFunc());
