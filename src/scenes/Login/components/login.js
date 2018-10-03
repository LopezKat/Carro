import React, {Component} from 'react'
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    Image,
    AsyncStorage
} from 'react-native';

import HttpUser from "../../../services/User/http-user";

export class LoginForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: 'lzulu@gmail.com',
            password: '123456',
            error: '',
        }
    }

    onChangeText = (input, text)=>{
        if(input == 'email'){
            this.state.email = text;
        }else if(input == 'password'){
            this.state.password = text;
        }
    }

    validate = () =>{
        var vBalid = true;
        console.log(this.state);

        if(this.state.email === ""){
            this.setState({error: 'Email field is required'});
            vBalid = false;
            return;
        }
        if(this.state.password === ""){
            this.setState({error: 'Password field is required'});
            vBalid = false;
            return;
        }
        if(vBalid){
            this.setState({error: ''});
            this.login();
        }
    }

    login = async () =>{
        const params = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log('params:'+params);
        const data = await HttpUser.login(params);
        if(data.token){
            console.log(data);
            await AsyncStorage.setItem('data', JSON.stringify(data));
            this.props.navigation.navigate('App');  
        }
    }
    
    render() {
        return (
        <View style ={styles.container}>

            <View style={styles.wrapper}>

                <View style={styles.heading}>
                    <Image
                        source={require('../../../../assets/tienda.png')}
                        style={styles.headingImage}
                        resizeMode="contain"
                    />
                </View>

                <View style={[styles.greeting]}>
                    <Text style={[styles.greeting]}>
                    Welcome back,
                    </Text>
                    <Text style={[styles.greeting2]}>
                    Sign in to continue
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.formLabel}> Email </Text>
                    <TextInput
                        placeholder="Email"
                        style={styles.formInput}
                        value={this.state.email}
                        onChangeText={(text)=>this.onChangeText('email',text)}
                    />
                    <Text style={styles.formLabel}> Password </Text>
                    <TextInput
                        placeholder="Password"
                        style={styles.formInput}
                        value={this.state.password}
                        onChangeText={(text)=>this.onChangeText('password',text)}
                        secureTextEntry
                    />
                    <Text style={styles.error}>
                        {this.state.error}
                    </Text>
                    <Button
                        title="Sign in"
                        onPress={() => this.validate() }
                    />
                </View>
            </View>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper:{
        paddingHorizontal: 20,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: '30%'
    },
    container:{
    },
    formLabel:{
        color: '#198e97'
    },
    formInput:{
        width: 250,
        borderBottomColor: '#198e97',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    heading: {
        alignItems:  'flex-start'
    },
    headingImage: {
        width: 38,
        height: 38,
    },
    inputContainer: {
        marginTop: 24
    },
    greeting: {
        marginTop: 20,
        fontSize: 16,
    },
    greeting2: {
        color: '#666',
        fontSize: 16,
        marginTop: 5,
    },
    error:{
        color: 'red',
        textAlign: 'center'
    }
    
});

export default LoginForm;