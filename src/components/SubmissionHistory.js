import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { buttonStyle, containerStyle } from '../styles/theme';

function SubmissionHistory() {
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();

  // Fetch Submissions from Local Storage
  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    setSubmissions(storedSubmissions);
  }, []);

  // Handle Delete
  const handleDelete = (id) => {
    const updatedSubmissions = submissions.filter((sub) => sub.id !== id);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
    alert('Submission deleted successfully!');
  };

  // Redirect to Edit Page
  const handleEdit = (id) => {
    navigate(`/edit-submission/${id}`); // Redirect with submission ID
  };

  return (
    <div style={containerStyle}>
      <h2>Submission History</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#007BFF', color: '#fff' }}>
            <th>Event Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((sub) => (
            <tr key={sub.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{sub.eventName}</td>
              <td>{sub.eventDates}</td>
              <td>{sub.eventLocation}</td>
              <td>
                <a href={sub.eventLink} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </td>
              <td>
                <button onClick={() => handleEdit(sub.id)} style={buttonStyle}>
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(sub.id)}
                  style={{ ...buttonStyle, backgroundColor: '#DC3545' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubmissionHistory;
