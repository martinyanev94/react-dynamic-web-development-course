import React, { useEffect, useState } from 'react';

const InfiniteLoopExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1); // This will create an infinite loop
  }, [count]);

  return <h1>{count}</h1>;
};

export default InfiniteLoopExample;
useEffect(() => {
  if (count < 10) { // Limit to prevent infinite looping
    setCount(count + 1);
  }
}, [count]);
