import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { stylesText, stylesView } from './styles';
import ProfileDetailRow from './ProfileDetailRow';
import { addContact } from '../Store/Actions/main.ac';

class AddProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			surname: '',
			tel: '',
		};

		this.stateUpdate = this.stateUpdate.bind(this);
	}

	stateUpdate(type, value) {
		this.setState({ [type]: value });
	}

	render() {
		const { navigation, addContact } = this.props;
		const { name, surname, tel } = this.state;

		return (
			<View style={{ flex: 1 }}>
				<View style={stylesView.header}>
					<Text style={stylesText.header}>Dodaj kontakt</Text>
				</View>

				<View style={stylesView.content}>
					<ProfileDetailRow type="name" name={name} ph="Name" stateUpdate={this.stateUpdate} />
					<ProfileDetailRow type="surname" name={surname} ph="Surname" stateUpdate={this.stateUpdate} />
					<ProfileDetailRow type="tel" name={tel} ph="tel." stateUpdate={this.stateUpdate} />
				</View>
				<Button
					onPress={() => {
						if (name && surname && tel) {
							addContact(name, surname, tel);
							Alert.alert(
								'Dodano nowy kontakt',
								'Czy chcesz dodać kolejny?',
								[
									{ text: 'Nie', onPress: () => navigation.navigate('Home'), style: 'cancel' },
									{
										text: 'Tak',
										onPress: () => {
											this.setState({ name: '', surname: '', tel: '' });
										},
									},
								],
								{ cancelable: true }
							);
						} else Alert.alert('Komunikat', 'Pola nie mogą być puste', [{ text: 'Ok' }]);
					}}
					title="Dodaj kontakt"
					color="#ffae3d"
				/>
			</View>
		);
	}
}

AddProfile.propTypes = {
	navigation: PropTypes.object.isRequired,
	addContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	contacts: state.contacts,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addContact }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddProfile);
