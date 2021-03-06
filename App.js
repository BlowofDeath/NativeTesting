import './ReactotronConfig';
import React from 'react';
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import Profile from './src/components/Profile';
import AddProfile from './src/components/AddProfile';
import { Provider } from 'react-redux';
import { store, persistor } from './src/Store/store';
import { PersistGate } from 'redux-persist/integration/react';


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
        <PersistGate loading={null} persistor={persistor}>
       <Stack />
       </PersistGate>
      </Provider>
    );
  }
}

export default App;




