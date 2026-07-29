import React, {useState} from 'react';

export const higherOdderOuter = Student => {
  const HigherOdderInner = () => {
    const [count, setCount] = useState(0);

    function increment() {
      setCount(prev => prev + 1); // Corrected increment function
    }

    return <Student count={count} increment={increment} />;
  };

  return HigherOdderInner;
};

//HOF/////////////////////////////////////

// Higher-order function that takes a function and a number as arguments
function applyOperation(operation, num) {
  return operation(num);
}

// Function to double a number
function double(x) {
  return x * 2;
}

// Using the higher-order function
const result = applyOperation(double, 
  5);
console.log(result); // Output: 10
