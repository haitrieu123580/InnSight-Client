import { combineReducers } from 'redux';


import HomeReducer from "./home/slice"
import AuthReducer from "./auth/slice"
import BookingReducer from './booking/slice'
import SettingReducer from './user-settings/slice'
const rootReducer = combineReducers({
    Home: HomeReducer,
    Auth: AuthReducer,
    Booking: BookingReducer,
    Setting: SettingReducer,
});

export default rootReducer;
