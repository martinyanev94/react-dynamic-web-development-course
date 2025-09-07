const CounterAndToggle = () => {
    const [getCount, setCount] = useCurrent(0);
    const [getToggle, setToggle] = useCurrent(false);

    const onClick = () => {
        setTimeout(() => {
            setCount(getCount() + 1);
            setToggle(!getToggle());
        }, 3000);
    };

    return (
        <div>
            <button onClick={onClick}>Click Me</button>
            <div>Count: {getCount()}</div>
            <div>Status: {getToggle() ? 'On' : 'Off'}</div>
        </div>
    );
};
