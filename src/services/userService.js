// src/services/userService.js
import api from '../api/api';

export const registerUser = (data) => {
  return api.post('Users/user_registration', data);
};

export const loginUser = (data) => {
  return api.post('loginAuth/login_verification', data);
};
