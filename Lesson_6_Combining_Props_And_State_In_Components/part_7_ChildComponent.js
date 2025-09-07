const ChildComponent = React.memo(({ label, onClick }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>{label}</button>;
});
