import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        booking: (state, { payload }) => {

        },
    },

})

export const { booking } = bookingSlice.actions

export default bookingSlice.reducer