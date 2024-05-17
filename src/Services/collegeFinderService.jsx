// src/services/collegeFinderService.js

import axios from 'axios';

export const fetchInstitutes = async (page, limit) => {
  try {
    const response = await axios.get(`https://flcs-server.onrender.com/flcs_api/institute?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
