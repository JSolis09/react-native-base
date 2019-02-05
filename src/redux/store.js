import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import Reducer from "./reducers";

import homeSagas from '../containers/HomeContainer/sagas';
import loginSagas from '../containers/LoginContainer/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(homeSagas);
sagaMiddleware.run(loginSagas);

export default store;