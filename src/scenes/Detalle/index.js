import React, { Component } from 'react';

import { View } from 'react-native';
import ItemDetalle from './componentes/item-detalle';
import HttpProduct from "../../services/Product/http-products";


class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detalle: []
        };
    }

    componentDidMount = () => {
        id = this.props.navigation.getParam('idProduct', 'no-data');
        this.getProductById(id);
    }

    /**
     * Funcion para Obtener un producto por su Identificador
     */
    async getProductById(id) {
        const data = await HttpProduct.getProductsById(id);
        this.setState({
            detalle: data
        })
        console.log(data);
    }

    onPressLearnMore() { }

    static navigationOptions = {
        title: 'Detalle',
    }
    

    render() {
        return (
            <View>
                <ItemDetalle detalle={this.state.detalle} navigation={this.props.navigation}/>
            </View>
        );
    }
}

export default Detalle;