import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { getListUser, deleteUserById, getDetailUser, searchUser } from '../../api/apiAdmin/ApiUser';
import { searchBedTypes } from '../../api/apiAdmin/ApiBedType';
import { updateViews, addViews, deleteViews, searchViews } from '../../api/apiAdmin/ApiViews';
import { updateService, addService, deleteService, updateAmenity, addAmenity, deleteAmenity, searchServiceAndAmenity} from '../../api/apiAdmin/ApiServiceAmenity';
import { getRevenueByYear, getRevenueAllYear } from '../../api/apiAdmin/ApiRevenue';
import { listUser, detailUser, listAmenity, listBedTypes, listViews, listRevenueByYear, listRevenueAllYear, listHotel } from './slice';
import { getListHotels, approveRequest, declineRequest } from '../../api/apiAdmin/ApiApproveHotels';

// USER

function* watchDeleteUserById() {
  yield takeEvery(actions.DELETE_USER, function* (payload) {
      const {id, onSuccess, onError } = payload;
      const token = JSON.parse(localStorage.getItem('Token'));
      try {
          const response = yield call(deleteUserById, {id, token });
          if (response?.Data) {
              onSuccess && onSuccess();
          }
      } catch (error) {
          onError && onError();
      } finally {
      }
  });
}

function* watchGetDetailUser() {
  yield takeEvery(actions.DETAIL_USER, function* (payload) {
      const {id, onSuccess, onError } = payload;
      const token = JSON.parse(localStorage.getItem('Token'));
      try {
          const response = yield call(getDetailUser, {id, token });
          if (response?.Data) {
              yield put(detailUser(response?.Data))
              onSuccess && onSuccess();
          }
      } catch (error) {
          onError && onError();
      } finally {
      }
  });
}

function* watchSearchUser() {
    yield takeEvery(actions.SEARCH_USER, function* (payload) {
        const {email, pageIndex, pageSize, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(searchUser, {email, token, pageIndex, pageSize });
            if (response?.Data) {
                yield put(listUser(response?.Data))
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

// SERVICE

function* watchUpdateService() {
    yield takeEvery(actions.UPDATE_SERVICE, function* (payload) {
        const {data, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(updateService, {data, token });
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchAddService() {
    yield takeEvery(actions.ADD_SERVICE, function* (payload) {
        const {data, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(addService, {data, token });
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchDeleteService() {
    yield takeEvery(actions.DELETE_SERVICE, function* (payload) {
        const {id, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(deleteService, {id, token });
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

// AMENITY

function* watchSearchServiceAndAmenity() {
    yield takeEvery(actions.SEARCH_AMENITY, function* (payload) {
        const {name, pageIndex, pageSize, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(searchServiceAndAmenity, {name, token, pageIndex, pageSize });
            if (response?.Data) {
                yield put(listAmenity(response?.Data))
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchUpdateAmenity() {
    yield takeEvery(actions.UPDATE_AMENITY, function* (payload) {
        const {data, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(updateAmenity, {data, token });
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchAddAmenity() {
    yield takeEvery(actions.ADD_AMENITY, function* (payload) {
        const {data, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(addAmenity, {data, token });
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchDeleteAmenity() {
    yield takeEvery(actions.DELETE_AMENITY, function* (payload) {
        const {id, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(deleteAmenity, {id, token });
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

// BEDTYPES
function* watchSearchBedTypes() {
    yield takeEvery(actions.SEARCH_BED_TYPES, function* (payload) {
        const {name, pageIndex, pageSize, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(searchBedTypes, {name, token, pageIndex, pageSize });
            if (response?.Data) {
                yield put(listBedTypes(response?.Data))
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

// VIEWS

function* watchUpdateViews() {
    yield takeEvery(actions.UPDATE_VIEWS, function* (payload) {
        const {id, data, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(updateViews, {id, data, token });
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchAddViews() {
    yield takeEvery(actions.ADD_VIEWS, function* (payload) {
        const {data, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(addViews, {data, token });
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchDeleteViews() {
    yield takeEvery(actions.DELETE_VIEWS, function* (payload) {
        const {id, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(deleteViews, {id, token });
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchSearchViews() {
    yield takeEvery(actions.SEARCH_VIEWS, function* (payload) {
        const {name, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(searchViews, {name, token });
            if (response?.Data) {
                yield put(listViews(response?.Data))
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

// REVENUE
function* watchRevenueByYear() {
    yield takeEvery(actions.REVENUE_BY_YEAR, function* (payload) {
        const {data, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(getRevenueByYear, {data, token });
            if (response?.Data) {
                yield put(listRevenueByYear(response?.Data))
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchRevenueAllYear() {
    yield takeEvery(actions.REVENUE_ALL_YEAR, function* (payload) {
        const { onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(getRevenueAllYear,  token);
            if (response?.Data) {
                yield put(listRevenueAllYear(response?.Data))
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

// APPROVE HOTELS

function* watchPendingHotels() {
    yield takeEvery(actions.PENDING_HOTEL, function* (payload) {
        const { onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(getListHotels,  token);
            if (response?.Data) {
                yield put(listHotel(response?.Data))
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchDeclineHotel() {
    yield takeEvery(actions.DECLINE_HOTEL, function* (payload) {
        const { hotelId, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(declineRequest,  {token, hotelId});
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

function* watchApproveHotel() {
    yield takeEvery(actions.APPROVE_HOTEL, function* (payload) {
        const { hotelId, onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(approveRequest,  {token, hotelId});
            if (response?.Data) {
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

export default function* AdminSaga() {
  yield all([
    fork(watchDeleteUserById),
    fork(watchSearchUser),
    fork(watchGetDetailUser),
    fork(watchUpdateService),
    fork(watchAddService),
    fork(watchDeleteService),
    fork(watchSearchServiceAndAmenity),
    fork(watchUpdateAmenity),
    fork(watchAddAmenity),
    fork(watchDeleteAmenity),
    fork(watchSearchBedTypes),
    fork(watchUpdateViews),
    fork(watchAddViews),
    fork(watchDeleteViews),
    fork(watchSearchViews),
    fork(watchRevenueByYear),
    fork(watchRevenueAllYear),
    fork(watchPendingHotels),
    fork(watchDeclineHotel),
    fork(watchApproveHotel),
  ]);
}
