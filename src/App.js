import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeContainer from './containers/HomeContainer';
import PageOneContainer from './containers/PageOneContainer';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeContainer },
    PageOne: { screen: PageOneContainer }
  },
  {
    initialRouteName: 'Home'
  }
);

const App = createAppContainer(AppNavigator);

export default App;