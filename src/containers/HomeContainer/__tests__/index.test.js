import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from "redux";

import Reducer from '../../../redux/reducers';
import HomeContainer from '../index';

describe('HomeContainer', () => {
    let store = createStore(Reducer);
    it('should render correctly', () => {
        const tree = create(
            <Provider store={store}>
                <HomeContainer />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});