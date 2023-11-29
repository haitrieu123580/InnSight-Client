import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL + '/api/hotel'

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};
export const getHotelById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return { Data: response?.data };
}
export const searchHotels = async (filter) => {
    try {
        const response = await axios.post(`${BASE_URL}/filter/search`, JSON.stringify(filter), config);
        return { Data: response?.data };
    } catch (error) {
        return { Error: error };
    }
};