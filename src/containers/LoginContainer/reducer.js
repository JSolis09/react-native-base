import {
    LOGIN,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED
} from './constants';

const initialState = {
    alert: {
        visible: false,
        message: '',
        type: ''
    },
    user: {},
    loading: false
};

export default function LoginContainerReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                alert: { visible: false, message: ''},
                loading: true
            };
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                alert: {
                    visible: true,
                    message: 'Login Successful!!',
                    type: 'success'
                },
                loading: false,
                user: action.user
            };
        case LOGIN_FAILED:
            return {
                ...state,
                alert: {
                    visible: true,
                    message: action.message,
                    type: 'error'
                },
                loading: false
            };
        default:
            return state;
    }
}