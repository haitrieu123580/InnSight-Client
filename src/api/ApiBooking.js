import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL + "/api"

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
export const payment = async (reservation) => {
    try {
        const response = await axios.post(`${BASE_URL}/payment/pay`, JSON.stringify(reservation), config);
        console.log(response)
        return { Data: response?.data };
    } catch (error) {
        return { Error: error };
    }
};

export const reservationDetail = async (requestData) => {
    try {
        const response = await axios.post(`${BASE_URL}/reservation/details`, JSON.stringify(requestData), config);
        console.log(response)
        return { Data: response?.data };
    } catch (error) {
        return { Error: error };
    }
};

export const save_invoice = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/payment/invoices`, JSON.stringify(data), config);
        console.log(response)
        return { Data: response?.data };
    } catch (error) {
        return { Error: error };
    }
};