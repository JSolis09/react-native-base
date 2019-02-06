import {
    LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESSFUL
} from '../constants';
import LoginContainerReducer from '../reducer';

describe('LoginContainer reducer', () => {
    let initialState;
    beforeEach(() => {
        initialState = {
            alert: {
                visible: false,
                message: '',
                type: ''
            },
            user: {},
            loading: false
        };
    });

    it('should return default state', () => {
        const state = {
            ...initialState
        };
        expect(LoginContainerReducer(state, {})).toEqual(state);
    });

    it('should return LOGIN state', () => {
        const state = {
            ...initialState
        };
        const action = {
            type: LOGIN
        };
        const expectedState = {
            alert: { visible: false, message: ''},
            loading: true,
            user: {}
        };
        expect(LoginContainerReducer(state, action)).toEqual(expectedState);
    });

    it('should return LOGIN_SUCCESSFUL state', () => {
        const user = { userid: '1' };
        const action = {
            type: LOGIN_SUCCESSFUL,
            user
        };
        const expectedState = {
            ...initialState,
            alert: {
                visible: true,
                message: 'Login Successful!!',
                type: 'success'
            },
            loading: false,
            user
        };
        expect(LoginContainerReducer(initialState, action)).toEqual(expectedState);
    });

    it('should return LOGIN_FAILED state', () => {
        const message = 'There was an error';
        const action = {
            type: LOGIN_FAILED,
            message
        };
        const expectedState = {
            ...initialState,
            alert: {
                visible: true,
                message,
                type: 'error'
            },
            loading: false
        };
        expect(LoginContainerReducer(initialState, action)).toEqual(expectedState);
    });
});