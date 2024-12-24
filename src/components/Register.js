import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    phone: '',
    user_type: 'user', // Default user type is 'user'
  });

  const navigate = useNavigate(); // Used for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration logic
    console.log('Registration Data:', formData);
    
    // Redirect to Login page after successful registration
    alert('Registration Successful!');
    navigate('/login');
  };

  return (
    <div style={registerStyle}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <select name="user_type" value={formData.user_type} onChange={handleChange}>
          <option value="user">User</option>
          <option value="marketing">Marketing</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

const registerStyle = {
  maxWidth: '400px',
  margin: '20px auto',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

export default Register;
