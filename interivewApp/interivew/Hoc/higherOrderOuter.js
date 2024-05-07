import React, { useState } from 'react';

export const higherOdderOuter = (Student) => {
  const HigherOdderInner = () => {
    const [count, setCount] = useState(0);

    function increment() {
      setCount((prev) => prev + 1); // Corrected increment function
    }

    return <Student count={count} increment={increment} />;
  };

  return HigherOdderInner;
};
