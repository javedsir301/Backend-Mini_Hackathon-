import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import Footer from './Footer';

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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
