const UserProfile = () => {
    const [user, setUser] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    return (
        <div>
            <h1>User Profile</h1>
            <input 
                type="text" 
                name="name" 
                value={user.name} 
                onChange={handleChange} 
                placeholder="Name" 
            />
            <input 
                type="email" 
                name="email" 
                value={user.email} 
                onChange={handleChange} 
                placeholder="Email" 
            />
            <p>
                Name: {user.name} <br />
                Email: {user.email}
            </p>
        </div>
    );
};

export default UserProfile;
