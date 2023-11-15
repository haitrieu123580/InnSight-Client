import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: true,
  userProfile: {},
  userRole: JSON.parse(localStorage.getItem('role')) || '',
  token: JSON.parse(localStorage.getItem('Token')) || '', // Include the token in the initial state
  isPasswordChanged: false,
  error: null,
};

const settingSlice = createSlice({
  name: 'setting',
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
  }
  },
});

export const {
  changePasswordSuccess,
  changePasswordFailure,
  resetPasswordChangeStatus,
  getProfile,

} = settingSlice.actions;

export default settingSlice.reducer;
