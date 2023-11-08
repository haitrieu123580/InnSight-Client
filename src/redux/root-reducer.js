import { combineReducers } from 'redux';

import HomeReducer from "./home/slice"
import AuthReducer from "./auth/slice"
import BookingReducer from './booking/slice'
const rootReducer = combineReducers({
    Home: HomeReducer,
    Auth: AuthReducer,
    Booking: BookingReducer,
});

export default rootReducer;
