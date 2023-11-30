import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { booking, pay, cancel } from './slice'
import { bookingApi, payment, reservationDetail, reservationCancel } from '../../api/ApiBooking';
function* watchBooking() {
    yield takeEvery(actions.BOOKING_START, function* (payload) {
        const { reservation, onError, onSuccess } = payload
        try {
            const response = yield call(bookingApi, reservation);
            if (response?.Data !== "") {
                localStorage.setItem("reservationCode", JSON.stringify(response?.Data?.reservationCode))
                yield put(booking(response?.Data))
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchReservationDetail() {
    yield takeEvery(actions.RESERVATION_DETAIL, function* (payload) {
        const {requestData, onSuccess, onError } = payload
        try {
            const response = yield call(reservationDetail, requestData);
            if (response?.Data) {
                yield put(booking(response?.Data))
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchPayment() {
    yield takeEvery(actions.PAYMENT, function* (payload) {
        const { reservation, onError, onSuccess } = payload
        try {
            const response = yield call(payment, reservation);
            if (response?.Data !== "") {
                yield put(pay(response?.Data))
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchReservationCancel() {
    yield takeEvery(actions.RESERVATION_CANCEL, function* (payload) {
        const {reservationCode, onSuccess, onError } = payload
        try {
            const response = yield call(reservationCancel, reservationCode);
            if (response?.Data) {
                yield put(cancel(response?.Data))
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
        fork(watchPayment),
        fork(watchReservationDetail),
        fork(watchReservationCancel),
    ]);
}
