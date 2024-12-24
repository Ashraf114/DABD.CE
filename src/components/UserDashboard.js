import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <nav style={navStyle}>
        <button onClick={() => navigate('/user-dashboard')}>Dashboard</button>
        <button onClick={() => navigate('/submission-history')}>Submission History</button>
        <button onClick={() => navigate('/')}>Logout</button>
      </nav>
      <div style={dashboardStyle}>
        <h2>Data Submission Form</h2>
        <form>
          <input type="text" placeholder="Event Name" />
          <input type="text" placeholder="Event Location" />
          <input type="date" placeholder="Event Date" />
          <input type="url" placeholder="Event Link" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px',
  background: '#007BFF',
  color: '#fff',
};

const dashboardStyle = {
  maxWidth: '600px',
  margin: '20px auto',
  padding: '20px',
};

export default UserDashboard;
