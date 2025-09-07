const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });

    const updateUser = (newUser) => {
        setUser(newUser);
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
