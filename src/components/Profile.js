import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import call from 'react-native-phone-call';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { stylesText, stylesView } from './styles';
import ProfileDetailRow from './ProfileDetailRow';
import { removeContact, editContact } from '../Store/Actions/main.ac';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		const { navigation } = this.props;
		this.state = {
			id: navigation.getParam('id'),
			name: navigation.getParam('name'),
			surname: navigation.getParam('surname'),
			tel: navigation.getParam('tel'),
		};
		this.stateUpdate = this.stateUpdate.bind(this);
	}

	stateUpdate(type, value) {
		this.setState({ [type]: value });
	}

	saveChangesPress() {
		const { navigation, editContact } = this.props;
		const { id, name, surname, tel } = this.state;
		Alert.alert(
			'Komunikat',
			'Czy napewno chcesz zapisać zmiany?',
			[
				{ text: 'Nie', style: 'cancel' },
				{
					text: 'Tak',
					onPress: () => {
						editContact(id, name, surname, tel);
						navigation.navigate('Home');
					},
				},
			],
			{ cancelable: true }
		);
	}

	deletePress() {
		const { navigation, removeContact } = this.props;
		const { id } = this.state;
		Alert.alert(
			'Komunikat',
			'Czy napewno chcesz usunąć kontakt?',
			[
				{ text: 'Nie', style: 'cancel' },
				{
					text: 'Tak',
					onPress: () => {
						removeContact(id);
						navigation.navigate('Home');
					},
				},
			],
			{ cancelable: true }
		);
	}

	render() {
		const { name, surname, tel } = this.state;
		return (
			<View style={{ flex: 1 }}>
				<View style={stylesView.header}>
					<Text style={stylesText.header}>Profil</Text>
				</View>

				<View style={stylesView.content}>
					<ProfileDetailRow type="name" name={name} ph="Name" stateUpdate={this.stateUpdate} />
					<ProfileDetailRow type="surname" name={surname} ph="Surname" stateUpdate={this.stateUpdate} />
					<ProfileDetailRow type="tel" name={tel} ph="tel." stateUpdate={this.stateUpdate} />
				</View>
				<Button
					onPress={() => {
						call({ number: tel, prompt: false }).catch(console.error);
					}}
					title="Zadzwoń"
					color="#ffae3d"
				/>
				<Button
					onPress={() => {
						this.saveChangesPress();
					}}
					title="Zapisz zmiany"
					color="#ffae3d"
				/>
				<Button
					onPress={() => {
						this.deletePress();
					}}
					title="Usuń"
					color="#ffae3d"
				/>
			</View>
		);
	}
}

Profile.propTypes = {
	navigation: PropTypes.object.isRequired,
	removeContact: PropTypes.func.isRequired,
	editContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	contacts: state.contacts,
});

const mapDispatchToProps = dispatch => bindActionCreators({ removeContact, editContact }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile);
