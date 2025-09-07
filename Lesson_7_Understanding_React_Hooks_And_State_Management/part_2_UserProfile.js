import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({ name: '', age: '' });

  const updateName = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const updateAge = (e) => {
    setUser({ ...user, age: e.target.value });
  };

  return (
    <div>
      <input type="text" placeholder="Name" value={user.name} onChange={updateName} />
      <input type="number" placeholder="Age" value={user.age} onChange={updateAge} />
      <p>{`Name: ${user.name}, Age: ${user.age}`}</p>
    </div>
  );
}
