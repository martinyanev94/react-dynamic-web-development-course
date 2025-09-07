const ChildComponent = ({ label }) => {
    // This is not correct; we should NOT mutatively change props directly.
    label = "Changed Label";  // Avoid doing this!

    return <button>{label}</button>;
};
