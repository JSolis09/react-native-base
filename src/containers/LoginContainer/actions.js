import {
    LOGIN,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED
} from './constants';
export const loginAction = (email, password) => ({
    type: LOGIN,
    auth: {
        email,
        password
    }
});

export const loginSuccessfulAction = (user) => ({
    type: LOGIN_SUCCESSFUL,
    user
});

export const loginFailedAction = (message) => ({
    type: LOGIN_FAILED,
    message
});