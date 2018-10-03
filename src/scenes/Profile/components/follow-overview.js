import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const FollowOverView = props => (

    <View style={styles.followContainer}>
        <View style={styles.followWrapper}>
            <Text style={styles.followValue}> {props.follow.seguidores} </Text>
            <Text style={styles.followTitle}> Followers </Text>
        </View>

        <View style={styles.followWrapper}>
            <Text style={styles.followValue}> {props.follow.siguiendo} </Text>
            <Text style={styles.followTitle}> Followings </Text>
        </View>
    </View>

);

const styles = StyleSheet.create({
    followTitle: {
        fontSize: 18,
        color: '#021925',
    },
    followValue: {
        fontSize: 24,
        color: '#fff',
    },
    followContainer: {
        backgroundColor: '#33E6FF',
        flexDirection: 'row',
    },
    followWrapper: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    }
});

export default FollowOverView;