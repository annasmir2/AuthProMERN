import React from 'react';

const Denied = () => {
  return (
    <div className="access-denied-container">
      <div className="access-denied-content">
        <img src="/images/Denied.avif" alt="Access Denied" className="access-denied-image" />
        <h1>Access Denied</h1>
        <p>Failed to load the page. Admin access only.</p>
      </div>
    </div>
  );
};

export default Denied;
