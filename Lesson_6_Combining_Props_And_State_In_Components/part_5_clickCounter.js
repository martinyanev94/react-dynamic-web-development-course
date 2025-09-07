const ParentComponent = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(prevCount => prevCount + 1);
    };

    const childProps = {
        label: `Clicked ${clickCount} times`,
        onClick: handleClick
    };

    return (
        <div>
            <ChildComponent {...childProps} />
        </div>
    );
};

const ChildComponent = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};
