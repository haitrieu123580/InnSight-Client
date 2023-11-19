import axios from 'axios';

const BASE_URL = 'http://localhost:8001/api/reservation/history?userId='

const config = {
    headers: {
      'Content-Type': 'application/json',
    },
};

export const getHistoryById = async (id) => {
  console.log('id:', id)
  const response = await axios.get(
    `${BASE_URL}${id}`,
    config
    );
  console.log('data',response.data);
  return { Data: response?.data };
}


