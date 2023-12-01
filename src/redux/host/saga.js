import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { AddHotel, AddRoomType } from '../../api/ApiHost';

function* watchAddHotel() {
    yield takeEvery(actions.ADD_HOTEL, function* (payload) {
        const { id,data, onSuccess, onError } = payload;
        console.log("payload1", payload);
        try {
            const response = yield call(AddHotel, id,data);
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}
function* watchAddRoomType() {
    yield takeEvery(actions.ADD_ROOM_TYPE, function* (payload) {
        const { id,data, onSuccess, onError } = payload;
        console.log("payload2", payload);
        try {
            const response = yield call(AddRoomType, id,data);
            console.log("res",response);

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
        fork(watchAddHotel),
        fork(watchAddRoomType)
    ]);
}