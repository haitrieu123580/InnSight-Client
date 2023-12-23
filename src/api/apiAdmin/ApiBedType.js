import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL + '/api/admin/bedTypes'

export const searchBedTypes = async ({ name, token, pageIndex = 0, pageSize = 10 }) => {
  const response = await axios.get(
    `${BASE_URL}/search`,
    {
      params:{
        name,
        pageIndex,
        pageSize,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { Data: response?.data };
}
