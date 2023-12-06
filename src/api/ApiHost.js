import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL + '/api'

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        // 'userId' : {userId}
    },
};
export const AddHotel = async (userID,newHotel) => {
    const response = await axios.post(`${BASE_URL}/hotel`, newHotel, {
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
export const AddRoomType = async (hotelId,newRoomType) => {
    const response = await axios.post(`${BASE_URL}/room-types`, newRoomType, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'hotelId' : `${hotelId}`
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

