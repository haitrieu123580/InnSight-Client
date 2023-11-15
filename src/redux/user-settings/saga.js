import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { changePassword } from '../../api/ApiChangePassword';
import { getProfileById } from '../../api/ApiProfile';
import { changePasswordSuccess, changePasswordFailure, getProfile } from './slice';

function* watchChangePassword() {
  yield takeEvery(actions.CHANGEPASS, function* (payload) {
    const { data, onSuccess, onError } = payload;

    try {
      const response = yield call(changePassword, data);
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
      const {id, onSuccess, onError } = payload
      try {
          const response = yield call(getProfileById, id);
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

export default function* SettingSaga() {
  yield all([
    fork(watchChangePassword),
    fork(watchGetProfile),
  ]);
}
