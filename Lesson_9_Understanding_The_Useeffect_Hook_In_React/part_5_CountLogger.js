import React, { useEffect, useState } from 'react';

const CountLogger = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is: ${count}`);
  }, []); // Missing count dependency

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default CountLogger;
useEffect(() => {
  console.log(`Count is: ${count}`);
}, [count]);
