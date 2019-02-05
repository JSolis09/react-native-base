import React, { Component } from 'react';
import { View } from 'react-native';

class MockApp extends Component {
    render() {
        return <View></View>;
    }
}

export const createStackNavigator = jest.fn(() => {});
export const createAppContainer = jest.fn(() => MockApp);

createAppContainer.__setValue = (value) => MockApp = value;
