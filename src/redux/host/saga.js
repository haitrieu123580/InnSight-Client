import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { AddHotel, AddRoomType, GetRoomAvailable, GetRoomTypes, UpdateRoomType } from '../../api/ApiHost';
import { GetListRoomTypes, filterRoomAvailable } from './slice';

function* watchAddHotel() {
    yield takeEvery(actions.ADD_HOTEL, function* (payload) {
        const { id,data, onSuccess, onError } = payload;
        console.log("payload1", payload);
        try {
            const response = yield call(AddHotel, id,data); 
          
            if (response?.Data) {
                console.log("data",response?.Data)
                localStorage.setItem("hotelId", JSON.stringify(response?.Data?.hotelId))
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
            console.log("res",response?.roomTypeId);

            if (response) {
                console.log("roomType Id",response?.roomTypeId)
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}
function* watchGetRoomTypes() {
    yield takeEvery(actions.GET_ROOMTYPES, function* (payload) {
        const {id, onSuccess, onError } = payload
        
        console.log("watchGetRoomTypes payload saga", payload);

        try {
            const response = yield call(GetRoomTypes,id);
            console.log("res saga",response);

            if (response?.Data) {
                yield put(GetListRoomTypes(response?.Data))
                onSuccess && onSuccess();
            }

        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchFilterRoomAvailable() {
    yield takeEvery(actions.GET_ROOM_AVAILABLE, function* (payload) {
        const {id, data, onSuccess, onError } = payload
        console.log("watchFilterRoomAvailable payload saga", data);

        try {
            const response = yield call(GetRoomAvailable,id, data);
            console.log("res saga",response);

            if (response?.Data) {
                yield put(filterRoomAvailable(response?.Data))
                onSuccess && onSuccess();
            }

        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}
function* watchUpdateRoomType() {
    yield takeEvery(actions.UPDATE_ROOMTYPE, function* (payload) {
        const { id,data, onSuccess, onError } = payload;
        console.log("payload2", payload);
        try {
            const response = yield call(UpdateRoomType, id,data);
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
        fork (watchAddHotel),
        fork(watchAddRoomType),
        fork(watchGetRoomTypes),
        fork(watchFilterRoomAvailable),
        fork(watchUpdateRoomType),
    ]);
}