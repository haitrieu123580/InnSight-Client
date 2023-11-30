import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL + '/api/reservation/history'

const config = {
    headers: {
      'Content-Type': 'application/json',
    },
};

export const getHistoryById = async (requestData) => {
  const response = await axios.post(
    BASE_URL,
    JSON.stringify(requestData),
    config
    );
  return { Data: response?.data };
}


