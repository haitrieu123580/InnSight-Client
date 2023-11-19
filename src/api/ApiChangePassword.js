import axios from 'axios';

const token = JSON.parse(localStorage.getItem('Token'));
const BASE_URL = 'http://localhost:8001/api/user/changePassword'
const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
};

export const changePassword = async (data) => {
  console.log("data, token",data, token)
  try {
    const response = await axios.put(
      BASE_URL,
      JSON.stringify(data),
      config
    );
    console.log('Password changed successfully');
    return response;
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error.response ? error.response.data : error.message);
    throw error;
  }
}

