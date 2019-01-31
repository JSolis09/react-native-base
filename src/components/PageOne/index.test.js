import React from 'react';
import { create } from 'react-test-renderer';
import PageOne from './index';

describe('Home Component', () => {
    it('should render correctly', () => {
        const tree = create(<PageOne />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});