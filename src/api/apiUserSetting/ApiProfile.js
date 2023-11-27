import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL + '/user'

export const getProfileById = async ({id,token}) => {
  console.log('token:', token)
  const response = await axios.get(
    `${BASE_URL}/${id}`,
    { 
      headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      },
    }
    );
  console.log('data',response.data);
  return { Data: response?.data };
}

export const updateProfileById = async ({id, data, token}) => {
    const apiUrl = `${BASE_URL}/${id}`;
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
    console.log('Update successfully');
    return response.data;
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error.response ? error.response.data : error.message);
    throw error;
  }
}

