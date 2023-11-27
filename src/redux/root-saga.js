import { all } from 'redux-saga/effects'
import HomeSaga from './home/saga'
import AuthSaga from './auth/saga'
import BookingSaga from './booking/saga'
import User_settings from './user-settings/saga'
import AdminSaga from './admin/saga'

export default function* rootSaga() {
    yield all([
        HomeSaga(),
        AuthSaga(),
        BookingSaga(),
        User_settings(),
        AdminSaga(),
    ])
}
