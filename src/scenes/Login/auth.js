import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';

export class Auth extends Component {
  constructor(props) {
    super(props);
  }
  
  login = async () =>{
    await AsyncStorage.setItem('token', 'xxx-yyyy-zzzz');
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
            title="Login"
            onPress={ this.login }
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
})

export default Auth;
