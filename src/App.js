import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeContainer from './components/Home';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeContainer }
  },
  {
    initialRouteName: 'Home'
  }
);

const App = createAppContainer(AppNavigator);

export default App;