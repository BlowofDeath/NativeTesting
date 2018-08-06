import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, ViewPagerAndroid } from 'react-native';
import { stylesText, stylesView } from './styles';
import ProfileDetailRow from './ProfileDetailRow';
import { connect } from 'react-redux';
import * as ac from './../Store/Actions/main.ac';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            name: navigation.getParam('name'),
            surname: navigation.getParam('surname'),
            tel: navigation.getParam('tel')
        };
    }
    static navigationOptions = {
        header: null
    }
    render() {
        return (
          <View style={{flex: 1}}>
            
            <View style={stylesView.header}>
              <Text style={stylesText.header}>Profil</Text>
            </View>
            
            <View style={stylesView.content}>
                <ProfileDetailRow type="name" name={this.state.name} ph="Name" stateUpdate={this.stateUpdate.bind(this)}/>
                <ProfileDetailRow type="surname" name={this.state.surname} ph="Surname" stateUpdate={this.stateUpdate.bind(this)}/>
                <ProfileDetailRow type="tel" name={this.state.tel} ph="tel." stateUpdate={this.stateUpdate.bind(this)}/>
            </View>
         
          </View>
        );
    }
    stateUpdate(type, event) {
            this.setState({ [type]: event.target.value });
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    };  
}

const mapDispatchToProps = dispatch => {
    return {
        addContact: (name, surname, tel) => dispatch(ac.addContact)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

