import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buttonStyle, containerStyle } from '../styles/theme';

function MarketingLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication
    if (credentials.username === 'marketing' && credentials.password === 'marketing123') {
      alert('Welcome, Marketing Personnel!');
      navigate('/marketing-dashboard');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Marketing Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Marketing Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        <button type="submit" style={{ ...buttonStyle, backgroundColor: '#007BFF', color: '#fff' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default MarketingLogin;
