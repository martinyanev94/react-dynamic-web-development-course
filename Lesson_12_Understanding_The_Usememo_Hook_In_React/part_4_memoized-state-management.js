import React, { useState, useMemo, useCallback } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    const incrementCount = useCallback(() => {
        setCount(c => c + 1);
    }, []); // memoizes the function

    const computedValue = useMemo(() => {
        console.log('Computing value...');
        return count + value;
    }, [count, value]); // memoizes the value

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Value: {value}</h2>
            <h2>Computed Value: {computedValue}</h2>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={() => setValue(v => v + 1)}>Increment Value</button>
        </div>
    );
};
