import React, { useState, useCallback } from 'react';

const UserProfile = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: ''
    });

    const updateUser = useCallback((newData) => {
        setUserData(prevData => ({ ...prevData, ...newData }));
    }, []);

    return (
        <div>
            <UserForm updateUser={updateUser} />
            <DisplayUser userData={userData} />
        </div>
    );
};

// UserForm and DisplayUser components remain unchanged
