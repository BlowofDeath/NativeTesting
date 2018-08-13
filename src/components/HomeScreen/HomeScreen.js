import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { stylesText, stylesView } from '../styles';
import ProfileItem from './ProfileItem';

class HomeScreen extends React.Component {
	render() {
		const { contacts, navigation } = this.props;
		return (
			<View style={{ flex: 1 }}>
				<View style={stylesView.header}>
					<Text style={stylesText.header}>Kontakty</Text>
				</View>
				<View style={stylesView.content}>
					<FlatList
						data={contacts}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item, index }) => <ProfileItem item={item} navigation={navigation} index={index} />}
					/>
				</View>
			</View>
		);
	}
}

HomeScreen.propTypes = {
	contacts: PropTypes.array.isRequired,
	navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	contacts: state.contacts,
});

export default connect(mapStateToProps)(HomeScreen);
