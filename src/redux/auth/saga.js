import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { SignIn, SignUp } from '../../api/ApiAuth';
import { signin } from './slice'
function* watchSignIn() {
    yield takeEvery(actions.SIGNIN, function* (payload) {
        const { data, onError, onSuccess } = payload
        try {
            const response = yield call(SignIn, data);
            if (response?.Data !== "") {
                localStorage.setItem("Token", JSON.stringify(response?.Data?.access_token))
                localStorage.setItem("role", JSON.stringify(response?.Data?.role))
                yield put(signin({
                    profile: response?.Data?.id,
                    role: response?.Data?.role
                }))
                onSuccess && onSuccess();
            }
        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}
function* watchSignUp() {
    yield takeEvery(actions.SIGN_UP, function* (payload) {
        const { data, onSuccess, onError } = payload
        try {
            const response = yield call(SignUp, data);
            if (response?.Data) {
                onSuccess && onSuccess();
            }

        } catch (error) {
            onError && onError();
        } finally {
        }
    });
}
export default function* AuthSaga() {
    yield all([
        fork(watchSignIn),
        fork(watchSignUp),
    ]);
}