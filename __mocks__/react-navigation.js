import React from 'react';
let MockApp = () => <div></div>;

export const createStackNavigator = jest.fn(() => {});
export const createAppContainer = jest.fn(() => MockApp);

createAppContainer.__setValue = (value) => MockApp = value;
