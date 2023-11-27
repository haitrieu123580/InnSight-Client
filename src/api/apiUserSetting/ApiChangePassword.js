import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL + '/user/changePassword'

export const changePassword = async ({data, token}) => {
  console.log("data, token",data, token)
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
    console.log('Password changed successfully');
    return response;
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error.response ? error.response.data : error.message);
    throw error;
  }
}

