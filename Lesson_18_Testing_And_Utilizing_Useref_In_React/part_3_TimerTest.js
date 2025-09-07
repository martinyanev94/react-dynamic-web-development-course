import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        
        return () => clearInterval(intervalRef.current);
    }, []);

    return <h1>Count: {count}</h1>;
};
import { render, screen } from '@testing-library/react';
import Timer from './Timer';
import { act } from 'react-dom/test-utils';

jest.useFakeTimers();

test('it increments count every second', () => {
    render(<Timer />);
    
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();

    act(() => {
        jest.advanceTimersByTime(3000); // Fast-forward 3 seconds
    });

    expect(screen.getByText(/Count: 3/i)).toBeInTheDocument();
});
