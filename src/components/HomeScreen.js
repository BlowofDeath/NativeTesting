import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight, AsyncStorage, Button } from 'react-native';
import { stylesText, stylesView } from './styles';
import { connect } from 'react-redux';
import ct from './contacts.json';
import * as ac from './../Store/Actions/main.ac';


class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={{flex: 1}}> 
          <View style={stylesView.header}> 
            <Text style={stylesText.header}>Kontakty</Text>
          </View>
          <View style={stylesView.content}>
   
            <FlatList 
            data={this.props.contacts}
            keyExtractor={(item, index) => index.toString()} 
            renderItem={({item, index}) => 
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
              <TouchableHighlight onPress={() => navigate('Profile', { id: index, name: item.name, surname: item.surname, tel: item.tel})}><Text style={stylesText.content}>{item.name} {item.surname}</Text></TouchableHighlight>
              <Text style={stylesText.content}>{item.tel}</Text>
            </View>}/>
          </View>
        </View>
      );
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
  

  
  