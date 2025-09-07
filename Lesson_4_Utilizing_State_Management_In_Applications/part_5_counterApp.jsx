import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};

const App = () => (
    <CounterProvider>
        <CounterDisplay />
        <CounterControls />
    </CounterProvider>
);

const CounterDisplay = () => {
    const { count } = useContext(CounterContext);
    return <h1>Current Count: {count}</h1>;
};

const CounterControls = () => {
    const { increment, decrement } = useContext(CounterContext);
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};
