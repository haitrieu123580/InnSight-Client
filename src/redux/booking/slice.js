import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: {
        hotel: null,
        rooms: []
    },
    reservation: {
    },
    checkIn: "",
    checkOut: "",
    bookingReserved: {},
    linkVnpay: "",
    cancel:{}
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setCheckInOut: (state, { payload }) => {
            const { checkIn, checkOut } = payload;
            state.checkIn = checkIn;
            state.checkOut = checkOut;
        },
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
            state.bookingReserved = payload
        },
        saveReservation: (state, { payload }) => {
            const { onSuccess, reservation } = payload;
            state.reservation = reservation;
            onSuccess && onSuccess();
        },
        pay: (state, { payload }) => {
            state.linkVnpay = payload
        },
        cancel: (state, { payload }) => {
            state.cancel = payload
        },
    },
},)

export const { booking, addRoomToCart, setCheckInOut, saveReservation, pay, cancel } = bookingSlice.actions

export default bookingSlice.reducer