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
  console.log('token:', token)
  const response = await axios.get(
    `${BASE_URL}/${id}`,
    config
  );
  console.log('data', response.data);
  return { Data: response?.data };
}

export const updateProfileById = async (id, data) => {
  const apiUrl = `${BASE_URL}/${id}`;
  console.log("Request URL:", apiUrl);
  try {
    const response = await axios.put(
      `${BASE_URL}/${id}`,
      JSON.stringify(data),
      config
    );
    console.log('Update successfully');
    return response.data;
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error.response ? error.response.data : error.message);
    throw error;
  }
}

