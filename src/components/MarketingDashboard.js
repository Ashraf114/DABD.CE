import React, { useState, useEffect } from 'react';
import { buttonStyle, containerStyle } from '../styles/theme';

function MarketingDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [filters, setFilters] = useState({
    eventName: '',
    eventLocation: '',
    eventDate: '',
  });

  // Fetch submissions from localStorage
  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    setSubmissions(storedSubmissions);
  }, []);

  // Handle Filter Change
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Apply Filters
  const filteredSubmissions = submissions.filter((sub) => {
    return (
      (!filters.eventName || sub.eventName.toLowerCase().includes(filters.eventName.toLowerCase())) &&
      (!filters.eventLocation || sub.eventLocation.toLowerCase().includes(filters.eventLocation.toLowerCase())) &&
      (!filters.eventDate || sub.eventDates === filters.eventDate)
    );
  });

  // Approve Submission
  const handleApprove = (id) => {
    const updatedSubmissions = submissions.map((sub) =>
      sub.id === id ? { ...sub, status: 'Approved' } : sub
    );
    setSubmissions(updatedSubmissions);
    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
    alert('Submission Approved!');
  };

  // Reject Submission
  const handleReject = (id) => {
    const updatedSubmissions = submissions.map((sub) =>
      sub.id === id ? { ...sub, status: 'Rejected' } : sub
    );
    setSubmissions(updatedSubmissions);
    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
    alert('Submission Rejected!');
  };

  // Delete Submission
  const handleDelete = (id) => {
    const updatedSubmissions = submissions.filter((sub) => sub.id !== id);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
    alert('Submission Deleted!');
  };

  return (
    <div style={containerStyle}>
      <h2>Marketing Dashboard</h2>

      {/* Filters */}
      <div style={{ marginBottom: '20px' }}>
        <h4>Filter Submissions</h4>
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={filters.eventName}
          onChange={handleFilterChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="eventLocation"
          placeholder="Event Location"
          value={filters.eventLocation}
          onChange={handleFilterChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="date"
          name="eventDate"
          value={filters.eventDate}
          onChange={handleFilterChange}
        />
      </div>

      {/* Submissions Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#007BFF', color: '#fff' }}>
            <th>Event Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Link</th>
            <th>Affiliations</th>
            <th>Status</th>
            <th>Uploaded File</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSubmissions.map((sub) => (
            <tr key={sub.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{sub.eventName}</td>
              <td>{sub.eventDates}</td>
              <td>{sub.eventLocation}</td>
              <td>
                <a href={sub.eventLink} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </td>
              <td>{sub.affiliations || 'N/A'}</td>
              <td>{sub.status || 'Pending'}</td>
              <td>
                {sub.media ? (
                  <a
                    href={URL.createObjectURL(sub.media)} // Generate a URL for the uploaded file
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View File
                  </a>
                ) : (
                  'No File'
                )}
              </td>
              <td>
                <button onClick={() => handleApprove(sub.id)} style={buttonStyle}>
                  Approve
                </button>
                <button onClick={() => handleReject(sub.id)} style={buttonStyle}>
                  Reject
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

export default MarketingDashboard;
