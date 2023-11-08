import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    result: {},
    hotel: {},
    room: {},
    message: 'halo'
}

const homeSlice = createSlice({
    name: 'HOME',
    initialState,
    reducers: {
        result: (state, { payload }) => {
            state.result = payload
        },
        getHotel: (state, { payload }) => {
            state.hotel = payload

        }
    },

})

export const { result, getHotel } = homeSlice.actions


export default homeSlice.reducer