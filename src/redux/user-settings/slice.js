import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: true,
  userProfile: {},
  userRole: JSON.parse(localStorage.getItem('role')) || '',
  token: JSON.parse(localStorage.getItem('Token')) || '', // Include the token in the initial state
  isPasswordChanged: false,
  error: null,
};

const authSlice = createSlice({
  name: 'settings',
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
  },
});

export const {
  signin,
  changePasswordSuccess,
  changePasswordFailure,
  resetPasswordChangeStatus,
  updateToken, // Export the new action
} = authSlice.actions;

export default authSlice.reducer;
