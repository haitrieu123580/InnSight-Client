import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: localStorage.getItem("isLogin") || false,
    userProfile: {},
    userRole: localStorage.getItem("role") ? window.atob(JSON.parse(localStorage.getItem("role"))) : ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin: (state, { payload }) => {
            state.isLogin = true;
            state.userRole = payload?.role
        },
    },

})

export const { signin } = authSlice.actions

export default authSlice.reducer