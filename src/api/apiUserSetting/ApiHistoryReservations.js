import axios from 'axios';

// const BASE_URL = 'http://localhost:8001/api/reservation/history?userId='
const BASE_URL = process.env.REACT_APP_SERVER_URL + '/reservation/history'

const config = {
    headers: {
      'Content-Type': 'application/json',
    },
};

export const getHistoryById = async (requestData) => {
  console.log('requestData:', requestData)
  
  const response = await axios.post(
    BASE_URL,
    JSON.stringify(requestData),
    config
    );
  console.log('data',response.data);
  return { Data: response?.data };
}


