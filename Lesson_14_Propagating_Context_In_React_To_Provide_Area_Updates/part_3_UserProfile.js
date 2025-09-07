import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const UserProfile = () => {
    const { user, updateUser } = useContext(ThemeContext);

    const handleEmailChange = (event) => {
        updateUser({ ...user, email: event.target.value });
    };

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <input
                type="email"
                value={user.email}
                onChange={handleEmailChange}
                placeholder="Email"
            />
        </div>
    );
};

export default UserProfile;
