import { createSlice } from '@reduxjs/toolkit'
function isBase64(str) {
    // Biểu thức chính quy để kiểm tra chuỗi Base64
    const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
    return base64Regex.test(str);
}

const initialState = {
    isLogin: localStorage.getItem("isLogin") || false,
    userProfile: {},
    userRole: isBase64(localStorage.getItem("role")) ? window.atob(localStorage.getItem("role")) : ""
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