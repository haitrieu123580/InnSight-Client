import { combineReducers } from 'redux';

import HomeReducer from "./home/slice"
import AuthReducer from "./auth/slice"
const rootReducer = combineReducers({
    Home: HomeReducer,
    Auth: AuthReducer,

});

export default rootReducer;
