const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <CounterDisplay count={count} />
            <CounterControls increment={increment} decrement={decrement} />
        </div>
    );
};

const CounterDisplay = ({ count }) => (
    <h1>Current Count: {count}</h1>
);

const CounterControls = ({ increment, decrement }) => (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
);
