// LoginForm.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

const LoginForm = () => {
    const { changeUser } = useContext(UserContext);

    const handleLogin = () => {
        // Simulate user authentication success
        const user = {
            username: 'JohnDoe',
            imageUrl: 'https://example.com/johndoe.jpg'
        };
        changeUser(user);
    };

    return (
        <div>
            <button onClick={handleLogin}>Log in as JohnDoe</button>
        </div>
    );
};

export default LoginForm;
