import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { AddHotel } from '../../api/ApiHost';

function* watchAddHotel() {
    yield takeEvery(actions.ADD_HOTEL, function* (payload) {
        const { id,data, onSuccess, onError } = payload;
        console.log("payload1", payload);
        try {
            console.log("1");
            const response = yield call(AddHotel, id,data);
            console.log("res",response);

            if (response?.Data) {
                onSuccess && onSuccess();
                console.log("2");
            }
        } catch (error) {
            onError && onError();
            console.log("3");
        } finally {
            console.log("5");
        }
        console.log("6");
    });
}

export default function* HostSaga() {
    yield all([
        fork(watchAddHotel)

    ]);
}