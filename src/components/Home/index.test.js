import React from 'react';
import { create } from 'react-test-renderer';
import Home from './index';

describe('Home Component', () => {
    it('should render correctly', () => {
        const props = {
            message: 'Default Message',
            navigation: {
                navigate: jest.fn()
            }
        };
        const tree = create(<Home {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('goPageOne', () => {
        it('should call navigate with "PageOne" input', () => {
            const props = {
                message: 'Default Message',
                navigation: {
                    navigate: jest.fn(() => {})
                }
            };
            const tree = create(<Home {...props} />);
            jest.spyOn(props.navigation, 'navigate');
            const instance = tree.getInstance();
            instance.goPageOne();
            expect(props.navigation.navigate).toHaveBeenCalledWith('PageOne');
        });
    });
});