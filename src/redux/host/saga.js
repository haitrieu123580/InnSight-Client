import { all, call, fork, put, takeEvery } from "@redux-saga/core/effects";
import actions from "./action";
import {
  AddHotel,
  AddRoomType,
  GetHotelbyId,
  GetReservedRoomInfo,
  GetRoomAvailable,
  GetRoomTypes,
  UpdateHotel,
  UpdateRoomType,
  deleteRoomTypeById,
  getRevenueHotelByYear,
} from "../../api/ApiHost";
import {
  GetListRoomTypes,
  filterRoomAvailable,
  getHotel,
  getReservedRoomInfo,
  listRevenueHotelByYear,
} from "./slice";

function* watchAddHotel() {
  yield takeEvery(actions.ADD_HOTEL, function* (payload) {
    const { id, data, onSuccess, onError } = payload;
    try {
      const response = yield call(AddHotel, id, data);

      if (response?.Data) {
        localStorage.setItem(
          "hotelId",
          JSON.stringify(response?.Data?.hotelId)
        );
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
    const { id, data, onSuccess, onError } = payload;
    try {
      const response = yield call(AddRoomType, id, data);
      if (response) {
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
    const { id, onSuccess, onError } = payload;
    try {
      const response = yield call(GetRoomTypes, id);
      if (response?.Data) {
        yield put(GetListRoomTypes(response?.Data));
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
    const { id, data, onSuccess, onError } = payload;
    try {
      const response = yield call(GetRoomAvailable, id, data);

      if (response?.Data) {
        yield put(filterRoomAvailable(response?.Data));
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
    const { hotelId, roomTypeId, data, onSuccess, onError } = payload;
    try {
      const response = yield call(UpdateRoomType, hotelId, roomTypeId, data);
      if (response?.Data) {
        onSuccess && onSuccess();
      }
    } catch (error) {
      onError && onError();
    } finally {
    }
  });
}

function* watchGetResevedRoomInfo() {
  yield takeEvery(actions.GET_RESERVED_ROOM_INFO, function* (payload) {
    const { id, data, onSuccess, onError } = payload;
    try {
      const response = yield call(GetReservedRoomInfo, id, data);
      if (response?.Data) {
        yield put(getReservedRoomInfo(response?.Data));
        onSuccess && onSuccess();
      }
    } catch (error) {
      onError && onError();
    } finally {
    }
  });
}

function* watchGetHotel() {
  yield takeEvery(actions.GET_HOTEL, function* (payload) {
    const { data, onSuccess, onError } = payload;
    try {
      const response = yield call(GetHotelbyId, data);
      if (response?.Data) {
        yield put(getHotel(response?.Data));
        onSuccess && onSuccess();
      }
    } catch (error) {
      onError && onError();
    } finally {
    }
  });
}

function* watchUpdateHotel() {
  yield takeEvery(actions.UPDATE_HOTEL, function* (payload) {
    const { userId, HotelId, data, onSuccess, onError } = payload;
    try {
      const response = yield call(UpdateHotel, userId, HotelId, data);
      if (response?.Data) {
        onSuccess && onSuccess();
      }
    } catch (error) {
      onError && onError();
    } finally {
    }
  });
}
function* watchRevenueHotelByYear() {
  yield takeEvery(actions.REVENUE_HOTEL_BY_YEAR, function* (payload) {
    console.log("payload",payload)
    const { data, hotelId,onSuccess, onError } = payload;
    try {
      const response = yield call(getRevenueHotelByYear, { data, hotelId });
      if (response?.Data) {
        yield put(listRevenueHotelByYear(response?.Data));
        onSuccess && onSuccess();
      }
    } catch (error) {
      onError && onError();
    } finally {
    }
  });
}
function* watchDeleteRoomTypeById() {
  yield takeEvery(actions.DELETE_ROOMTYPE, function* (payload) {
      const {hotelId, roomTypeId, onSuccess, onError } = payload;
      try {
          const response = yield call(deleteRoomTypeById, {hotelId,roomTypeId });
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
    fork(watchAddRoomType),
    fork(watchGetRoomTypes),
    fork(watchFilterRoomAvailable),
    fork(watchUpdateRoomType),
    fork(watchGetResevedRoomInfo),
    fork(watchGetHotel),
    fork(watchUpdateHotel),
    fork(watchRevenueHotelByYear),
    fork(watchDeleteRoomTypeById),
  ]);
}
