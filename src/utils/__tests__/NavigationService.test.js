import NavigationService from '../NavigationService';

describe('NavigationService', () => {
    it('shoul be defined', () => {
        expect(NavigationService).toBeDefined();
        expect(NavigationService.setTopLevelNavigator).toBeDefined();
        expect(NavigationService.getNavigator).toBeDefined();
        expect(NavigationService.navigate).toBeDefined();
        expect(NavigationService.dispatchEvent).toBeDefined();
    });

    describe('@setTopLevelNavigator', () => {
        it('should set _navigator correctly', () => {
            const navigatorRef = {};
            NavigationService.setTopLevelNavigator(navigatorRef);
            expect(NavigationService.getNavigator()).toEqual(navigatorRef);
        });
    });

    describe('@navigate', () => {
        const ReactNavigation = require('react-navigation');
        it('should dispatch navigate event', () => {
            const navigatorRef = {
                dispatch: jest.fn(() => {})
            };
            const routeName = 'Home';
            const params = {};
            NavigationService.setTopLevelNavigator(navigatorRef);
            NavigationService.navigate(routeName, params);
            expect(navigatorRef.dispatch).toHaveBeenCalledWith(
                ReactNavigation.NavigationActions.navigate({
                    routeName,
                    params
                })
            );
        });
    });

    describe('dispatchEvent', () => {
        it('should call dispatch with event given', () => {
            const navigatorRef = {
                dispatch: jest.fn(() => {})
            };
            NavigationService.setTopLevelNavigator(navigatorRef);
            const event = () => {};
            NavigationService.dispatchEvent(event);
            expect(navigatorRef.dispatch).toHaveBeenCalledWith(event);
        });
    });
});