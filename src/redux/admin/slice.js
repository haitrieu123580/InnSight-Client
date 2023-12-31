import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listUser: {},
  detailUser:{},
  amenity:{},
  bedTypes:{},
  views:{},
  revenueByYear:{},
  revenueAllYear:{},
  listPending:{}
};

const adminSlice = createSlice({
  name: 'ADMIN',
  initialState,
  reducers: {
    listUser: (state, { payload }) => {
      state.listUser = payload
    },
    detailUser: (state, { payload }) => {
      state.detailUser = payload
    },
    listAmenity: (state, { payload }) => {
      state.amenity = payload
    },
    listBedTypes: (state, { payload }) => {
      state.bedTypes = payload
    },
    listViews: (state, { payload }) => {
      state.views = payload
    },
    listRevenueByYear: (state, { payload }) => {
      state.revenueByYear = payload
    },
    listRevenueAllYear: (state, { payload }) => {
      state.revenueAllYear = payload
    },
    listHotel: (state, { payload }) => {
      state.listPending = payload
    },
  },
});

export const {
  listUser,
  detailUser,
  listAmenity,
  listBedTypes,
  listViews,
  listRevenueByYear, 
  listRevenueAllYear,
  listHotel
} = adminSlice.actions;

export default adminSlice.reducer;
