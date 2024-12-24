import axios from 'axios';

// Base API URL
const BASE_URL = 'https://cdn.cyberelite.work/api/';

// Token (Replace this with your actual token)
const token = 'OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4';

// Registration API
export const registerUser = (data) =>
  axios.post(
    `${BASE_URL}Users/user_registration`, // Corrected syntax
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Corrected Authorization header
        'Content-Type': 'application/json',
      },
    }
  );

// Login API
export const loginUser = (data) =>
  axios.post(
    `${BASE_URL}loginAuth/login_verification`, // Corrected endpoint URL
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Corrected Authorization header
        'Content-Type': 'application/json',
      },
    }
  );
