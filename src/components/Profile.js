import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { stylesText, stylesView } from './styles';
import ProfileDetailRow from './ProfileDetailRow';
import { connect } from 'react-redux';
import * as ac from './../Store/Actions/main.ac';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            id: navigation.getParam('id'),
            name: navigation.getParam('name'),
            surname: navigation.getParam('surname'),
            tel: navigation.getParam('tel')
        };
    }
    static navigationOptions = {
        header: null
    }
    render() {
        console.log(this.state.id);
        const { navigate } = this.props.navigation;
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
            <Button
            onPress={() => {
                Alert.alert(
                    'Komunikat',
                    'Czy napewno chcesz zapisać zmiany?',
                    [
                      {text: 'Nie',  style: 'cancel'},
                      {text: 'Tak', onPress: () => {this.props.editContact(this.state.id, this.state.name, this.state.surname, this.state.tel); navigate('Home') }},
                    ],
                    { cancelable: true }
                  )
            }}
            title="Zapisz zmiany"
            color="#ffae3d"
            />
            <Button 
            onPress={() => {
                Alert.alert(
                    'Komunikat',
                    'Czy napewno chcesz usunąć kontakt?',
                    [
                      {text: 'Nie', style: 'cancel'},
                      {text: 'Tak', onPress: () => {this.props.removeContact(this.state.id); navigate('Home') }},
                    ],
                    { cancelable: true }
                  )
            }}
            title="Usuń"
            color="#ffae3d"
            />
          </View>
        );
    }
    stateUpdate(type, value) {
        this.setState({ [type]: value });
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    };  
}

const mapDispatchToProps = dispatch => {
    return {
        removeContact: (id) => dispatch(ac.removeContact(id)),
        editContact: (id, name, surname, tel) => dispatch(ac.editContact(id, name, surname, tel))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

