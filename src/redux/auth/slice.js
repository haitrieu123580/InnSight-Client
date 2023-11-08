import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    userProfile: {},
    userRole: JSON.parse(localStorage.getItem("role")) || ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin: (state, { payload }) => {
            state.isLogin = true;
            state.userProfile = payload?.profile;
            state.userRole = payload?.role
            // state.userRole = 'host';
        },
    },

})

export const { signin } = authSlice.actions

export default authSlice.reducer