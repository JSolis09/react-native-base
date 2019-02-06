import React from 'react';
import { create } from 'react-test-renderer';
import Login from './index';

describe('Home Component', () => {
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
});