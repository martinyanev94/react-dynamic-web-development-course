import React, { useState } from 'react';

const ToggleButton = () => {
    const [isToggled, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle);
    };

    return (
        <button onClick={handleToggle}>
            {isToggled ? 'On' : 'Off'}
        </button>
    );
};

export default ToggleButton;
