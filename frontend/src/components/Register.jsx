import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === 'admin') {
      alert("Admin accounts are pre-registered. Please login.");
      navigate('/login');
      return;
    }

    axios.post('https://rolebaseddashboardbackend.vercel.app/register', { name, email, password, role })
      .then(res => {
        if (res.data === "Already registered") {
          alert("Email already registered. Please login.");
        } else {
          alert("Registered successfully!");
        }
        navigate('/login');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center align-items-center text-center vh-100"
      style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
      <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
        <h2 className='mb-3 text-primary'>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label><strong>Name</strong></label>
            <input type="text" className="form-control" required onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3 text-start">
            <label><strong>Email Id</strong></label>
            <input type="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3 text-start">
            <label><strong>Password</strong></label>
            <input type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3 text-start">
            <label><strong>Role</strong></label>
            <select className="form-control" onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
        <p className='container my-2'>Already have an account?</p>
        <Link to='/login' className="btn btn-secondary">Login</Link>
      </div>
    </div>
  );
}

export default Register;