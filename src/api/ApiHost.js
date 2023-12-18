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
  console.log("res call", response);
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
  console.log("res call", response);
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
    console.log("hotelId",hotelId)
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

    console.log("res api", response.status);

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

export const UpdateRoomType = async (hotelId, newRoomType) => {
  const response = await axios.put(`${BASE_URL}/room-types`, newRoomType, {
    headers: {
      "Content-Type": "multipart/form-data",
      hotelId: `${hotelId}`,
    },
  });
  console.log("res call", response);
  if (response.status === 201) {
    return { Data: true };
  } else {
    return {
      Data: false,
    };
  }
};
