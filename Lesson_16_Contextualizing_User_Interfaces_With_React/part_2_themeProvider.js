const App = ({ theme }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <Header />
            <MainContent />
            <Footer />
        </ThemeContext.Provider>
    );
};
const Header = () => {
    const theme = useContext(ThemeContext);
    const newValue = { ...theme, primaryColor: 'blue' };

    return (
        <ThemeContext.Provider value={newValue}>
            <Button />
        </ThemeContext.Provider>
    );
};
