import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const App = () => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Toolbar />
        </ThemeContext.Provider>
    );
};

const Toolbar = () => {
    return (
        <div>
            <ThemedButton />
        </div>
    );
};

const ThemedButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <button onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}>
            Current theme: {theme}
        </button>
    );
};

export default App;
