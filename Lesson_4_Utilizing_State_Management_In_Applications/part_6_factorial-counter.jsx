const App = () => {
    const [count, setCount] = useState(0);

    const factorial = useMemo(() => {
        const calculateFactorial = n => (n <= 0 ? 1 : n * calculateFactorial(n - 1));
        return calculateFactorial(count);
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Factorial: {factorial}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};
