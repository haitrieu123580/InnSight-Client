import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSuccess: false,
  newHotel: {
    province: "",
    description: "",
    district: "",
    ward: "",
    street: "",
    name: "",
    rate: "",
    amenities: [],
    extraServices: [],
  },
};
const hostSlice = createSlice({
  name: "HOST",
  initialState,
  reducers: {
    addAddressHotel: (state, { payload }) => {
      const address = payload;
      state.newHotel.province = address.province;
      state.newHotel.district = address.district;
      state.newHotel.ward = address.ward;
    },
    addNameAndRateHotel: (state, { payload }) => {
      const { name, rate } = payload;
      state.newHotel.name = name;
      state.newHotel.rate = rate;
    },
    addExtraAmenityHotel: (state, { payload }) => {
      const extraAmenity = payload;
      state.newHotel.amenities = [...state.newHotel.amenities, extraAmenity];
      console.log("payload addExtraAmenityHotel", state.newHotel.amenities);
    },
    addAmenitiesHotel: (state, { payload }) => {
      const amenities = payload;
      state.newHotel.amenities = amenities;
      console.log("payload addAmenitiesHotel", state.newHotel.amenities);
    },
    addExtraServiceHotel: (state, { payload }) => {
      const extraService = payload;
      state.newHotel.extraServices = [
        ...state.newHotel.extraServices,
        extraService,
      ];
      console.log("payload addExtraServiceHotel", state.newHotel.extraServices);
    },

    addHotel: (state, { payload }) => {
      const { hotel, isSuccess } = payload;
      // const existingHotelIndex = state.host.hotels.findIndex((hotel) => hotel?.hotelId === hotel?.id);
      // state.isSuccess =isSuccess
      // state.hotel=[...state.hotels,hotel]
    },
  },
});
export const {
  addHotel,
  addAddressHotel,
  addNameAndRateHotel,
  addExtraAmenityHotel,
  addAmenitiesHotel,
  addExtraServiceHotel,
} = hostSlice.actions;
export default hostSlice.reducer;
