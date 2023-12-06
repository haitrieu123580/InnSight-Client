import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL + '/api/user'

export const getProfileById = async ({id,token}) => {
  const response = await axios.get(
    `${BASE_URL}/${id}`,
    { 
      headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      },
    }
    );
  return { Data: response?.data };
}

export const updateProfileById = async ({id, data, token}) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/${id}`,
      JSON.stringify(data),
      { 
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error.response ? error.response.data : error.message);
    throw error;
  }
}

