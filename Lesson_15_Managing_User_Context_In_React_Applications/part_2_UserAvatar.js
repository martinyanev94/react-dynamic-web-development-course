// Logo.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

const Logo = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <img src={user.imageUrl} alt="User Avatar" />
            <span>{user.username}</span>
        </div>
    );
};

export default Logo;
