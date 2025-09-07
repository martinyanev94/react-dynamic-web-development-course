import React, { useState } from 'react';

const UserProfile = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: ''
    });

    const updateUser = (newData) => {
        setUserData(prevData => ({ ...prevData, ...newData }));
    };

    return (
        <div>
            <UserForm updateUser={updateUser} />
            <DisplayUser userData={userData} />
        </div>
    );
};

const UserForm = ({ updateUser }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateUser({ [name]: value });
    };

    return (
        <form>
            <input type="text" name="username" onChange={handleChange} />
            <input type="email" name="email" onChange={handleChange} />
        </form>
    );
};

const DisplayUser = ({ userData }) => {
    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
};

export default UserProfile;
