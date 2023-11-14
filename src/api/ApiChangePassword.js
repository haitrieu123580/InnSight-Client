import axios from 'axios';

const token = JSON.parse(localStorage.getItem('Token'));
const BASE_URL = 'http://localhost:8001/api/user/changePassword'
const config = {
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aHV5ZW5uZ3V5ZW4wMjA1MTdAZ21haWwuY29tIiwiaWF0IjoxNjk5OTUwODcxLCJleHAiOjE3MDAwMzcyNzF9.LDJ0f6tPV4eJ0UuePfA_y0qYJ8JyZptbDVayJYlkj6k`,
    },
};

export const changePassword = async (data) => {
  try {
    const response = await axios.patch(
      BASE_URL,
      JSON.stringify(data),
      config
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error.response ? error.response.data : error.message);
    throw error;
  }
}

