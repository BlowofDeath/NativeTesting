import './ReactotronConfig';
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import Profile from './src/components/Profile';
import AddProfile from './src/components/AddProfile';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer(state = { contacts: {name: 'grrr'}}, action) {
  return state;
}

const store = createStore(reducer);

const reducer = (state = {}, action) => {
  switch (action.type) {
      default:
          return state;
  }
}

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
  
const Stack = createStackNavigator({
  Home: { screen: Drawer},
  Profile: { screen: Profile }
});



class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
       <Stack />
      </Provider>
    );
  }
}

export default App;




