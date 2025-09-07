import React, { useEffect, useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        const handler = setTimeout(() => {
            if (query) {
                fetch(`https://api.example.com/search?q=${query}`)
                    .then(response => response.json())
                    .then(data => setResults(data))
                    .catch(err => console.error(err));
            }
        }, 300); // Debounce API call for 300ms

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <ul>
                {results.map(result => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
};
