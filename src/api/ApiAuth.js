import axios from "axios";
const BASE_URL = 'http://localhost:8001/api/v1/auth'
const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};
export const SignIn = async (data) => {
    const response = await axios.post(`${BASE_URL}/authenticate`, JSON.stringify(data), config);
    if (response.status === 200) {
        return {
            Data: response?.data
        }
    }
    else {
        return {
            Message: "Error"
        }
    }
}
export const SignUp = async (data) => {
    const response = await axios.post(`${BASE_URL}/register`, JSON.stringify(data), config);
    if (response.status === 200) {
        return { Data: true }
    }
    else {
        return {
            Data: false
        }
    }
}