import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listUser: {},
  detailUser:{},
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
  },
});

export const {
  listUser,
  detailUser,
} = adminSlice.actions;

export default adminSlice.reducer;
