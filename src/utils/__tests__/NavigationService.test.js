import NavigationService from '../NavigationService';

describe('NavigationService', () => {
    it('shoul be defined', () => {
        expect(NavigationService).toBeDefined();
        expect(NavigationService.setTopLevelNavigator).toBeDefined();
        expect(NavigationService.navigate).toBeDefined();
        expect(NavigationService.dispatchEvent).toBeDefined();
    });
});