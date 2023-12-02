import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { SignIn, SignUp, LogOut } from '../../api/ApiAuth';
import { signin } from './slice'
function* watchSignIn() {
    yield takeEvery(actions.SIGNIN, function* (payload) {
        const { data, onError, onSuccess, onAdmin, onHost } = payload
        try {
            const response = yield call(SignIn, data);
            if (response?.Data !== "") {
                localStorage.setItem("Token", JSON.stringify(response?.Data?.access_token))
                localStorage.setItem("role", JSON.stringify(response?.Data?.role))
                localStorage.setItem("id", JSON.stringify(response?.Data?.id))
                localStorage.setItem("email", JSON.stringify(response?.Data?.email))
                localStorage.setItem("name", JSON.stringify(response?.Data?.name))
                localStorage.setItem('isLogin', true)
                yield put(signin({
                    role: response?.Data?.role
                }))
                if(response?.Data?.role === "ADMIN"){
                    onAdmin && onAdmin();
                }
                else if(response?.Data?.role === "HOST"){
                    onHost && onHost();
                }
                else {
                    onSuccess && onSuccess();
                }
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

function* watchLogOut() {
    yield takeEvery(actions.LOG_OUT, function* (payload) {
        const { onSuccess, onError } = payload
        const token = JSON.parse(localStorage.getItem('Token'));
        // console.log('token', token);
        try {
            const response = yield call(LogOut, token);
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
        fork(watchLogOut),
    ]);
}