const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const updateUser = (newUser) => {
        setUser(newUser);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, user, updateUser }}>
            {children}
        </ThemeContext.Provider>
    );
};
