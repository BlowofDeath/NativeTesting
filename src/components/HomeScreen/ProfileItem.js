import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { stylesText } from '../styles';

class ProfileItem extends React.Component {
	navigateToProfile(index, item) {
		const { navigation } = this.props;
		navigation.navigate('Profile', { id: index, name: item.name, surname: item.surname, tel: item.tel });
	}

	render() {
		const { index, item } = this.props;
		return (
			<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
				<TouchableHighlight onPress={() => this.navigateToProfile(index, item)}>
					<Text style={stylesText.content}>
						{item.name} {item.surname}
					</Text>
				</TouchableHighlight>
				<Text style={stylesText.content}>{item.tel}</Text>
			</View>
		);
	}
}

ProfileItem.propTypes = {
	navigation: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	item: PropTypes.object.isRequired,
};

export default ProfileItem;
