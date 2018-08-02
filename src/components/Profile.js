import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { stylesText, stylesView } from './styles';

export default class Profile extends React.Component {
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
                <TextInput 
                style={stylesText.profile_options} 
                underlineColorAndroid={'transparent'}  
                value={this.state.name}
                placeholder={'Imię'}
                placeholderTextColor='#666' 
                onChange={(e) => { this.setState({ name: e.target.value })}}/>
                <TextInput 
                style={stylesText.profile_options} 
                underlineColorAndroid={'transparent'}  
                value={this.state.surname} 
                placeholder={'Nazwisko'}
                placeholderTextColor='#666'
                onChange={(e) => { this.setState({ surname: e.target.value })}}/>
                <TextInput 
                style={stylesText.profile_options} 
                underlineColorAndroid={'transparent'}   
                value={this.state.tel}
                placeholder='Telefon'
                placeholderTextColor='#666'
                onChange={(e) => { this.setState({ tel: e.target.value })}}/>
            </View>
            
          </View>
        );

    }
}