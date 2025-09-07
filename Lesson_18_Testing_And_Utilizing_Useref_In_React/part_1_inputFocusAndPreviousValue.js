import { render, screen } from '@testing-library/react';
import FocusInput from './FocusInput';

test('input should be focused on mount', () => {
    render(<FocusInput />);
    const inputElement = screen.getByPlaceholderText('Focus me on mount!');
    
    expect(document.activeElement).toBe(inputElement);
});
import React, { useEffect, useRef } from 'react';

const PreviousValue = ({ value }) => {
    const prevValueRef = useRef(); 

    useEffect(() => {
        prevValueRef.current = value; 
    }, [value]);

    return (
        <div>
            <h1>Current Value: {value}</h1>
            <h2>Previous Value: {prevValueRef.current}</h2>
        </div>
    );
};
