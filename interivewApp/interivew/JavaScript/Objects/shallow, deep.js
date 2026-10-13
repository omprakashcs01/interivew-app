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

//new 

//Primitive — copied by value
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

/// Reference — copied by reference value 


let user1 = { name: "John" };
let user2 = user1;

user2.name = "Alex";

console.log(user1.name); // Alex
console.log(user2.name); // Alex


//Important interview question: Object comparison
const a = { name: "John" };
const b = { name: "John" };
const c = a;

console.log(a === b); // false
console.log(a === c); // true
//Even though a and b contain identical properties, they are different objects.