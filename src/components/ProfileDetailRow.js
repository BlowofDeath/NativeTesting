import React from 'react';
import { Text, View, TextInput} from 'react-native';
import { stylesText, stylesView } from './styles';

export default class ProfileDetailRow extends React.Component {
    render() {
        return (
            <TextInput 
                style={stylesText.profile_options} 
                underlineColorAndroid={'transparent'}  
                value={this.props.name}
                placeholder={this.props.ph}
                placeholderTextColor='#666' 
                onChangeText={(value) => this.props.stateUpdate(this.props.type, value)}/>
        );
    }
}