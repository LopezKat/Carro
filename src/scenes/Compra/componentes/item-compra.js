import React from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput } from 'react-native';

const ItemCompra = (props) => (

    <View style={styles.container}>
        <View>
            <Text style={styles.contactName}>{props.compra.name}</Text>
            <Image
                style={styles.image}
                source={{ uri: props.compra.product }}
            />
        </View>
        <View style={styles.content}>
            <Text>Precio: {props.compra.price}</Text> 
            <Text>IVA: {props.compra.iva}</Text>
            <Text>Envio: {props.compra.envio}</Text>
            <Text>Total: {props.compra.total}</Text>
            <Button
                title="Comprar"
                onPress={() => { props.navigation.navigate('FormularioScreen') }}//No se utiliza this.props ya que es una función
            />
        </View>
</View>

);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    content: {
        paddingLeft: 10,
        justifyContent: 'center',
    },    
    image: {
        width: 170,
        height: 170,
        borderRadius: 35,
        padding: 5,
        margin: 5
    },
    contactName: {
        fontSize: 24,
        fontWeight: '200',
    }

});
export default ItemCompra;
