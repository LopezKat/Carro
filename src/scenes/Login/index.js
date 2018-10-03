import React, { Component } from "react";
import { 
    View
  } from 'react-native';
import LoginForm from './../Login/components/login'

class Login extends Component {

    constructor(props) {
        super(props);
    }   
    render() {
        return (
            <View>
                <LoginForm />                  
            </View>
        );
    }
}
export default Login;
