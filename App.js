import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import Profile from './src/components/Profile';


const Drawer = createDrawerNavigator({
  Home: { screen: HomeScreen },
  AddUser: { screen: Profile,
    navigationOptions: {
      title: 'Dodaj uzytkownik',
    }}
}, { drawerBackgroundColor: "#303030", drawerWidth: 150, contentOptions: { labelStyle: { color: 'orange'}}});

Drawer.navigationOptions = {
  header: null,
}
  

 
const App = createStackNavigator({
  Home: { screen: Drawer },
  Profile: { screen: Profile }
});

export default App;