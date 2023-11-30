import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL + '/api/admin/management/user'

export const getListUser = async ({ pageIndex = 1, pageSize = 10, token }) => {
  const response = await axios.get(
    `${BASE_URL}/list`,
    {
      params: {
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

export const deleteUserById = async ({ id, token }) => {
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

export const getDetailUser = async ({ id, token }) => {
  const response = await axios.get(
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