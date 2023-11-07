import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
// import { booking } from './slice'
function* watchBookingTest() {
    yield takeEvery(actions.SIGNIN, function* (payload) {
        // const { data, onError, onSuccess } = payload
        // try {
        //     // const response = yield call(SignIn, data);
        //     // if (response?.Data !== "") {
        //     //     yield put(booking())
        //     //     onSuccess && onSuccess();
        //     // }
        // } catch (error) {
        //     onError && onError();
        // } finally {
        // }
    });
}

export default function* BookingSaga() {
    yield all([
        fork(watchBookingTest),
    ]);
}
