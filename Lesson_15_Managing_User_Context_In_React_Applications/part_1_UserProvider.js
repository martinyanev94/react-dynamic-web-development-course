// UserContext.js
import React from 'react';

const UserContext = React.createContext();

export default UserContext;
// App.js
import React, { useState } from 'react';
import UserContext from './UserContext';
import Header from './Header';
import Site from './Site';

const App = ({ initialUser }) => {
    const [user, changeUser] = useState(initialUser);
    const value = { user, changeUser };

    return (
        <UserContext.Provider value={value}>
            <div>
                <Header />
                <Site />
            </div>
        </UserContext.Provider>
    );
};

export default App;
