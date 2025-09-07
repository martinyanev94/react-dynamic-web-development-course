import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import Product from './Product';

const App = () => {
    const [selectedPage, setSelectedPage] = useState('home');

    return (
        <div>
            <Nav selected={selectedPage} onSelect={setSelectedPage} />
            <Routes selected={selectedPage} />
        </div>
    );
};

export default App;
