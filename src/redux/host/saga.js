import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';

function* AddHotel() {
    yield takeEvery(actions.ADD_HOTEL, function* (payload) {
        const { data, onSuccess, onError } = payload
        try {
            const response = yield call(AddHotel, data);
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

export default function* HostSaga() {
    yield all([
        fork(AddHotel)

    ]);
}