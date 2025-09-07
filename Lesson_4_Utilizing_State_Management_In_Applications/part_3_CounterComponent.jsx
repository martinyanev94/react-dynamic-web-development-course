const Counter = () => {
    const [state, setState] = useState({
        count: 0,
        increments: 0,
        decrements: 0,
    });

    const increment = () => {
        setState(prevState => ({
            ...prevState,
            count: prevState.count + 1,
            increments: prevState.increments + 1,
        }));
    };

    const decrement = () => {
        setState(prevState => ({
            ...prevState,
            count: prevState.count - 1,
            decrements: prevState.decrements + 1,
        }));
    };

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <h2>Increments: {state.increments}</h2>
            <h2>Decrements: {state.decrements}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};
