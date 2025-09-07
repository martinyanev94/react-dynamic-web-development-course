import React, { useState } from 'react';

const AuthToggle = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div>
            <h1>{isLoggedIn ? "Welcome User!" : "Please Log In"}</h1>
            <button onClick={toggleLogin}>{isLoggedIn ? "Log Out" : "Log In"}</button>
        </div>
    );
};

export default AuthToggle;
