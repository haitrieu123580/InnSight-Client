import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listUser: {},
  detailUser:{},
  service:{},
  amenity:{},
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
    listService: (state, { payload }) => {
      state.service = payload
    },
    listAmenity: (state, { payload }) => {
      state.amenity = payload
    },
  },
});

export const {
  listUser,
  detailUser,
  listService,
  listAmenity,
} = adminSlice.actions;

export default adminSlice.reducer;
