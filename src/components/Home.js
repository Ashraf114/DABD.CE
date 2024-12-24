import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={homeStyle}>
      <h1>Welcome to DABD CDS User Interface</h1>
      <p>Your gateway to managing data submissions and analytics.</p>
      <div style={buttonContainer}>
        <button onClick={() => navigate('/login')} style={buttonStyle}>
          Login
        </button>
        <button onClick={() => navigate('/register')} style={buttonStyle}>
          Register
        </button>
      </div>
    </div>
  );
}

const homeStyle = {
  textAlign: 'center',
  padding: '50px',
};

const buttonContainer = {
  marginTop: '20px',
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default Home;
