import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import Profile from './src/components/Profile';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: Profile }
  
});

export default App;