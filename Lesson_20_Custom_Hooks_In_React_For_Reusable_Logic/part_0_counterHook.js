import { useState } from 'react';

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(initialValue);

    return [count, increment, decrement, reset];
}
import React from 'react';
import useCounter from './useCounter';

function CounterComponent() {
    const [count, increment, decrement, reset] = useCounter(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
