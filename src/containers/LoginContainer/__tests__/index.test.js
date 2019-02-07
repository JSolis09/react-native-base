import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from "redux";

import Reducer from '../../../redux/reducers';
import LoginContainer, { mapDispatchToProps } from '../index';
import { loginAction } from '../actions';

jest.mock('react-native-snackbar-component', () => require('../../../../__mocks__/react-native-snackbar-component'));
jest.mock('react-native-loading-spinner-overlay', () => require('../../../../__mocks__/react-native-loading-spinner-overlay'));
jest.mock('../../../components/Login', () => require('../../../components/Login/__mocks__/Login'));

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

    describe('@mapDispatchToProps', () => {
        it('should call loginAction', () => {
            const dispatch = jest.fn();
            const [email, password] = ['email', 'password'];
            mapDispatchToProps(dispatch).login(email, password)
            expect(dispatch).toHaveBeenCalledWith(loginAction(email, password))
        });
    });
});