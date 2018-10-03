import React, { Component } from 'react';

import { View, Text, Button, FlatList } from 'react-native';
import ItemCatalogo from './componentes/item-catalogo';
import ItemSeparator from './componentes/item.separator';

import Home from '../Home';
import Header from '../Header';
import HttpProduct from "../../services/Product/http-products";

class Catalogo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            catalogoList: []
        };
    }

    componentDidMount = () => {
        this.getProducts();
    };

    async getProducts() {
        const data = await HttpProduct.getProducts();
        this.setState({
            catalogoList: data
        });
        console.log(data);
    }

    static navigationOptions = {
        title: 'Catalogo',
    }

    renderItem = ({ item }) => <ItemCatalogo navigation={this.props.navigation} catalogo={item} />
    separatorComponent = () => <ItemSeparator />
    emptyComponent = () => <Text>No hay productos</Text>
    keyExtractor = item => item._id.toString()

    render() {
        return (
            <View>
                <Home>
                    <Header>
                        <Button
                            title="Cart"
                            onPress={() => this.props.navigation.navigate('CompraScreen')}
                        />
                    </Header>
                    {/*Creaci+on de lista*/}
                    <FlatList
                        data={this.state.catalogoList}
                        renderItem={this.renderItem}
                        ListItemComponent={this.emptyComponent}
                        ItemSeparatorComponent={this.separatorComponent}
                        keyExtractor={this.keyExtractor}
                    />
                </Home>
            </View>
        );
    }
}

export default Catalogo;