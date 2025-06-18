import React from 'react';
import Logout from './Logout';

const UserDashboard = () => {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center bg-info text-dark">
      <h2>Welcome to User Dashboard</h2>
      <Logout />
    </div>
  );
}

export default UserDashboard;