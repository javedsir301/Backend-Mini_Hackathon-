import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => navigate('/login');
  return <button onClick={handleLogout} className="btn btn-danger mt-3">Logout</button>;
};

export default Logout;
