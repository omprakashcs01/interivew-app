const person1 = {
  name: 'Om Prakash',
  college: 'UTU',
  address: {
    strret: 'Delhi road',
    city: ' dehradun',
  },
};

//  let person2 = Object.assign({}, person1)

m// let person2 = {...person1}; //SHALLOW

// let person2 = JSON.parse(JSON.stringify(person1));

person2.address.city = 'jaipur';

console.log(person1.address.city); //deep shallow
console.log(person2.address.city);
