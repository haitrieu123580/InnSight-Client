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
                localStorage.setItem("Token", JSON.stringify(response?.Data))
                localStorage.setItem("role", JSON.stringify(response?.role || 'host'))
                yield put(signin({
                    profile: response?.Profile,
                    role: "host"
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
            // if (response?.Token) {
            //     localStorage.setItem("Token", JSON.stringify(response?.Token))
            // }
            onSuccess && onSuccess();

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
