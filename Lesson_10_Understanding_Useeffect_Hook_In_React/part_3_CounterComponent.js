import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);

    useEffect(() => {
        const handleIncrement = () => {
            setCount(prevCount => prevCount + increment);
        };

        handleIncrement();
    }, [increment]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setIncrement(prev => prev + 1)}>Increase Increment</button>
        </div>
    );
};
