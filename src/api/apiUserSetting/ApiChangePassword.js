import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL + '/api/user/changePassword'

export const changePassword = async ({data, token}) => {
  try {
    const response = await axios.put(
      BASE_URL,
      JSON.stringify(data),
      { 
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error.response ? error.response.data : error.message);
    throw error;
  }
}

