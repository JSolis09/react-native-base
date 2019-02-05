import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './redux/store';

import firebase from './firebase/FirebaseService';
import firebaseConfig from './firebase/config.prod';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import PageOneContainer from './containers/PageOneContainer';
import NavigationService from './utils/NavigationService';

firebase.initializeApp(firebaseConfig);

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
      <AppContainer
        ref={ navigationRef => NavigationService.setTopLevelNavigator(navigationRef) }
      />
    </Provider>
  );
}

export default App;