import {
    loginAction,
    loginFailedAction,
    loginSuccessfulAction
} from '../actions';
import {
    LOGIN,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED
} from '../constants';

describe('LoginContainer actions', () => {
    it('should return LOGIN type', () => {
        const [email, password] = ['correo@example.com', '12345678']
        const expected = {
          type: LOGIN,
          auth: {
            email,
            password
          }
        };
        expect(loginAction(email, password)).toEqual(expected);
    });

    it('should return LOGIN_SUCCESSFUL type', () => {
        const user = { userid: '1' };
        const expected = {
          type: LOGIN_SUCCESSFUL,
          user
        };
        expect(loginSuccessfulAction(user)).toEqual(expected);
    });

    it('should return LOGIN_FAILED type', () => {
        const message = 'There was an error';
        const expected = {
          type: LOGIN_FAILED,
          message
        };
        expect(loginFailedAction(message)).toEqual(expected);
    });
});
