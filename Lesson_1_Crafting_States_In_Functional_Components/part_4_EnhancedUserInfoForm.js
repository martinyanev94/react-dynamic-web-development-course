import React, { useState } from 'react';

const EnhancedUserInfoForm = () => {
    const [userInfo, setUserInfo] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Info:', userInfo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={userInfo.name} 
                onChange={handleChange} 
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={userInfo.email} 
                onChange={handleChange} 
            />
            <button type="submit">Submit</button>
            {userInfo.email && (
                <div>
                    <h2>Email Provided: {userInfo.email}</h2>
                    <p>Thank you for providing your email!</p>
                </div>
            )}
        </form>
    );
};

export default EnhancedUserInfoForm;
