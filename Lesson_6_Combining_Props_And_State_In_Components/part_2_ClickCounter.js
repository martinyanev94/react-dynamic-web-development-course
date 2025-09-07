import React, { useState } from 'react';

const ParentComponent = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <ChildComponent label={`Clicked ${clickCount} times`} onClick={handleClick} />
        </div>
    );
};

const ChildComponent = ({ label, onClick }) => {
    return (
        <button onClick={onClick}>{label}</button>
    );
};
