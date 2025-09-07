import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

const App = () => {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
};

export default App;
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
            <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemedComponent;
