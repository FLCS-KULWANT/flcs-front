// src/services/programService.js

import axios from 'axios';

export const fetchPrograms = async (page, limit, instituteId) => {
  try {
    let url = `https://flcs-server.onrender.com/flcs_api/course?page=${page}&limit=${limit}`;
    

    if (instituteId && instituteId.trim() !== '') {
      url += `&institute=${instituteId}`;
    }
    
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
