import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSuccess: false,
  hotel:[],
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
    checkInTime:"",
    checkOutTime:"",
    images:[],
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
    addCheckInCheckOutTime: (state, { payload }) => {
      const {checkInTime,checkOutTime} = payload;
      state.newHotel.checkInTime = checkInTime
      state.newHotel.checkOutTime=checkOutTime
      console.log("payload addCheckInCheckOutTime", state.newHotel.checkInTime,state.newHotel.checkOutTime);
    },
    addImagesHotel:(state,{payload})=>{
      const images = payload;
      state.newHotel.images = [
        ...state.newHotel.images,
        images,
      ];
      console.log("payload addImagesHotel", state.newHotel.images);
    },

    addHotel: (state,  payload ) => {
      const  newHotel  = payload;
      console.log("ok")
      state.hotel=[...state.hotel,newHotel]
    },
  },
});
export const {
  // addHotel,
  addAddressHotel,
  addNameAndRateHotel,
  addExtraAmenityHotel,
  addAmenitiesHotel,
  addExtraServiceHotel,
  addCheckInCheckOutTime,
  addImagesHotel
} = hostSlice.actions;
export default hostSlice.reducer;
