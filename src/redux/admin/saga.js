import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { getListUser, deleteUserById, getDetailUser } from '../../api/apiAdmin/ApiUser';
import { getListService, updateService, addService, deleteService, getListAmenity, updateAmenity, addAmenity, deleteAmenity} from '../../api/apiAdmin/ApiServiceAmenity';
import { listUser, detailUser, listService, listAmenity } from './slice';

// USER
function* watchGetListUser() {
  yield takeEvery(actions.GET_LIST_USER, function* (payload) {
      const {pageIndex, pageSize, onSuccess, onError } = payload;
      const token = JSON.parse(localStorage.getItem('Token'));
      try {
          const response = yield call(getListUser, {pageIndex, pageSize, token });
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

// SERVICE
function* watchGetListService() {
    yield takeEvery(actions.GET_LIST_SERVICE, function* (payload) {
        const {onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
      try {
            const response = yield call(getListService, token);
            if (response?.Data) {
                yield put(listService(response?.Data))
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}

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
function* watchGetListAmenity() {
    yield takeEvery(actions.GET_LIST_AMENITY, function* (payload) {
        const {onSuccess, onError } = payload;
        const token = JSON.parse(localStorage.getItem('Token'));
        try {
            const response = yield call(getListAmenity, token);
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

export default function* AdminSaga() {
  yield all([
    fork(watchGetListUser),
    fork(watchDeleteUserById),
    fork(watchGetDetailUser),
    fork(watchGetListService),
    fork(watchUpdateService),
    fork(watchAddService),
    fork(watchDeleteService),
    fork(watchGetListAmenity),
    fork(watchUpdateAmenity),
    fork(watchAddAmenity),
    fork(watchDeleteAmenity),
  ]);
}