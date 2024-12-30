import React, { useState } from 'react';
import { buttonStyle, containerStyle } from '../styles/theme';

function DataSubmissionForm() {
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
    media: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Data:', formData);
    alert('Submission successful!');
  };

  return (
    <div style={containerStyle}>
      <h2>Data Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="eventName" placeholder="Event Name" onChange={handleChange} required />
        <input type="text" name="eventLocation" placeholder="Event Location" onChange={handleChange} required />
        <input type="date" name="eventDates" onChange={handleChange} required />
        <input type="url" name="eventLink" placeholder="Event Link" onChange={handleChange} required />
        <label>
          Upload Media:
          <input type="file" name="media" accept="image/*" onChange={handleChange} />
        </label>
        <button type="submit" style={{ ...buttonStyle, backgroundColor: '#28A745', color: '#fff' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default DataSubmissionForm;
