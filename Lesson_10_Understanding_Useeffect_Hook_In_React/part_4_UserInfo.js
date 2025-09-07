import React, { useEffect, useState } from 'react';

const UserInfo = () => {
    const [userData, setUserData] = useState(null);
    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        fetch('https://api.example.com/user')
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        const handleStatusChange = status => {
            setIsOnline(status);
        };

        window.addEventListener('online', () => handleStatusChange(true));
        window.addEventListener('offline', () => handleStatusChange(false));

        return () => {
            window.removeEventListener('online', () => handleStatusChange(true));
            window.removeEventListener('offline', () => handleStatusChange(false));
        };
    }, []);

    return (
        <div>
            {userData ? <h1>{userData.name}</h1> : <p>Loading user data...</p>}
            <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};
