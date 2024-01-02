import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL + '/api/admin/hotels'

export const getListHotels = async (token) => {
  const response = await axios.get(
    `${BASE_URL}/pending`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { Data: response?.data };
}

export const declineRequest = async ({ token, hotelId }) => {
  const response = await axios.post(
    `${BASE_URL}/${hotelId}/decline`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { Data: response?.data };
}

export const approveRequest = async ({ token, hotelId }) => {
  const response = await axios.post(
    `${BASE_URL}/${hotelId}/approve`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { Data: response?.data };
}
