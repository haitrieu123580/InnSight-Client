import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL + '/api/admin/revenue'

export const getRevenueByYear = async ({ data, token }) => {
  const response = await axios.post(
    `${BASE_URL}/by-year`,
    JSON.stringify(data),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { Data: response?.data };
}
export const getRevenueAllYear = async (token) => {
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