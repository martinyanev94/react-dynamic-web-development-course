import React, { useState, useMemo } from 'react';

const NumberList = ({ numbers }) => {
    const [filter, setFilter] = useState('');

    const filteredNumbers = useMemo(() => {
        return numbers.filter(number =>
            number.toString().includes(filter)
        );
    }, [filter, numbers]);

    return (
        <div>
            <input
                type="text"
                placeholder="Filter numbers"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            <ul>
                {filteredNumbers.map((number) => (
                    <li key={number}>{number}</li>
                ))}
            </ul>
        </div>
    );
};

export default NumberList;
