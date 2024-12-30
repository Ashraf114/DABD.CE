import axios from 'axios';

// Base API URL
const BASE_URL = 'https://cdn.cyberelite.work/api/';

// Token
const token = 'OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4';

// Axios instance with headers including the authorization token
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

// Registration API
export const registerUser = (data) => api.post('Users/user_registration', data);

// Login API
export const loginUser = (data) => api.post('loginAuth/login_verification', data);

// Get all users (for User Management)
export const getUsers = () => api.get('Users');

// Update user role
export const updateUserRole = (userId, role) => api.patch(`Users/${userId}/role`, { role });

// Delete a user
export const deleteUser = (userId) => api.delete(`Users/${userId}`);

// Get all submissions (for Admin Dashboard)
export const getSubmissions = () => api.get('submissions');

// Update submission status (approve, reject)
export const updateSubmissionStatus = (submissionId, status) => api.patch(`submissions/${submissionId}/status`, { status });

// Delete a submission
export const deleteSubmission = (submissionId) => api.delete(`submissions/${submissionId}`);

// Export data to CSV or Excel
export const exportData = () => api.get('submissions/export', { responseType: 'blob' });  // Ensure your backend sends the file as a blob

// Update field settings (for Field Management)
export const updateFieldSettings = (settings) => api.post('settings/field_management', settings);

// Function to add a new user
export const addUser = (userData) => api.post('Users', userData);
export default api;
