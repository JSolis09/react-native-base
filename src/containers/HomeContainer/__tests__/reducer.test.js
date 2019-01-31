import { DEFAULT_ACTION, MESSAGE_CHANGED } from '../constants';
import HomeContainerReducer from '../reducer';

describe('HomeContainer reducer', () => {
    it('should return default state', () => {
        const state = {
            message: 'default message'
        };
        expect(HomeContainerReducer(state, {})).toEqual(state);
    });

    it('should return DEFAULT_ACTION state', () => {
        const initialState = {
            message: 'Hello World'
        };
        const action = {
            type: DEFAULT_ACTION
        };
        const expectedState = {
            ...initialState
        };
        expect(HomeContainerReducer(initialState, action)).toEqual(expectedState);
    });

    it('should return MESSAGE_CHANGED state', () => {
        const initialState = {
            message: 'Hello World'
        };
        const action = {
            type: MESSAGE_CHANGED,
            message: 'Message changed!'
        };
        const expectedState = {
            ...initialState,
            message: action.message
        };
        expect(HomeContainerReducer(initialState, action)).toEqual(expectedState);
    });
});