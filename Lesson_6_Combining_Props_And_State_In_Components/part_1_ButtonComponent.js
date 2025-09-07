const ParentComponent = () => {
    const buttonLabel = "Click Me!";

    return (
        <div>
            <ChildComponent label={buttonLabel} />
        </div>
    );
};

const ChildComponent = ({ label }) => {
    return (
        <button>{label}</button>
    );
};
