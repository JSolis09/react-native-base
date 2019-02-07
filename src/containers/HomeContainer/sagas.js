import { all, put, takeEvery } from 'redux-saga/effects';
import { DEFAULT_ACTION } from './constants';
import { changeMessageAction } from './actions';

function delay(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

export function* defaultSaga() {
    const message = 'Message Changed with Saga!!';
    yield delay(1500);
    yield put(changeMessageAction(message));
}

export default function* rootSaga() {
    yield all([
        takeEvery(DEFAULT_ACTION, defaultSaga)
    ]);
}