import axios from "axios";
const BASE_URL = `http://localhost:8001/api/hotel`

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        // 'userId' : {userId}
    },
};
export const AddHotel = async (userID,newHotel) => {
    const response = await axios.post(`${BASE_URL}`, newHotel, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'userId' : `${userID}`
        },
    });
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
