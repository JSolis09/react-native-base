import { call, put } from 'redux-saga/effects';
import { authentication, loginSaga, goHomeSaga } from '../sagas';
import { loginSuccessfulAction, loginFailedAction } from '../actions';

jest.mock('../../../utils/NavigationService');
jest.mock('../../../firebase/FirebaseService');
const NavigationService = require('../../../utils/NavigationService').default;
const firebase = require('../../../firebase/FirebaseService').default;

describe('LoginContainer Saga', () => {
    describe('@authentication', () => {
        it('should call signInWithEmailAndPassword with email and password', () => {
            const [email, password] = ['correo@example.com', '12345678'];
            const fakeUser = { userid: 1 };
            jest.spyOn(firebase.auth(), 'signInWithEmailAndPassword')
                .mockReturnValue(Promise.resolve(fakeUser));
            authentication(email, password)
                .then((response) => {
                    expect(firebase.auth().signInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
                    expect(response).toEqual(fakeUser);
                });
        });
    });

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
        it('should call loginFailedAction', () => {
            const auth = {
                email: 'correo@example.com',
                password: '12345678'
            };
            const errorMessage = 'Something happened!';
            const generator = loginSaga({ auth });
            generator.next();
            const errorValue = generator
                .throw(new Error(errorMessage))
                .value;
            expect(errorValue).toEqual(put(loginFailedAction(errorMessage)))
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