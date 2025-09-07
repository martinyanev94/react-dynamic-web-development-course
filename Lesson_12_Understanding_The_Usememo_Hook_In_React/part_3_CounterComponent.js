import React, { useState, useMemo } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    const computedValue = useMemo(() => {
        console.log('Computing value...');
        return count + value;
    }, []); // This will only compute once because of the empty array.

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Value: {value}</h2>
            <h2>Computed Value: {computedValue}</h2>
            <button onClick={() => setCount(c => c + 1)}>Increment Count</button>
            <button onClick={() => setValue(v => v + 1)}>Increment Value</button>
        </div>
    );
};
