import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SubmissionHistory() {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([
      ]);

  const handleDelete = (id) => {
    setSubmissions(submissions.filter((submission) => submission.id !== id));
  };

  const handleEdit = (id) => {
    const submissionToEdit = submissions.find((submission) => submission.id === id);
    navigate('/edit-submission', { state: { submission: submissionToEdit } });
  };

  return (
    <div style={historyStyle}>
      <h2>Submission History</h2>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td>{submission.eventName}</td>
              <td>{submission.eventDate}</td>
              <td>
                <button onClick={() => handleEdit(submission.id)}>Edit</button>
                <button onClick={() => handleDelete(submission.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const historyStyle = {
  padding: '20px',
  textAlign: 'center',
};

export default SubmissionHistory;
