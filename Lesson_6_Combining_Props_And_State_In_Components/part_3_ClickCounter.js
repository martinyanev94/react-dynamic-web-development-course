const ParentComponent = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleIncrement = () => {
        setClickCount(prevCount => prevCount + 1);
    };

    const handleReset = () => {
        setClickCount(0);
    };

    return (
        <div>
            <ChildComponent label={`Clicked ${clickCount} times`} onClick={handleIncrement} />
            <ResetButton onReset={handleReset} />
        </div>
    );
};

const ChildComponent = ({ label, onClick }) => {
    return (
        <button onClick={onClick}>{label}</button>
    );
};

const ResetButton = ({ onReset }) => {
    return (
        <button onClick={onReset}>Reset</button>
    );
};
