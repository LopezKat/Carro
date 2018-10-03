import React from 'react';
import { Text, View, StyleSheet, Image,Button } from 'react-native';

const ItemFinalizado = (props) => (
    <View>
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: props.finalizado.product }}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.contactName}>{props.finalizado.name}</Text>
                <Text>{props.finalizado.price}</Text>
            </View>
        </View>
        <View>
            <View style={styles.mensaje}>
                <Text style={styles.mensajeText}>{props.finalizado.mensaje}</Text>                
            </View>
            <View>
            <Button
                    color='#F93B12'
                    title="Seguir Comprando"
                    onPress={() => { props.navigation.navigate('CatalogoScreen') }}
                />
                </View>
        </View>
    </View>

);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    content: {
        paddingLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 35,
        padding: 5,
        margin: 5
    },
    contactName: {
        fontSize: 24,
        fontWeight: '200',

    },
    mensajeText: {
        fontSize: 30,
        fontWeight: '200',
        justifyContent: 'center',
        color: '#0BB33B'
    },
    mensaje: {
        flexDirection: 'row',
        justifyContent: 'center',
    }

});
export default ItemFinalizado;
