import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { buttonStyle, containerStyle } from '../styles/theme';
import axios from 'axios';

function UserDashboard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    username: '',
    password: '',
    eventName: '',
    eventLocation: '',
    eventDates: '',
    eventLink: '',
    affiliations: '',
    media: null, // For file upload
    mediaName: '', // Save media name for display purposes
  });

  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();

  const API_BASE_URL = 'https://cdn.cyberelite.work/api/';

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setFormData({ ...formData, media: file, mediaName: file.name });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      'name',
      'email',
      'mobile',
      'username',
      'password',
      'eventName',
      'eventLocation',
      'eventDates',
      'eventLink',
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').trim()} field.`);
        return;
      }
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'media') {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(`${API_BASE_URL}submissions`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.status) {
        alert('Submission Successful!');
        fetchSubmissions(); // Refresh the submission history
      } else {
        alert('Submission Failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred during submission.');
    }
  };

  // Fetch Submission History
  const fetchSubmissions = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}submissions`);
      if (response.data.status) {
        setSubmissions(response.data.data);
      } else {
        alert('Failed to fetch submissions.');
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  // Logout Functionality
  const handleLogout = () => {
    navigate('/login');
  };

  // Fetch submissions on component load
  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={navStyle}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>DABD CDS</div>
        <div>
          <button onClick={fetchSubmissions} style={navButtonStyle}>
            Refresh Submissions
          </button>
          <button onClick={handleLogout} style={navButtonStyle}>
            Logout
          </button>
        </div>
      </nav>

      {/* Data Submission Form */}
      <div style={containerStyle}>
        <h2>Data Submission Form</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="text" name="eventName" placeholder="Event Name" value={formData.eventName} onChange={handleChange} required />
          <input type="text" name="eventLocation" placeholder="Event Location" value={formData.eventLocation} onChange={handleChange} required />
          <input type="date" name="eventDates" value={formData.eventDates} onChange={handleChange} required />
          <input type="url" name="eventLink" placeholder="Event Link" value={formData.eventLink} onChange={handleChange} required />
          <input type="text" name="affiliations" placeholder="Affiliations/Partnerships" value={formData.affiliations} onChange={handleChange} />
          <label>
            Upload Media:
            <input type="file" name="media" accept="image/*" onChange={handleChange} />
          </label>
          {formData.mediaName && <p style={{ color: '#28A745' }}>Uploaded File: {formData.mediaName}</p>}
          <button type="submit" style={{ ...buttonStyle, backgroundColor: '#28A745', color: '#fff' }}>
            Submit
          </button>
        </form>
      </div>

      {/* Submission History */}
      <div style={containerStyle}>
        <h2>Submission History</h2>
        {submissions.length > 0 ? (
          <ul>
            {submissions.map((submission) => (
              <li key={submission.id}>
                <strong>{submission.eventName}</strong> - {submission.eventLocation} ({submission.status})
              </li>
            ))}
          </ul>
        ) : (
          <p>No submissions found.</p>
        )}
      </div>
    </div>
  );
}

// Styles
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  background: '#007BFF',
  color: '#fff',
};

const navButtonStyle = {
  marginLeft: '10px',
  padding: '8px 15px',
  fontSize: '14px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '5px',
  background: '#FFC107',
  color: '#212529',
};

export default UserDashboard;
