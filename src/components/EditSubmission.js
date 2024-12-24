import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EditSubmission() {
  const location = useLocation();
  const navigate = useNavigate();
  const submission = location.state?.submission;

  const [formData, setFormData] = useState(submission || {
    eventName: '',
    eventDate: '',
    eventLocation: '',
    eventLink: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Submission:', formData);
    alert('Submission updated successfully!');
    navigate('/submission-history');
  };

  return (
    <div style={formStyle}>
      <h2>Edit Submission</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={formData.eventName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="eventLocation"
          placeholder="Event Location"
          value={formData.eventLocation}
          onChange={handleChange}
        />
        <input
          type="date"
          name="eventDate"
          placeholder="Event Date"
          value={formData.eventDate}
          onChange={handleChange}
        />
        <input
          type="url"
          name="eventLink"
          placeholder="Event Link"
          value={formData.eventLink}
          onChange={handleChange}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

const formStyle = {
  maxWidth: '500px',
  margin: '20px auto',
  padding: '20px',
  background: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

export default EditSubmission;
