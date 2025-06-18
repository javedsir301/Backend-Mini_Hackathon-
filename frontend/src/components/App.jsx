import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;