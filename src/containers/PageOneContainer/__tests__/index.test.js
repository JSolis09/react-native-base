import React from 'react';
import { create } from 'react-test-renderer';
import PageOneContainer from '../index';

describe('PageOneContainer', () => {
    it('should render correctly', () => {
        const tree = create(<PageOneContainer />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});