import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight, } from 'react-native';

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
            data={[{key: '1', name: 'Jackson', surname: 'Strahovsky', tel: '664354789'},{key: '2', name: 'Adam', surname: 'Golkovsky', tel: '768564386'}]} 
            renderItem={({item}) => 
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
              <TouchableHighlight onPress={() => navigate('Profile')}><Text style={stylesText.content}>{item.name} {item.surname}</Text></TouchableHighlight>
              <Text style={stylesText.content}>{item.tel}</Text>
            </View>}/>
  
          </View>
        </View>
      );
    }
  }
  
  const stylesView = {
    content: {
      backgroundColor: '#c9c9c9',
      padding: 10,
      flex: 8,
      
    },
    header: {
      height: 60,
      backgroundColor: '#303030',
      paddingTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    listbox: {
  
    }
  };
  
  const stylesText = {
    header: {
      fontSize: 30,
      color: 'white'
    },
    content: {
      fontSize: 20,
      color: '#f9f9f9',
      padding: 10
  
    }
  };
  
  