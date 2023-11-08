import axios from "axios";
const BASE_URL = 'http://localhost:8001/api/v1/auth'
const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};
export const SignIn = async (data) => {
    const response = await axios.post(`${BASE_URL}/authenticate`, JSON.stringify(data), config);
    return response?.data?.access_token ? { Data: response?.data?.access_token } : { Data: "" }
}
export const SignUp = (data) => {
    return { Message: 'OK' }
}