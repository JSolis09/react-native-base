import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import PageOneContainer from './containers/PageOneContainer';
import store from './redux/store';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeContainer },
    PageOne: { screen: PageOneContainer },
    Login: { screen: LoginContainer }
  },
  {
    initialRouteName: 'Login'
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