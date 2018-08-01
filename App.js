import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.content}>
          <Text>Content</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  content: {
    backgroundColor: '#909090',
    height: 600,
    padding: 10
    
  },
  header: {
    height: 60,
    backgroundColor: '#303030',
    paddingTop: 30,
    alignItems: 'center',


  }
};
