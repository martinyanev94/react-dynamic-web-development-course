// Logo.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

const Logo = () => {
    const { user, changeUser } = useContext(UserContext);
    const { imageUrl, username } = user;

    const onLogout = () => {
        changeUser({});
    };

    return (
        <div>
            {username ? (
                <>
                    <img src={imageUrl} alt="User Avatar" />
                    <span>{username}</span>
                    <button onClick={onLogout}>Logout</button>
                </>
            ) : (
                <span>Please log in.</span>
            )}
        </div>
    );
};

export default Logo;
