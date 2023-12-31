import axios from 'axios';

const token = JSON.parse(localStorage.getItem('Token'));
// const BASE_URL = 'http://localhost:8001/api/user'
const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/api/user`;

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
};

export const getProfileById = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/${id}`,
    config
  );
  return { Data: response?.data };
}

export const updateProfileById = async (id, data) => {
  const apiUrl = `${BASE_URL}/${id}`;
  try {
    const response = await axios.put(
      `${BASE_URL}/${id}`,
      JSON.stringify(data),
      config
    );
    return response.data;
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error.response ? error.response.data : error.message);
    throw error;
  }
}

