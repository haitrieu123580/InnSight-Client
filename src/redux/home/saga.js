import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { getHotelById, searchHotels } from '../../api/ApiHotels';
import { getHotel, result } from './slice';
function* watchGetHotel() {
    yield takeEvery(actions.GET_HOTEL, function* (payload) {
        const {data, onSuccess, onError } = payload
        try {
            const response = yield call(getHotelById, data);
            if (response?.Data) {
                yield put(getHotel(response?.Data))
                onSuccess && onSuccess();
            }

        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}
function* watchSearchHotel() {
    yield takeEvery(actions.SEARCH_HOTELS, function* (payload) {
        const { filter, onSuccess, onError } = payload
        try {
            const response = yield call(searchHotels, filter);
            yield put(result(response?.Data))
            onSuccess && onSuccess();
        } catch (error) {
            onError && onError();
        }
    });
}

export default function* HomeSaga() {
    yield all([
        fork(watchGetHotel),
        fork(watchSearchHotel),

    ]);
}