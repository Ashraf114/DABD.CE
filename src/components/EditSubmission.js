import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buttonStyle, containerStyle } from '../styles/theme';

function EditSubmission() {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: '',
    eventLocation: '',
    eventDates: '',
    eventLink: '',
    affiliations: '',
  });

  // Fetch submission data for the given ID
  useEffect(() => {
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    const submission = submissions.find((sub) => sub.id === parseInt(id));

    if (submission) {
      setFormData(submission); // Populate form with existing data
    }
  }, [id]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    const updatedSubmissions = submissions.map((sub) =>
      sub.id === parseInt(id) ? { ...formData, id: parseInt(id) } : sub
    );

    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
    alert('Submission updated successfully!');
    navigate('/submission-history'); // Redirect back to history
  };

  return (
    <div style={containerStyle}>
      <h2>Edit Submission</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={formData.eventName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="eventLocation"
          placeholder="Event Location"
          value={formData.eventLocation}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="eventDates"
          value={formData.eventDates}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="eventLink"
          placeholder="Event Link"
          value={formData.eventLink}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="affiliations"
          placeholder="Affiliations/Partnerships"
          value={formData.affiliations}
          onChange={handleChange}
        />
        <button type="submit" style={{ ...buttonStyle, backgroundColor: '#28A745', color: '#fff' }}>
          Update Submission
        </button>
      </form>
    </div>
  );
}

export default EditSubmission;
