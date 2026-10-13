console.log(myVar); // Outputs: undefined
var myVar = 5;

console.log(myFunc()); // Outputs: "Hello, world!"
function myFunc() {
  return "Hello, world!";
}

console.log(myLetVar); // Throws ReferenceError: myLetVar is not defined
let myLetVar = 10;

console.log(myConstVar); // Throws ReferenceError: myConstVar is not defined
const myConstVar = 20;
