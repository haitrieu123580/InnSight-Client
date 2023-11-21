import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: true,
  userProfile: {},
  userRole: JSON.parse(localStorage.getItem('role')) || '',
  token: JSON.parse(localStorage.getItem('Token')) || '', // Include the token in the initial state
  isPasswordChanged: false,
  isUpdateProfile: false,
  error: null,
  userHistoryReservations: {},

};

const settingSlice = createSlice({
  name: 'SETTING',
  initialState,
  reducers: {
    changePasswordSuccess: (state) => {
      state.isPasswordChanged = true;
      state.error = null;
    },
    changePasswordFailure: (state, { payload }) => {
      state.isPasswordChanged = false;
      state.error = payload;
    },
    resetPasswordChangeStatus: (state) => {
      state.isPasswordChanged = false;
    },
    getProfile: (state, { payload }) => {
      state.userProfile = payload
    },
    updateProfileSuccess: (state) => {
      state.isUpdateProfile = true;
      state.error = null;
    },
    updateProfileFailure: (state, { payload }) => {
      state.isUpdateProfile = false;
      state.error = payload;
    },
    getHistoryReservations: (state, { payload }) => {
      state.userHistoryReservations = payload
    },
  },
});

export const {
  changePasswordSuccess,
  changePasswordFailure,
  resetPasswordChangeStatus,
  getProfile,
  updateProfileSuccess,
  updateProfileFailure,
  getHistoryReservations,
} = settingSlice.actions;

export default settingSlice.reducer;
