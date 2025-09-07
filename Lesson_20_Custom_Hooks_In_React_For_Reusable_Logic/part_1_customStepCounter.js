function useCounter(initialValue = 0, step = 1) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(c => c + step);
    const decrement = () => setCount(c => c - step);
    const reset = () => setCount(initialValue);

    return [count, increment, decrement, reset];
}
function CustomStepCounter() {
    const [count, increment, decrement, reset] = useCounter(0, 5);

    return (
        <div>
            <h1>Custom Step Counter: {count}</h1>
            <button onClick={increment}>Increment by 5</button>
            <button onClick={decrement}>Decrement by 5</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
