import React, { Component } from 'react';

import { View, Text, FlatList} from 'react-native';
import ItemFinalizado from './componentes/item-finalizado';


class Finalizado extends Component {

    constructor(props){
        super(props);
        this.state={
            finalizado: {}
        };
    }

    componentDidMount= ()=>{
        const finalizado = 
            {
                name: 'Iphone X',
                price: '$3.650.000',
                product: 'https://imei24.com/img/apple/11_41_10_apple-iphone-x.jpg',
                mensaje: 'Pagado con Exito'
            };

        this.setState({
            finalizado
        });
    };

    static navigationOptions = {
        title: 'Finalizado',
    }
    

    render() {
        return (
            <View>                               
                <ItemFinalizado finalizado={this.state.finalizado} navigation={ this.props.navigation } /> 
            </View>
        );
    }
}

export default Finalizado;