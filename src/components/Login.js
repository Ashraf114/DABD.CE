import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';  // Corrected import path

function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    user_type: 'user',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({
        username: credentials.username,
        password: credentials.password
      });
      if (response.data.status) {
        switch (credentials.user_type) {
          case 'user':
            navigate('/user-dashboard');
            break;
          case 'admin':
            navigate('/admin-dashboard');
            break;
          case 'marketing':
            navigate('/marketing-dashboard');
            break;
          default:
            alert('Login Failed: Unknown role');
        }
      } else {
        alert(response.data.message || 'Login failed!');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div style={loginStyle}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <select name="user_type" onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="marketing">Marketing</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const loginStyle = {
  maxWidth: '400px',
  margin: '20px auto',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

export default Login;
