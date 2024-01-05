import { all, call, fork, put, takeEvery } from "@redux-saga/core/effects";
import actions from "./action";
import {
  AddHotel,
  AddRoomType,
  GetAmenities,
  GetHotelbyId,
  GetListHotels,
  GetReservedRoomInfo,
  GetRoomAvailable,
  GetRoomTypes,
  GetServices,
  GetViews,
  UpdateHotel,
  UpdateRoomType,
  deleteRoomTypeById,
  getRevenueHotelByYear,
  SearchRoomType,
} from "../../api/ApiHost";
import {
  filterRoomAvailable,
  getHotel,
  getListHotels,
  getListRoomTypes,
  getListSearchRoomTypes,
  getReservedRoomInfo,
  getRoomAmenities,
  getRoomViews,
  getServices,
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
        yield put(getListRoomTypes(response?.Data));
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
    const { userId, hotelId, data, onSuccess, onError } = payload;
    try {
      const response = yield call(UpdateHotel, userId, hotelId, data);
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
function* watchGetServices() {
  yield takeEvery(actions.GET_SERVICES, function* (payload) {
    const { onSuccess, onError } = payload;
    try {
      const response = yield call(GetServices);
      if (response?.Data) {
        yield put(getServices(response?.Data));
        onSuccess && onSuccess();
      }
    } catch (error) {
      onError && onError();
    } finally {
    }
  });
}

function* watchGetAmenities() {
  yield takeEvery(actions.GET_AMENITIES, function* (payload) {
    const { onSuccess, onError } = payload;
    try {
      const response = yield call(GetAmenities);
      if (response?.Data) {
        yield put(getRoomAmenities(response?.Data));
        onSuccess && onSuccess();
      }
    } catch (error) {
      onError && onError();
    } finally {
    }
  });
}

function* watchGetViews() {
  yield takeEvery(actions.GET_VIEWS, function* (payload) {
    const { onSuccess, onError } = payload;
    try {
      const response = yield call(GetViews);
      if (response?.Data) {
        yield put(getRoomViews(response?.Data));
        onSuccess && onSuccess();
      }
    } catch (error) {
      onError && onError();
    } finally {
    }
  });
}


function* watchGetListHotels() {
  yield takeEvery(actions.GET_LIST_HOTELS, function* (payload) {
    const { onSuccess, onError } = payload;
    try {
      const response = yield call(GetListHotels);
      if (response?.Data) {
        localStorage.setItem("hotelId", JSON.stringify(response?.Data[0]?.id));
        yield put(getListHotels(response?.Data));
        onSuccess && onSuccess();
      }
    } catch (error) {
      onError && onError();
    } finally {
    }
  });
}

function* watchSearchRoomType() {
  yield takeEvery(actions.SEARCH_ROOMTYPE, function* (payload) {
      const {hotelId, name, onSuccess, onError } = payload;
      console.log("saga", payload)
      try {
          const response = yield call(SearchRoomType, {hotelId, name });
          if (response?.Data) {
            yield put(getListSearchRoomTypes(response?.Data));
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
    fork(watchGetServices),
    fork(watchGetAmenities),
    fork(watchGetViews),
    fork(watchGetListHotels),
    fork(watchSearchRoomType),
  ]);
}
