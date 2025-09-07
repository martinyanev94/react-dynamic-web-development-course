// App.js
import React, { useState } from 'react';
import UserContext from './UserContext';
import Header from './Header';
import Site from './Site';
import LoginForm from './LoginForm';

const App = ({ initialUser }) => {
    const [user, changeUser] = useState(initialUser);
    const value = { user, changeUser };

    return (
        <UserContext.Provider value={value}>
            <div>
                <Header />
                {user.username ? <Site /> : <LoginForm />}
            </div>
        </UserContext.Provider>
    );
};

export default App;
