import React, { useEffect, useState } from 'react';

const TimerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
};

export default TimerComponent;
