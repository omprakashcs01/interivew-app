const students1 = {
  name: 'Om Prakash',
  age: 26,
  college: 'UTU',

  studentData: function (country) {
    return 'Welcome ' + this.name + ' ' + this.college + ' from ' + country;
  },
};

const students2 = {
  name: 'deepak',
  age: 22,
  college: 'UTU',
};

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + ' is not a callable');
  }

  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

console.log(students1.studentData.myCall(students2, 'UK'));

///////////////////////////////////////////////////////////////
//apply

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error(this + ' is not a function');
  }

  if (!Array.isArray(args)) {
    throw new TypeError('Arguments must be provided as an array');
  }

  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
/////////////////////////////////////////////////////
//bind()
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
