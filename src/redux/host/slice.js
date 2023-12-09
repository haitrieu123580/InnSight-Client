import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSuccess: false,
  listHotels:[],
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
  roomTypes:[],
  newRoomType:{
    name:"",
    sdRoomName:[],
    count:0,
    price: 0,
    bathroomCount:0,
    roomArea:0,
    adultCount:0,
    childrenCount:0,
    description:"",
    bedTypes:[],
    amenities:[],
    view: "",
    images:[],
  },
  roomAvailableByFilter:[],
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
      console.log("add hotel ok")
      state.hotel=[...state.hotel,newHotel]
    },
    addBasicInfoRoomType: (state, { payload }) => {
      const {name, sdRoomName, count,bedTypes,roomArea,adultCount,childrenCount,amenities,view }= payload;
      console.log("payload addBasicInfoRoomType ",payload)
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
      console.log("payload addRoomTypePrice ",payload)
      state.newRoomType.price = price;
    },  
    addImagesRoomType:(state,{payload})=>{
      const images = payload;
      state.newHotel.images = [
        ...state.newHotel.images,
        images,
      ];
      console.log("payload addImagesRoomType", state.newHotel.images);
    },
    addRoomType: (state,  payload ) => {
      const  newRoomType  = payload;
      console.log("add roomType ok")
      state.roomTypes=[...state.roomTypes,newRoomType]
    },
    GetListRoomTypes: (state,  payload ) => {
      const  roomTypes  = payload.payload.roomTypes;
      console.log("get roomType ok",roomTypes)
      state.roomTypes=roomTypes
    },
    filterRoomAvailable: (state,  payload ) => {  
      const  roomAvailableByFilter  = payload.payload;
      console.log("filterRoomAvailable ok",roomAvailableByFilter)
      state.roomAvailableByFilter=roomAvailableByFilter
    },
    updateRoomType:(state, payload)=>{
      const  {room,index} = payload;
      state.roomTypes[index]=room
    }
  },
});
export const {
  // addHotel,rw42
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
  GetListRoomTypes,
  updateRoomType
} = hostSlice.actions;
export default hostSlice.reducer;
