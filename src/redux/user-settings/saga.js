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
        // Handle success
        yield put(changePasswordSuccess(response?.Data));

        // You can perform additional actions here if needed
        onSuccess && onSuccess();
      } else {
        // Handle unexpected empty response data
        yield put(changePasswordFailure("Unexpected response data"));
        onError && onError();
      }
    } catch (error) {
      // Handle error
      yield put(changePasswordFailure(error));

      // You can perform additional actions here if needed
      onError && onError();
    }
  });
}

export default function* AuthSaga() {
  yield all([fork(watchChangePassword)]);
}
