import React, { Component } from 'react';

import { View, Text, FlatList} from 'react-native';
import ItemFormulario from './componentes/item-formulario';


class Formulario extends Component {

    constructor(props){
        super(props);
        this.state={
            formulario: {}
        };
    }

    componentDidMount= ()=>{
        const formulario = 
            {
                name: 'Katherine López',
                correo: 'kathelope@gmail.com',
                telefono: '3214569874',
                location: 'Calle 50 #51-65 Medellín, Colombia'
            };

        this.setState({
            formulario
        });
    };

    static navigationOptions = {
        title: 'Formulario',
    }

    

    render() {
        return (
            <View>               
                <ItemFormulario formulario={this.state.formulario} navigation={ this.props.navigation } /> 
            </View>
        );
    }
}

export default Formulario;