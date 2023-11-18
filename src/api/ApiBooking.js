import axios from "axios";
const BASE_URL = `${process.env.REACT_APP_SERVER_URL}`

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};
export const bookingApi = async (reservation) => {
    const response = await axios.post(`${BASE_URL}/reservation/booking`, JSON.stringify(reservation), config);
    console.log(response)
    return { Data: response?.data };
}
export const payment = async () => {
    // try {
    //     const response = await axios.post(`${BASE_URL}/search`, JSON.stringify(filter), config);
    //     return { Data: response?.data };
    // } catch (error) {
    //     return { Error: error };
    // }
};