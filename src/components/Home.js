import React from 'react';
import { useNavigate } from 'react-router-dom';
import { buttonStyle, containerStyle } from '../styles/theme';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <h1>Welcome to DABD CDS User Interface</h1>
      <p>Your gateway to managing data submissions and analytics.</p>
      <button style={buttonStyle} onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  );
}

export default Home;
