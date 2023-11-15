import axios from 'axios';

const BASE_URL = 'http://localhost:8001/api/user'
// const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/api/user`;

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const getProfileById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  console.log('data',response.data);
  return { Data: response?.data };
}

