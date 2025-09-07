import React, { useRef } from 'react';

const Form = () => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Input value: ${inputRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    );
};
