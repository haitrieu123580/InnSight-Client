import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    userProfile: {},
    userRole: ""
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