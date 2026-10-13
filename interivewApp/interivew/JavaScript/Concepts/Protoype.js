let data = {
  FullName: function () {
    return this.name + ' ' + this.lastName;
  },
};

let student = {
  name: 'Om',
  lastName: 'Prakash',
};

let student1 = {
  name: 'Deepak',
  lastName: 'Kumar',
};

student.__proto__ = data;
student1.__proto__ = data;

console.amelog(student.FullName());

console.log(student1.FullName());

// new
let object = {
  n: 'Om',
  city: 'Delhi',

  getInfo: function () {
    return this.name + ' ' + this.city;
  },
};


let object2 = {
  name: 'Deepak',
};

object2.__proto__ = object;

console.log(object2.city);

//

// let object = {
//   name: 'Akshay',
//   city: 'Dehradun',
//   getIntro: function () {
//     console.log(this.name + ' from ' + this.city);
//   },
// };

// let object2 = Object.create(object);
// object2.name = 'Aditya';
// object2.city = 'Hyderabad';

// object.getIntro(); // Output: Akshay from Dehradun
// object2.getIntro(); // Output: Aditya from Hyderabad
