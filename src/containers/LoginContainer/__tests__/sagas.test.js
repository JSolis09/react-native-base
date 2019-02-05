import { call, put } from 'redux-saga/effects';
import { authentication, loginSaga, goHomeSaga } from '../sagas';
import { loginSuccessfulAction } from '../actions';

jest.mock('../../../utils/NavigationService');
jest.mock('../../../firebase/FirebaseService');
const firebase = require('../../../firebase/FirebaseService').default;
const NavigationService = require('../../../utils/NavigationService').default;

describe('LoginContainer Saga', () => {
    describe('@loginSaga', () => {
        it('should call authentication with email and password', () => {
            const auth = {
                email: 'correo@example.com',
                password: '12345678'
            };
            const generator = loginSaga({ auth });
            const expected = call(authentication, auth.email, auth.password);
            expect(generator.next().value).toEqual(expected);
        });
        it('should call loginSuccessfulAction', () => {
            const auth = {
                email: 'correo@example.com',
                password: '12345678'
            };
            const user = { userid: 1 };
            const generator = loginSaga({ auth });
            generator.next();
            expect(generator.next(user).value).toEqual(put(loginSuccessfulAction(user)));
        });
    });
    describe('@goHomeSaga', () => {
        it('should call NavigationService.dispatchEvent', () => {
            jest.useFakeTimers();
            jest.spyOn(NavigationService, 'dispatchEvent');
            goHomeSaga();
            jest.advanceTimersByTime(3000);
            expect(NavigationService.dispatchEvent).toHaveBeenCalled();
        });
    });
});