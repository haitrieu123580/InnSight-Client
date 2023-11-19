import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { booking } from './slice'
import { bookingApi } from '../../api/ApiBooking';
function* watchBooking() {
    yield takeEvery(actions.BOOKING_START, function* (payload) {
        const { reservation, onError, onSuccess } = payload
        try {
            const response = yield call(bookingApi, reservation);
            if (response?.Data !== "") {
                yield put(booking())
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

export default function* BookingSaga() {
    yield all([
        fork(watchBooking),
    ]);
}
