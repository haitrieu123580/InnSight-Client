import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: {
        hotel: null,
        rooms: []
    }
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        addRoomToCart: (state, { payload }) => {
            const { hotel, room, count, onSuccess } = payload;
            const existingRoomIndex = state.cart.rooms.findIndex((room) => room?.roomId === room?.id);
            if (existingRoomIndex !== -1) {
                state.cart.rooms[existingRoomIndex].count = count;
            } else {
                state.cart = {
                    hotel: hotel,
                    rooms: [
                        ...state.cart.rooms,
                        {
                            ...room,
                            count: count,
                        },
                    ],
                };
            }
            onSuccess && onSuccess();
        },
        booking: (state, { payload }) => {

        },
    },
},)

export const { booking, addRoomToCart } = bookingSlice.actions

export default bookingSlice.reducer