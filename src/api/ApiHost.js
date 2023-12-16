import axios from "axios";


const BASE_URL = process.env.REACT_APP_SERVER_URL + "/api";

const config = {

  headers: {
    "Content-Type": "multipart/form-data",
    // 'userId' : {userId}
  },
};
export const AddHotel = async (userID, newHotel) => {
  const response = await axios.post(`${BASE_URL}/hotel`, newHotel, {
    headers: {
      "Content-Type": "multipart/form-data",
      userId: `${userID}`,
    },
  });
  if (response.status === 200) {
    return { Data: response?.data };
  } else {
    return {
      Message: "Error",
    };
  }
};
export const AddRoomType = async (hotelId, newRoomType) => {
  const response = await axios.post(`${BASE_URL}/room-types`, newRoomType, {
    headers: {
      "Content-Type": "multipart/form-data",
      hotelId: `${hotelId}`,
    },
  });
  if (response.status === 201) {
    return { Data: response?.data  };
  } else {
    return {
      Message: "Error",
    };
  }
};

export const GetRoomTypes = async (hotelId) => {
  try {
    const response = await axios.get(`${BASE_URL}/room-types`, {
      headers: {
        'Content-Type': 'application/json',
        hotelId: hotelId,
      },
    });

    if (response.status === 200) {
      return { Data: response?.data };
    } else {
      return {
        Data: 'error',
      };
    }
  } catch (error) {
    console.error('Error in API request', error);
    return {
      Data: 'error',
    };
  }
};

export const GetRoomAvailable = async (hotelId, data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/room-types/available-rooms`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
          hotelId: hotelId,
        },
      }
    );
    if (response.status === 200) {
      return { Data: response?.data };
    } else {
      return {
        Data: "error",
      };
    }
  } catch (error) {
    console.error("Error in API request", error);
    return {
      Data: "error",
    };
  }
};

export const UpdateRoomType = async (hotelId, roomTypeId, newRoomType) => {
  const response = await axios.put(`${BASE_URL}/room-types/${roomTypeId}`, newRoomType, {
    headers: {
      "Content-Type": "multipart/form-data",
      hotelId: `${hotelId}`,
    },
  });
  if (response.status === 201) {
    return { Data: true };
  } else {
    return {
      Data: false,
    };
  }
};

export const GetReservedRoomInfo = async (hotelId, data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/rooms/reserved-room-info`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
          hotelId: hotelId,
        },
      }
    );

    if (response.status === 200) {
      return { Data: response?.data };
    } else {
      return {
        Data: "error",
      };
    }
  } catch (error) {
    console.error("Error in API request", error);
    return {
      Data: "error",
    };
  }
};
