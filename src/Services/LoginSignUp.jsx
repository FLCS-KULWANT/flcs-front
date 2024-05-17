// src/services/LoginSignUp.jsx

import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('https://flcs-server.onrender.com/flcs_api/user/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (name, email, role, password) => {
  try {
    const response = await axios.post('https://flcs-server.onrender.com/flcs_api/user/signup', { name, email, role, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
