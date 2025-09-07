import React, { useState, useEffect } from 'react';

const SubscriptionExample = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const handleStatusChange = (status) => {
      setIsOnline(status);
    };

    window.addEventListener('online', () => handleStatusChange(true));
    window.addEventListener('offline', () => handleStatusChange(false));

    // Cleanup function
    return () => {
      window.removeEventListener('online', () => handleStatusChange(true));
      window.removeEventListener('offline', () => handleStatusChange(false));
    };
  }, []); // Run on component mount and cleanup on unmount

  return (
    <div>
      <p>You are {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
