import React, { Component } from 'react';
import { View,  ActivityIndicator,StyleSheet, AsyncStorage } from 'react-native';

class AuthLoading extends Component {
  constructor(props) {
    super(props);

    this.validateToken();
  }
  
  validateToken = async () =>{
    
    const token = await AsyncStorage.getItem('token');
    
    setTimeout ( ()=>{
      this.props.navigation.navigate(token ? 'App': 'Auth');
    },1000);
  }

  render() {
    return (
      <View style={styles.container}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

export default AuthLoading;
