import React from 'react';
import { Text, StyleSheet, Button,ScrollView,TextInput,Switch } from 'react-native';

const ItemFormulario = (props) => (

    <ScrollView style={styles.formWrapper}>

        <Text style={styles.formLabel}> Nombre</Text>
        <TextInput
            placeholder='Ingrese el nombre'
            style={styles.formInput}
            value={props.formulario.name}
            onChangeText={props.onChangeText}
        />
        <Text style={styles.formLabel}> Correo Electrónico</Text>
        <TextInput
            placeholder='Ingrese el correo electrónico'
            style={styles.formInput}
            value={props.formulario.correo}
        />
        <Text style={styles.formLabel}> Teléfono</Text>
        <TextInput
            placeholder='Ingrese el teléfono'
            style={styles.formInput}
            value={props.formulario.telefono}
        />
        <Text style={styles.formLabel}> Dirección</Text>
        <TextInput
            placeholder='Ingrese el teléfono'
            style={styles.formInput}
            value={props.formulario.location}
        />        
        <Button 
            title="Finalizar"
            onPress={() => { props.navigation.navigate('FinalizadoScreen') }}
            color='#F93B12'
        />
    </ScrollView>
);

const styles = StyleSheet.create({
    formWrapper: {
        marginHorizontal: 25,
    },
    formLabel: {
        color: '#F93B12',
        marginVertical: 5,
    },
    

});
export default ItemFormulario;
