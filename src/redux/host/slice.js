import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSuccess: false,
  listHotels: [],
  hotel: [],
  newHotel: {
    province: "",
    description: "",
    district: "",
    ward: "",
    street: "",
    name: "",
    mainPhoneNumber: "",
    mainEmail: "",
    rate: "",
    amenities: [],
    extraServices: [],
    checkInTime: "",
    checkOutTime: "",
    images: [],
  },
  roomTypes: [],
  newRoomType: {
    name: "",
    sdRoomName: [],
    count: 0,
    price: 0,
    bathroomCount: 0,
    roomArea: 0,
    adultCount: 0,
    childrenCount: 0,
    description: "",
    bedTypes: [],
    amenities: [],
    view: "",
    images: [],
  },
  roomAvailableByFilter: [],
  reservedRoomInfo: {
    reservation: [],
    totalPrice: 0,
    totalCommission: 0,
  },
  hotelInfo: {},
  revenueHotelByYear: {},
  revenueHotelAllYear: {},
  services: [],
  roomAmenities: [],
  views: [],
  roomTypeDetail:{},
  currentHotel:0,
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
      state.newHotel.street = address.street;
    },
    addNameAndRateHotel: (state, { payload }) => {
      const { name, description, rate } = payload;
      state.newHotel.name = name;
      state.newHotel.rate = rate;
      state.newHotel.description = description;
    },
    addExtraAmenityHotel: (state, { payload }) => {
      const extraAmenity = payload;
      state.newHotel.amenities = [...state.newHotel.amenities, extraAmenity];
    },
    addAmenitiesHotel: (state, { payload }) => {
      const amenities = payload;
      state.newHotel.amenities = amenities;
    },
    addExtraServiceHotel: (state, { payload }) => {
      const extraService = payload;
      state.newHotel.extraServices = [
        ...state.newHotel.extraServices,
        extraService,
      ];
    },
    addCheckInCheckOutTime: (state, { payload }) => {
      const { mainPhoneNumber, mainEmail, checkInTime, checkOutTime } = payload;
      state.newHotel.mainPhoneNumber = mainPhoneNumber;
      state.newHotel.mainEmail = mainEmail;
      state.newHotel.checkInTime = checkInTime;
      state.newHotel.checkOutTime = checkOutTime;
    },
    addImagesHotel: (state, { payload }) => {
      const images = payload;
      state.newHotel.images = [...state.newHotel.images, images];
    },

    addHotel: (state, payload) => {
      const newHotel = payload;
      state.hotel = [...state.hotel, newHotel];
    },
    addBasicInfoRoomType: (state, { payload }) => {
      const {
        name,
        sdRoomName,
        count,
        bedTypes,
        roomArea,
        adultCount,
        childrenCount,
        amenities,
        view,
      } = payload;
      state.newRoomType.name = name;
      state.newRoomType.sdRoomName = sdRoomName;
      state.newRoomType.count = count;
      state.newRoomType.bedTypes = bedTypes;
      state.newRoomType.roomArea = roomArea;
      state.newRoomType.adultCount = adultCount;
      state.newRoomType.childrenCount = childrenCount;
      state.newRoomType.amenities = amenities;
      state.newRoomType.view = view;
    },
    addRoomTypePrice: (state, { payload }) => {
      const price = payload;
      state.newRoomType.price = price;
    },
    addImagesRoomType: (state, { payload }) => {
      const images = payload;
      state.newHotel.images = [...state.newHotel.images, images];
    },
    addRoomType: (state, payload) => {
      const newRoomType = payload;
      state.roomTypes = [...state.roomTypes, newRoomType];
    },
    getListRoomTypes: (state, payload) => {
      const roomTypes = payload.payload.roomTypes;
      state.roomTypes = roomTypes;
    },
    filterRoomAvailable: (state, payload) => {
      const roomAvailableByFilter = payload.payload;
      state.roomAvailableByFilter = roomAvailableByFilter;
    },
    updateRoomType: (state, payload) => {
      const { room, index } = payload;
      state.roomTypes[index] = room;
    },
    getReservedRoomInfo: (state, payload) => {
      const reservedRoomInfo = payload.payload;
      state.reservedRoomInfo = reservedRoomInfo;
    },
    getHotel: (state, { payload }) => {
      state.hotelInfo = payload;
    },
    updateHotel: (state, payload) => {
      const { hotel, index } = payload;
      state.hotel[index] = hotel;
    },
    listRevenueHotelByYear: (state, { payload }) => {
      state.revenueHotelByYear = payload;
    },
    listRevenueHotelAllYear: (state, { payload }) => {
      state.revenueHotelAllYear = payload;
    },
    getServices: (state, { payload }) => {
      state.services = payload;
    },
    getRoomAmenities: (state, { payload }) => {
      state.roomAmenities = payload;
    },
    getRoomViews: (state, { payload }) => {
      state.views = payload;
    },
    getListHotels: (state, { payload }) => {
      state.listHotels = payload;
    },
    getRoomTypeDetail: (state, {payload})=>{
      state.roomTypeDetail = payload
    },
    getCurentHotel: (state, {payload})=>{
      state.currentHotel = payload
    },
    getListSearchRoomTypes: (state, payload) => {
      const roomTypes = payload.payload;
      state.roomTypes = roomTypes;
    },
  },
});
export const {
  addAddressHotel,
  addNameAndRateHotel,
  addExtraAmenityHotel,
  addAmenitiesHotel,
  addExtraServiceHotel,
  addCheckInCheckOutTime,
  addImagesHotel,
  addBasicInfoRoomType,
  addRoomType,
  addRoomTypePrice,
  addImagesRoomType,
  filterRoomAvailable,
  getListRoomTypes,
  updateRoomType,
  getReservedRoomInfo,
  getHotel,
  updateHotel,
  listRevenueHotelByYear,
  listRevenueHotelAllYear,
  getServices,
  getRoomAmenities,
  getRoomViews,
  getListHotels,
  getRoomTypeDetail,
  getCurentHotel,
  getListSearchRoomTypes
} = hostSlice.actions;
export default hostSlice.reducer;
