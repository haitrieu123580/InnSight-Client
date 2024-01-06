import { Data } from "@react-google-maps/api";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL + "/api";
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
    return { Data: response?.data };
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
        "Content-Type": "application/json",
        hotelId: hotelId,
      },
    });

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
  const response = await axios.put(
    `${BASE_URL}/room-types/${roomTypeId}`,
    newRoomType,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        hotelId: `${hotelId}`,
      },
    }
  );
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

export const GetHotelbyId = async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/hotel/rooms`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return { Data: response?.data };
  } catch (error) {
    return { Error: error };
  }
};
export const UpdateHotel = async (userId, HotelId, newHotel) => {
  const response = await axios.put(`${BASE_URL}/hotel/${HotelId}`, newHotel, {
    headers: {
      "Content-Type": "multipart/form-data",
      userId: `${userId}`,
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
export const getRevenueHotelByYear = async ({ data, hotelId }) => {
  const response = await axios.post(
    `${BASE_URL}/hotel/revenue/by-year`,
    JSON.stringify(data),
    {
      headers: {
        "Content-Type": "application/json",
        hotelId: `${hotelId}`,
      },
    }
  );
  return { Data: response?.data };
};
export const deleteRoomTypeById = async ({ hotelId, roomTypeId }) => {
  const response = await axios.delete(`${BASE_URL}/room-types/${roomTypeId}`, {
    headers: {
      "Content-Type": "application/json",
      hotelId: `${hotelId}`,
    },
  });
  return { Data: response?.data };
};

export const GetServices = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/hotel/services`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

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

export const GetAmenities = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/room-types/amenities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

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

export const GetViews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/room-types/views`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

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

export const GetListHotels = async () => {
  const token = JSON.parse(localStorage.getItem("Token"));

  try {
    const response = await axios.get(`${BASE_URL}/user/hotels`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

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

export const SearchRoomType = async ({ hotelId, name }) => {
  if (name===null) {name=''}
  const response = await axios.get(`${BASE_URL}/room-types/search`, {
    params: {name},
    headers: {
      "Content-Type": "application/json",
      hotelId: `${hotelId}`,
    },
  });
  return { Data: response?.data };
};
