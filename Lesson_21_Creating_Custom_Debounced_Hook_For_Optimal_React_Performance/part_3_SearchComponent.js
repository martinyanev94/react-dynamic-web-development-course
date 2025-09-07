import React, { useState, useMemo } from 'react';
import useDebounced from './useDebounced';

const SearchComponent = () => {
    const [text, setText] = useState('');
    const debouncedQuery = useDebounced(text, 300);

    const filteredResults = useMemo(() => {
        return fruits.filter(fruit => fruit.includes(debouncedQuery));
    }, [debouncedQuery]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <input type="text" value={text} onChange={handleChange} placeholder="Search fruits..." />
            <ul>
                {filteredResults.map(fruit => (
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
        </>
    );
};
