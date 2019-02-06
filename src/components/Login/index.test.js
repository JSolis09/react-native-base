import React from 'react';
import { create } from 'react-test-renderer';
import { TextInput} from 'react-native';
import Login from './index';

describe('Login Component', () => {
    it('should render correctly', () => {
        const props = {
            alert: {
                visible: false,
                message: '',
                type: ''
            },
            loading: false,
            login: jest.fn(() => {})
        };
        const tree = create(<Login {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('@getBackgroundColorByType', () => {
        it('should be defined if type is success or error', () => {
            const props = {
                alert: {
                    visible: false,
                    message: '',
                    type: ''
                },
                loading: false,
                login: jest.fn(() => {})
            };
            const instance = create(<Login {...props} />).getInstance();
            ['success', 'error'].forEach((type) => {
                const color = instance.getBackgroundColorByType(type)
                expect(color).toBeDefined();
            });
        });
    });

    describe('@onLogin', () => {
        it('should call login with email and password', () => {
            const props = {
                alert: {
                    visible: false,
                    message: '',
                    type: ''
                },
                loading: false,
                login: jest.fn(() => {})
            };
            const [email, password] = ['correo@example.com', '12345678']
            const instance = create(<Login {...props} />).getInstance();
            instance.setState({ username: email, password });
            jest.spyOn(props, 'login');
            instance.onLogin();
            expect(props.login).toHaveBeenCalledWith(email, password);
        });
        it('should not call login', () => {
            const props = {
                alert: {
                    visible: false,
                    message: '',
                    type: ''
                },
                loading: false,
                login: jest.fn(() => {})
            };
            const instance = create(<Login {...props} />).getInstance();
            jest.spyOn(props, 'login');
            instance.onLogin();
            expect(props.login).not.toHaveBeenCalled();
        });
    });

    describe('@TextInput', () => {
        it('should set the correct values', () => {
            const props = {
                alert: {
                    visible: false,
                    message: '',
                    type: ''
                },
                loading: false,
                login: () => {}
            };
            const tree = create(<Login {...props} />);
            const instance = tree.root;
            const emailInput = instance.findAllByType(TextInput)[0];
            const passwordInput = instance.findAllByType(TextInput)[1];
            const emailValue = 'correo@example.com';
            const passwordValue = '12345678';
            emailInput.props.onChangeText(emailValue);
            passwordInput.props.onChangeText(passwordValue);
            expect(tree.getInstance().state.username).toBe(emailValue);
            expect(tree.getInstance().state.password).toBe(passwordValue);
        });
    });
});