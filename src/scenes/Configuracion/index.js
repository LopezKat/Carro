import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Configuracion extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Settings </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F3C9F1'
  },
  text:{
      color: 'black',
      fontSize: 30,
  }
})

export default Configuracion;
