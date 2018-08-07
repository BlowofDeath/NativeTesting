import React from 'react';
import { Text, View, Button, Alert  } from 'react-native';
import { stylesText, stylesView } from './styles';
import ProfileDetailRow from './ProfileDetailRow';
import { connect } from 'react-redux';
import * as ac from './../Store/Actions/main.ac';

class AddProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            tel: ''
        };
    }
    static navigationOptions = {
        header: null
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
          <View style={{flex: 1}}>
    
            <View style={stylesView.header}>
              <Text style={stylesText.header}>Dodaj kontakt</Text>
            </View>
            
            <View style={stylesView.content}>
                <ProfileDetailRow type="name" name={this.state.name} ph="Name" stateUpdate={this.stateUpdate.bind(this)}/>
                <ProfileDetailRow type="surname" name={this.state.surname} ph="Surname" stateUpdate={this.stateUpdate.bind(this)}/>
                <ProfileDetailRow type="tel" name={this.state.tel} ph="tel." stateUpdate={this.stateUpdate.bind(this)}/>
            </View>
            <Button
            onPress={() => {
                Alert.alert(
                    'Dodano nowy kontakt',
                    'Czy chcesz dodać kolejny?',
                    [
                      {text: 'Nie', onPress: () => navigate('Home'), style: 'cancel'},
                      {text: 'Tak', onPress: () => {this.setState({name: '', surname: '', tel: ''})}},
                    ],
                    { cancelable: true }
                  )
            }}
            title="Dodaj kontakt"
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
        addContact: (name, surname, tel) => dispatch(ac.addContact(name, surname, tel))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProfile);