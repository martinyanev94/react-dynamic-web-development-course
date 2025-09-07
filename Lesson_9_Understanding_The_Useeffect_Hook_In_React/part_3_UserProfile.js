import React, { useEffect, useState } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(`https://api.example.com/user/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]); // Effect runs every time userId changes

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;
