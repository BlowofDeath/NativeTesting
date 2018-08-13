import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import Profile from '../components/Profile';
import AddProfile from '../components/AddProfile';
import Camera from '../components/Camera';

const Drawer = createDrawerNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				title: 'Ekran główny',
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
	Profile: {
		screen: Profile,
		navigationOptions: {
			header: null,
		},
	},
});

export default Stack;
