import React from 'react';
import { create } from 'react-test-renderer';
import Home from './index';

describe('Home Component', () => {
    it('should render correctly', () => {
        const props = {
            message: 'Default Message'
        };
        const tree = create(<Home {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});