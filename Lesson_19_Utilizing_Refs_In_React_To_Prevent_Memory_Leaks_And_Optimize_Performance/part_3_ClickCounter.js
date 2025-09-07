import React, { useRef } from 'react';

const ClickCounter = () => {
    const countRef = useRef(0);

    const handleClick = () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
    };

    return <button onClick={handleClick}>Click me!</button>;
};
