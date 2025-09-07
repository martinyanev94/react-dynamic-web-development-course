import React, { useState, useMemo } from 'react';

function FactorialCalculator() {
    const [number, setNumber] = useState(1);

    const factorial = useMemo(() => {
        const calculateFactorial = (n) => {
            return n <= 1 ? 1 : n * calculateFactorial(n - 1);
        };
        return calculateFactorial(number);
    }, [number]);

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <h2>Factorial of {number} is {factorial}</h2>
        </div>
    );
}
