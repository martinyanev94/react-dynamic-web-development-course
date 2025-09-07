import React, { useState } from 'react';

const ValidatedUserForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.email) {
            setError('All fields are required!');
            return;
        }
        setSubmitted(true);
        setError('');
        console.log('Form Submitted:', formData);
        setFormData({ firstName: '', lastName: '', email: '' });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {submitted && 
                <p>Thank you, {formData.firstName}! Your data has been submitted.</p>}
        </div>
    );
};

export default ValidatedUserForm;
