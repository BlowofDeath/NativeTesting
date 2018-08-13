import './ReactotronConfig';
import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import HomeScreen from './src/components/HomeScreen';
import Profile from './src/components/Profile';
import AddProfile from './src/components/AddProfile';
import Camera from './src/components/Camera';
import { store, persistor } from './src/Store/store';

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Ekran główn',
      },
    },
    Cam: {
      screen: Camera,
      navigationOptions: {
        title: 'Kamera',
      },
    },
    AddUser: {
      screen: AddProfile,
      navigationOptions: {
        title: 'Dodaj kontakt',
      },
    },
  },
  { drawerBackgroundColor: '#303030', drawerWidth: 150, contentOptions: { labelStyle: { color: 'orange' } } }
);

Drawer.navigationOptions = {
  header: null,
};

const Stack = createStackNavigator({
  Home: { screen: Drawer },
  Profile: { screen: Profile },
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Stack />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
