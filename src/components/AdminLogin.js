import React, { useState, useEffect } from 'react';
import { fetchUsers, updateSubmissionStatus, deleteUser } from '../services/api';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const usersData = await fetchUsers();
      const submissionsData = await fetchSubmissions();
      setUsers(usersData.data);
      setSubmissions(submissionsData.data);
    };
    loadData();
  }, []);

  const handleStatusChange = async (submissionId, status) => {
    await updateSubmissionStatus(submissionId, status);
    // Refresh list or filter out changed item
  };

  const handleUserDeletion = async (userId) => {
    await deleteUser(userId);
    // Filter out deleted user
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* User management */}
      {/* Submission management */}
    </div>
  );
}

export default AdminDashboard;
