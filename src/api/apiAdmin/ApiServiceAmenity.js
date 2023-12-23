import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL + '/api/admin'

// SERVICE
export const searchServiceAndAmenity = async ({ name, token, pageIndex = 0, pageSize = 100 }) => {
  const response = await axios.get(
    `${BASE_URL}/roomAmenity/search`,
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

export const updateService = async ({data, token}) => {
  const response = await axios.put(
    `${BASE_URL}/hotelService`,
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

export const addService = async ({data, token}) => {
  const response = await axios.post(
    `${BASE_URL}/hotelService`,
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

export const deleteService = async ({id, token}) => {
  const response = await axios.delete(
    `${BASE_URL}/hotelService/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { Data: response?.data };
}

// AMENITY

export const updateAmenity = async ({data, token}) => {
  const response = await axios.put(
    `${BASE_URL}/roomAmenity`,
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

export const addAmenity = async ({data, token}) => {
  const response = await axios.post(
    `${BASE_URL}/roomAmenity`,
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

export const deleteAmenity = async ({id, token}) => {
  const response = await axios.delete(
    `${BASE_URL}/roomAmenity/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { Data: response?.data };
}

