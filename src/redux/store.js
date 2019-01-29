import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import Reducer from "./reducers";

import rootSaga from '../containers/HomeContainer/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;