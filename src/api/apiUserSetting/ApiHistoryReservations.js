import axios from 'axios';
const BASE_URL = process.env.REACT_APP_SERVER_URL + '/api/reservation/history'
export const getHistoryById = async (token) => {
  const response = await axios.get(
    BASE_URL,
    {
      headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      },
    }
    );
  return { Data: response?.data };
}


