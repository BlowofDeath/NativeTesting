import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { stylesText } from './styles';

export default class ProfileDetailRow extends React.Component {
	render() {
		const { name, ph, type, stateUpdate } = this.props;
		return (
			<TextInput
				style={stylesText.profile_options}
				underlineColorAndroid="transparent"
				value={name}
				placeholder={ph}
				placeholderTextColor="#666"
				onChangeText={value => stateUpdate(type, value)}
			/>
		);
	}
}

ProfileDetailRow.propTypes = {
	name: PropTypes.string,
	ph: PropTypes.string,
	type: PropTypes.string.isRequired,
	stateUpdate: PropTypes.func.isRequired,
};

ProfileDetailRow.defaultProps = {
	name: null,
	ph: null,
};
