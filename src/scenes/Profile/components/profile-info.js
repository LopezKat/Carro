import React, { Component } from 'react';
import { 
    Text, 
    View,
    Image,
    StyleSheet,
    Button,
    AsyncStorage
} from 'react-native';

class ProfileInfo extends Component {
    constructor(props) {
    super(props);
    }
    
    closeSession = async () => {
        try {
            await AsyncStorage.clear();
            this.props.navigation.navigate('Auth')
        } catch (error) {
            console.log(error.message);
        }
    }
//const Profile = props => (
    render() {
    return (  
        <View style={styles.profileContainer}>
            <Image
                source = { { uri: 'https://avatars0.githubusercontent.com/u/5550470?s=460&v=4' } }
                style={styles.profileImage}
            />
            <Text style={styles.profileName}> Alexander Londoño </Text>
            <Text style={styles.username}> @alexlondon07  </Text>
            <Button
            onPress={() => this.closeSession() }
            title="Sign out"
            color='white'
            />
        </View>
    );
    }
}

const styles = StyleSheet.create({
    profileContainer: {
        paddingTop: 20,
        backgroundColor: '#3949AB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileTittle:{
        color: '#fff',
        fontSize: 30,
        marginTop: 10
    },
    profileName:{
        color: '#fff',
        fontSize: 24,
        marginTop: 20
    },
    profileImage:{
        width: 140,
        height: 140,
        borderRadius: 70,
        resizeMode: 'cover'
    },
    username:{
        color: '#fff',
        padding: 10
    },
    });

export default ProfileInfo;