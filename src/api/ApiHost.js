import axios from "axios";
const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_HOTEL_URL}`

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
};
export const AddHotel = async (userID,data) => {
    const response = await axios.post(`${BASE_URL}/${userID}`, JSON.stringify(data), config);
    if (response.status === 200) {
        return { Data: true }
    }
    else {
        return {
            Data: false
        }
    }
}