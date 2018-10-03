import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const PerfilOverView = props => (

    <View style={styles.profileContainer}>
        <Image
            source={{ uri: props.profile.imagen }}
            style={styles.profileImage}
        />
        <Text style={styles.profileName}> {props.profile.nombre}</Text>
        <Text style={styles.profileLocation}> {props.profile.direccion}</Text>
    </View>
);

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: '#33D1FF',
        alignItems: 'center',
    },
    profileTitle: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 20
    },
    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 70
    },
    profileName: {
        color: '#fff',
        fontSize: 24,
        marginTop: 20,
    },
    profileLocation: {
        color: '#fff',
    },
});

export default PerfilOverView;