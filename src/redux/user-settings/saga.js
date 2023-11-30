import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { changePassword } from '../../api/apiUserSetting/ApiChangePassword';
import { getProfileById, updateProfileById } from '../../api/apiUserSetting/ApiProfile';
import { getHistoryById } from '../../api/apiUserSetting/ApiHistoryReservations';
import { changePasswordSuccess, changePasswordFailure, getProfile, updateProfileSuccess, updateProfileFailure, getHistoryReservations } from './slice';

function* watchChangePassword() {
  yield takeEvery(actions.CHANGEPASS, function* (payload) {
    const { data, onSuccess, onError } = payload;
    const token = JSON.parse(localStorage.getItem('Token'));
    try {
      const response = yield call(changePassword, {data, token});
      if (response.status === 200 ) {
        yield put(changePasswordSuccess(response));
        onSuccess && onSuccess();
      } else {
        yield put(changePasswordFailure("Unexpected response data"));
        onError && onError();
      }
    } catch (error) {
      yield put(changePasswordFailure(error));
      onError && onError();
    }
  });
}

function* watchGetProfile() {
  yield takeEvery(actions.GET_PROFILE, function* (payload) {
      const {id, onSuccess, onError } = payload;
      const token = JSON.parse(localStorage.getItem('Token'));
      try {
          const response = yield call(getProfileById, {id,token});
          if (response?.Data) {
              yield put(getProfile(response?.Data))
              onSuccess && onSuccess();
          }
      } catch (error) {
          onError && onError();
      } finally {
      }
  });
}

function* watchUpdateProfile() {
  yield takeEvery(actions.UPDATE_PROFILE, function* (payload) {
    const {id, data, onSuccess, onError } = payload;
    const token = JSON.parse(localStorage.getItem('Token'));
    try {
      const response = yield call(updateProfileById, {id , data, token});
      if (response.status === 200 ) {
        localStorage.setItem("name", JSON.stringify(data.fullName))
        yield put(updateProfileSuccess(response));
        onSuccess && onSuccess();
      } else {
        yield put(updateProfileFailure("Unexpected response data"));
        onError && onError();
      }
    } catch (error) {
      yield put(updateProfileFailure(error));
      onError && onError();
    }
  });
}

function* watchGetHistoryReservation() {
  yield takeEvery(actions.GET_HISTORY_RESERVATIONS, function* (payload) {
      const {requestData, onSuccess, onError } = payload
      try {
          const response = yield call(getHistoryById, requestData);
          if (response?.Data) {
              yield put(getHistoryReservations(response?.Data))
              onSuccess && onSuccess();
          }
      } catch (error) {
          onError && onError();
      } finally {
      }
  });
}

export default function* SettingSaga() {
  yield all([
    fork(watchChangePassword),
    fork(watchGetProfile),
    fork(watchUpdateProfile),
    fork(watchGetHistoryReservation),
  ]);
}