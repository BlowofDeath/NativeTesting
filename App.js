import './ReactotronConfig';
import React from 'react';
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';
import { AsyncStorage } from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import Profile from './src/components/Profile';
import AddProfile from './src/components/AddProfile';
import Storage from './src/tools/Storage';


const Drawer = createDrawerNavigator({
  Home: { screen: HomeScreen, navigationOptions: {
    title: 'Ekran główn',
  }},
  AddUser: { screen: AddProfile, navigationOptions: {
      title: 'Dodaj kontakt',
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