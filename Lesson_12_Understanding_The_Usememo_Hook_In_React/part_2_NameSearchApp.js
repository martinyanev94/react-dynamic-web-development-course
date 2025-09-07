import React, { useState, useMemo } from 'react';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

    const filteredNames = useMemo(() => {
        return names.filter(name => 
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, names]);

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search names..." 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} 
            />
            <ul>
                {filteredNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};
