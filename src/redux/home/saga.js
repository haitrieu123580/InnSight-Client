import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
<<<<<<< HEAD

import { getHotelById, searchHotels } from '../../api/ApiCore';
=======
import { getHotelById, searchHotels } from '../../api/ApiHotels';
>>>>>>> ad6574d94b707e19bc718ce9deae02ffcbd5aecd
import { getHotel, result } from './slice';
function* watchGetHotel() {
    yield takeEvery(actions.GET_HOTEL, function* (payload) {
        const { hotelId, onSuccess, onError } = payload
        try {
            const response = yield call(getHotelById, hotelId);
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