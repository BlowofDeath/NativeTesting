import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight, } from 'react-native';
import { stylesText, stylesView } from './styles';

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
            data={[{key: '1', name: 'Jackson', surname: 'Strahovsky', tel: '664354789'},{key: '2', name: 'Adam', surname: 'Golkovsky', tel: '768564386'}, {key: '3', name: 'Horacy', surname: 'Iwaniewicz', tel: undefined}]} 
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
  

  
  