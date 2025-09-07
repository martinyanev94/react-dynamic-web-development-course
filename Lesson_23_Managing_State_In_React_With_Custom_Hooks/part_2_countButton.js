const Title = () => {
    const [getCount, setCount] = useCurrent(0);

    const onClick = () => {
        setTimeout(() => {
            setCount(getCount() + 1);
        }, 3000);
    };

    return <button onClick={onClick}>{getCount()}</button>;
};
