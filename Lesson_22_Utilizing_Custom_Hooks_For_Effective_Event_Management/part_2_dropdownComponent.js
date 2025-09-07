import React, { useState, useRef } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = () => {
        setIsOpen(false);
    };

    useClickOutside(ref, handleClickOutside);

    return (
        <div ref={ref}>
            <button onClick={toggleDropdown}>Toggle Dropdown</button>
            {isOpen && (
                <div className="dropdown-content">
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                </div>
            )}
        </div>
    );
};
