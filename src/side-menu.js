import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-vector-icons/dist/FontAwesome';

import i18n from './i18n';

const iconTab1 = (<Icon name="user-circle" size={24} color="#999" />);
const iconTab2 = (<Icon name="cart-plus" size={24} color="#999" />);
const iconTab3 = (<Icon name="credit-card" size={24} color="#999" />);


export class SideMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.profileContainer}>
                        <Image
                            source={{ uri: 'https://i.ytimg.com/vi/gbNdhbeTLuI/maxresdefault.jpg' }}
                            style={styles.profileImage}
                        />
                        <Text style={styles.profileName}>Katherine López Pareja</Text>
                        <Text style={styles.profileLocation}>Medellin, Colombia</Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => { this.props.navigation.navigate('Inicio') }}
                        underlayColor="#535252"
                    >
                        <View style={styles.itemSectionNav}>
                            <Text style={styles.textItemSectionNav}> {i18n.t('START')} </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => { this.props.navigation.navigate('Profile') }}
                        underlayColor="#535252"
                    >
                        <View style={styles.itemSectionNav}>
                            <Text style={styles.textItemSectionNav}> {i18n.t('ACCOUNT')} </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => { this.props.navigation.navigate('Tabs') }}
                        underlayColor="#535252"
                    >
                        <View style={styles.itemSectionNav}>
                            <Text style={styles.textItemSectionNav}> {i18n.t('SETTINGS')} </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => { this.props.navigation.navigate('History') }}
                        underlayColor="#535252"
                    >
                        <View style={styles.itemSectionNav}>
                            <Text style={styles.textItemSectionNav}> {i18n.t('HISTORY')}</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.itemSectionNav}>
                        <Text style={styles.footer}> Copyright 2018, ETN</Text>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: '#33D1FF',
        alignItems: 'center',
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
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    itemSectionNav: {
        backgroundColor: '#B5B1B0'
    },
    textItemSectionNav: {
        fontSize: 25,
    },
    footer: {
        fontSize: 15,
        color: '#D9DDDE',
    }
})

export default SideMenu;