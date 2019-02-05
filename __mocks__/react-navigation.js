import React, { Component } from 'react';
import { View } from 'react-native';

class MockApp extends Component {
    render() {
        return <View></View>;
    }
}

export const NavigationActions = {
    navigate: jest.fn(() => {})
};
export const StackActions = {
    reset: jest.fn(() => {})
};
export const createStackNavigator = jest.fn(() => {});
export const createAppContainer = jest.fn(() => MockApp);

createAppContainer.__setValue = (value) => MockApp = value;
