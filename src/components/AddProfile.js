import React from 'react';
import { Text, View, Button  } from 'react-native';
import { stylesText, stylesView } from './styles';
import ProfileDetailRow from './ProfileDetailRow';

export default class AddProfile extends React.Component {
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
            onPress={() => { alert('e')}}
            title="Dodaj kontakt"
            color="#ffae3d"
            />
         
          </View>
        );
    }
    stateUpdate(type, event) {
            this.setState({ [type]: event.target.value });
    }
}