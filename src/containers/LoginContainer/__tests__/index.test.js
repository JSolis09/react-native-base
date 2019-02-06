import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from "redux";

import Reducer from '../../../redux/reducers';
import LoginContainer from '../index';

describe('LoginContainer', () => {
    let store = createStore(Reducer);
    it('should render correctly', () => {
        const tree = create(
            <Provider store={store}>
                <LoginContainer />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});