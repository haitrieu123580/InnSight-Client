import axios from "axios";
const BASE_URL = `http://localhost:8001/api/hotel`

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        // Accept: 'application/json'
    },
};
export const AddHotel = async (userID,newHotel) => {
    const response = await axios.post(`${BASE_URL}/${userID}`, newHotel, config);
    console.log("res call",response)
    if (response.status === 201) {
        return { Data: true }
    }
    else {
        return {
            Data: false
        }
    }
  
}
