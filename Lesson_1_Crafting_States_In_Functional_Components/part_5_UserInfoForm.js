import React, { useState } from 'react';

const UserInfoFormWithReset = () => {
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
        setUserInfo({ name: '', email: '' }); // Reset form fields
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
        </form>
    );
};

export default UserInfoFormWithReset;
