import React, { useEffect, useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Focusing on the input element when component mounts
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} type="text" placeholder="Focus me on load!" />;
};

export default FocusInput;
