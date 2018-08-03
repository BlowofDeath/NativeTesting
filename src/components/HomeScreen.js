import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight, } from 'react-native';
import { stylesText, stylesView } from './styles';
import ct from './contacts.json';

export default class HomeScreen extends React.Component {
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
            data={ct}
            keyExtractor={(item, index) => index.toString()} 
            renderItem={({item}) => 
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
              <TouchableHighlight onPress={() => navigate('Profile', { name: item.name, surname: item.surname, tel: item.tel})}><Text style={stylesText.content}>{item.name} {item.surname}</Text></TouchableHighlight>
              <Text style={stylesText.content}>{item.tel}</Text>
            </View>}/>
            
  
          </View>
        </View>
      );
    }
  }
  

  
  