let data = {
    FullName: function () {
      return this.name + " " + this.lastName;
    },
  };
  
  let student = {
    name: "Om",
    lastName: "Prakash",
  };
  
  let student1 = {
    name: "Deepak",
    lastName: "Kumar",
  };
  
       student.__proto__ = data
       student1.__proto__ = data
  
  console.log(student.FullName());
  
  console.log(student1.FullName());
  
  
  