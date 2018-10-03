import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, Switch, Button } from 'react-native';


const FormOverView = props => (
    <ScrollView style={styles.formWrapper}>

        <Button
            title="Mis Contactos"
            onPress = {()=>{ props.navigation.navigate('ContactsScreen',{ name: 'Thor'}) }}//No se utiliza this.props ya que es una función
        />

        <Text style={styles.formLabel}> Nombre</Text>
        <TextInput
            placeholder='Ingrese el nombre'
            style={styles.formInput}
            value={props.form.name}
            onChangeText={props.onChangeText}
        />
        <Text style={styles.formLabel}> @Twitter</Text>
        <TextInput
            placeholder='Ingrese el usuario de Twitter'
            style={styles.formInput}
            value={props.form.twitter}
        />
        <Text style={styles.formLabel}> Teléfono</Text>
        <TextInput
            placeholder='Ingrese el teléfono'
            style={styles.formInput}
            value={props.form.telefono}
        />
        <Text style={styles.formLabel}> Dirección</Text>
        <TextInput
            placeholder='Ingrese el teléfono'
            style={styles.formInput}
            value={props.form.location}
        />

        <Text style={styles.formLabel}> Permitir datos sociales</Text>
        <Switch
            onTintColor={'#33D1FF'}
            value={true}
        />

        <Button
            onPress={props.onPress}
            color="#33D1FF"
            title={1 == 1 ? "Sincronizar con Facebook" : "No Sincronizar"}
        />
    </ScrollView>

);

const styles = StyleSheet.create({

    formWrapper: {
        marginHorizontal: 25,
    },
    formLabel: {
        color: '#339FFF',
        marginVertical: 5,
    },
    formInput: {

    }

});

export default FormOverView;