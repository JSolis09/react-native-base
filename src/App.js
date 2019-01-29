import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import HomeContainer from './containers/HomeContainer';
import PageOneContainer from './containers/PageOneContainer';
import store from './redux/store';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeContainer },
    PageOne: { screen: PageOneContainer }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;