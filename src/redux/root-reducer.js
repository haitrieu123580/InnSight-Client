import { combineReducers } from 'redux';
import HomeReducer from "./home/slice"
import AuthReducer from "./auth/slice"
import BookingReducer from './booking/slice'
import SettingReducer from './user-settings/slice'
import AdminReducer from './admin/slice'
import HostReducer from './host/slice'
const rootReducer = combineReducers({
    Home: HomeReducer,
    Auth: AuthReducer,
    Booking: BookingReducer,
    Setting: SettingReducer,
    Admin: AdminReducer,
    Host: HostReducer
});

export default rootReducer;
