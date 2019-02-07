import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN, LOGIN_SUCCESSFUL } from './constants';
import { StackActions, NavigationActions } from 'react-navigation';

import { loginSuccessfulAction, loginFailedAction } from './actions';
import firebase from '../../firebase/FirebaseService';
import NavigationService from '../../utils/NavigationService';

export function authentication(email, password) {
    return firebase.auth()
        .signInWithEmailAndPassword(email, password);
}

export function* loginSaga({ auth }) {
    const { email, password } = auth;
    try {
        const user = yield call(authentication, email, password);
        yield put(loginSuccessfulAction(user));
    } catch(e) {
        yield put(loginFailedAction(e.message));
    }
}

export function goHomeSaga() {
    setTimeout(() => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
        });
        NavigationService.dispatchEvent(resetAction);
    }, 3000);
}

export default function* rootSaga() {
    yield all([
        takeEvery(LOGIN, loginSaga),
        takeEvery(LOGIN_SUCCESSFUL, goHomeSaga)
    ]);
}