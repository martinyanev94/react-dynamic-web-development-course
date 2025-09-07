import React, { useState, useMemo } from 'react';

const PaginatedNameSearch = ({ names }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 5;

    const filteredNames = useMemo(() => {
        return names.filter(name => 
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, names]);

    const paginatedNames = useMemo(() => {
        const startIndex = (currentPage - 1) * resultsPerPage;
        return filteredNames.slice(startIndex, startIndex + resultsPerPage);
    }, [filteredNames, currentPage]);

    const totalPages = Math.ceil(filteredNames.length / resultsPerPage);

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search names..." 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} 
            />
            <ul>
                {paginatedNames.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
            <div>
                {[...Array(totalPages)].map((_, pageIndex) => (
                    <button 
                        key={pageIndex} 
                        onClick={() => setCurrentPage(pageIndex + 1)} 
                        disabled={currentPage === pageIndex + 1}
                    >
                        {pageIndex + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PaginatedNameSearch;
