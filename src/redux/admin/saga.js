import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { getListUser, deleteUserById, getDetailUser } from '../../api/apiAdmin/ApiUser';
import { listUser, detailUser } from './slice';

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
      try {
          const response = yield call(deleteUserById, id);
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

export default function* AdminSaga() {
  yield all([
    fork(watchGetListUser),
    fork(watchDeleteUserById),
    fork(watchGetDetailUser),
  ]);
}