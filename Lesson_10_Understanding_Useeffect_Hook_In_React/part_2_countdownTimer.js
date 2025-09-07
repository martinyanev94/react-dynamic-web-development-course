import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <div>Countdown: {count}</div>;
};
