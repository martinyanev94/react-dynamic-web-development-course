const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return <button onClick={increment}>Increment: {count}</button>;
};
