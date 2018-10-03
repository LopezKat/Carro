import React, { Component } from 'react';
import {View, ToastAndroid} from 'react-native';

import PerfilOverView from './components/profile-overview';
import FollowOverView from './components/follow-overview';
import FormOverView from './components/form-overview';

class Perfil extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            follow: {},
            form: {}
        }

    }

    componentDidMount() {
        const profile = {
            nombre: 'Katherine López',
            direccion: 'Medellín',
            imagen: 'https://dianamarcelacrdenasbulla.files.wordpress.com/2016/10/myavatar.png?w=277&h=277',

        };
        const follow = {
            seguidores: 900,
            siguiendo: 1000
        };
        const form = {
            name: 'Katherine López Pareja',
            telefono: '1234567',
            twitter: '@katherine',
            location: 'Miami'
        };
        this.setState({
            profile,
            follow,
            form ///Es lo mismo decir profile: profile
        });
    }

    showAlert() {
        //TODO
        ToastAndroid.show('Advertencia !', ToastAndroid.SHORT);
    }
    changeText = text => {
        console.log(text);
        this.setState(
            () => {
                return {
                    profile: { ...this.state.profile, name: text },
                };
            });
    }

    static navigationOptions = {
        title: 'Ver Perfil',
        headerTitleStyle: {
            fontSize: 26
        }
    }

    render() {
        return (
            <View>
                <PerfilOverView profile={this.state.profile} />
                <FollowOverView follow={this.state.follow} />
                <FormOverView navigation={ this.props.navigation } onPress={this.showAlert} form={this.state.form} onChangeText={this.changeText} />
            </View>
        );
    }
}

export default Perfil;