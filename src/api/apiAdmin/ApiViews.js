import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL + '/api/admin/views'

export const updateViews = async ({id, data, token}) => {
  const response = await axios.put(
    `${BASE_URL}/${id}`,
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

export const addViews = async ({data, token}) => {
  const response = await axios.post(
    BASE_URL,
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

export const deleteViews = async ({id, token}) => {
  const response = await axios.delete(
    `${BASE_URL}/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { Data: response?.data };
}

export const searchViews = async ({ name, token }) => {
  const response = await axios.get(
    `${BASE_URL}/search`,
    {
      params:{
        name
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { Data: response?.data };
}