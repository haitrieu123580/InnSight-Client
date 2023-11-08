import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { getHotelById, searchHotels } from '../../api/ApiCore';
import { getHotel, result } from './slice';
function* watchGetHotel() {
    yield takeEvery(actions.GET_HOTEL, function* (payload) {
        const { hotelId } = payload
        try {
            const response = yield call(getHotelById, hotelId);
            if (response?.Data) {
                yield put(getHotel(response?.Data))
            }

        } catch (error) {

        } finally {
        }
    });
}
function* watchSearchHotel() {
    yield takeEvery(actions.SEARCH_HOTELS, function* (payload) {
        const { filter } = payload
        try {
            const response = yield call(searchHotels, filter);
            if (response?.Data) {

                yield put(result(response?.Data))
            }
        } catch (error) {

        }
    });
}

export default function* HomeSaga() {
    yield all([
        fork(watchGetHotel),
        fork(watchSearchHotel),

    ]);
}
