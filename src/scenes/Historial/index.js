import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

class Historial extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
      <View>
          <Image 
              style={styles.image}
              source={{ uri: 'https://imei24.com/img/apple/11_41_10_apple-iphone-x.jpg'}}
          />           
      </View>
      <View style={styles.content}>
          <Text style={styles.contactName}>Iphone X</Text>
          <Text style={styles.text}>$3.600.000</Text>
      </View>
      <View>
          <Image 
              style={styles.image}
              source={{ uri: 'https://i.blogs.es/82c915/moto-g6/450_1000.jpg'}}
          />           
      </View>
      <View style={styles.content}>
          <Text style={styles.contactName}>Moto G6</Text>
          <Text style={styles.text}>$600.000</Text>
      </View>
  </View>      
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#A4EAF2'
  },
  text:{
      color: 'white',
      fontSize: 30,
  },
  content: {
    paddingLeft: 10,
    justifyContent: 'center',
},
})

export default Historial;
