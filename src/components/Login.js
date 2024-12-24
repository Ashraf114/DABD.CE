import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Credentials:', credentials);
    if (credentials.user_type === 'user') navigate('/user-dashboard');
    else alert('Role not implemented yet.');
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
