import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://rolebaseddashboardbackend.vercel.app/login', { email, password })
    .then(result => {
        const { message, role } = result.data;

        if (message === "Wrong password") {
            alert("Incorrect password!");
        } else if (message === "No records found!") {
            alert("User not found!");
        } else if (message === "Success") {
            if (role === "admin") {
                navigate('/admin/dashboard');
            } else if (role === "user") {
                navigate('/user/dashboard');
            } else {
                alert("Unknown role");
            }
        }
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center align-items-center text-center vh-100"
      style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
      <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
        <h2 className='mb-3 text-primary'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label><strong>Email Id</strong></label>
            <input type="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3 text-start">
            <label><strong>Password</strong></label>
            <input type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p className='container my-2'>Don't have an account?</p>
        <Link to='/register' className="btn btn-secondary">Register</Link>
      </div>
    </div>
  );
}

export default Login;