import React from 'react';
import Logout from './Logout';

const AdminDashboard = () => {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center bg-dark text-white">
      <h2>Welcome to Admin Dashboard</h2>
      <Logout />
    </div>
  );
}

export default AdminDashboard;