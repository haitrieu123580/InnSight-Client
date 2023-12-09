import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listUser: {},
  detailUser:{},
  service:{},
  amenity:{},
  bedTypes:{},
  views:{},
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
    listBedTypes: (state, { payload }) => {
      state.bedTypes = payload
    },
    listViews: (state, { payload }) => {
      state.views = payload
    },
  },
});

export const {
  listUser,
  detailUser,
  listService,
  listAmenity,
  listBedTypes,
  listViews,
} = adminSlice.actions;

export default adminSlice.reducer;
