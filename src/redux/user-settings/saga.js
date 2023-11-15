import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { changePassword } from '../../api/ApiChangePassword';
import { changePasswordSuccess, changePasswordFailure } from './slice';

function* watchChangePassword() {
  yield takeEvery(actions.CHANGE_PASSWORD, function* (action) {
    const { data, onSuccess, onError } = action.payload;

    try {
      const response = yield call(changePassword, data);

      if (response?.Data !== "") {
        yield put(changePasswordSuccess(response?.Data));
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

export default function* SettingSaga() {
  yield all([fork(watchChangePassword)]);
}
