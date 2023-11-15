import axios from 'axios';

// const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aHV5ZW5uZ3V5ZW4wMjA1MTdAZ21haWwuY29tIiwiaWF0IjoxNzAwMDE4MDk4LCJleHAiOjE3MDAxMDQ0OTh9.pgpFCxLMiRLFK7swfn1AK4nb9w8UBNKA3JY7QjsUDkc';
const token = JSON.parse(localStorage.getItem('Token'));
const BASE_URL = 'http://localhost:8001/api/user/changePassword'
const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
};

export const changePassword = async (data) => {
  try {
    const response = await axios.patch(
      BASE_URL,
      JSON.stringify(data),
      config
    );

    console.log('Password changed successfully');
    return response.data;
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error.response ? error.response.data : error.message);
    throw error;
  }
}

