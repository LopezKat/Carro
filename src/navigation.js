import React from 'react';
import {  StackNavigator,createMaterialTopTabNavigator,DrawerNavigator,createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Catalogo from './scenes/Catalogo';
import Detalle from './scenes/Detalle';
import Compra from './scenes/Compra';
import Formulario from './scenes/Formulario';
import Finalizado from './scenes/Finalizado';
import Profile from './scenes/Profile';
import { SideMenu } from './side-menu';



//Alone
import Settings from './scenes/Configuracion';
import Historial from './scenes/Historial';
import Chat from './scenes/Chat';

//Auth
import Auth from './scenes/Login/auth';
import AuthLoading from './scenes/Login/authLoading';


    const iconTab1 = (<Icon name="user-circle" size={24} color="#999"/>);
    const iconTab2 = (<Icon name="cart-plus" size={24} color="#999"/>);
    const iconTab3 = (<Icon name="credit-card" size={24} color="#999"/>);

    export const Stack = StackNavigator({        
        CatalogoScreen: { screen: Catalogo },
        DetalleScreen: { screen: Detalle },        
        FormularioScreen: { screen: Formulario },
        FinalizadoScreen: { screen: Finalizado },
        CompraScreen: { screen: Compra },
    },
    {
      initialRouteName: 'CatalogoScreen',
    }); 

    export const Tabs = createMaterialTopTabNavigator({
        Tab1: { 
            screen: Historial ,
            navigationOptions:{
                title: 'Historial',
                tabBarIcon: iconTab1
            } 
        },
        Tab2: { 
            screen: Chat ,
            navigationOptions:{
                title: 'Chat',
                tabBarIcon: iconTab2
            } 
        },
        Tab3: { 
            screen: Detalle,
            navigationOptions:{
                title: 'Info',
                tabBarIcon: iconTab3
            }  
        },
    },
    {
        order: ['Tab1','Tab2', 'Tab3'],
        initialRouteName: 'Tab1',
        tabBarOptions:{
            activeTintcolor: '#e91e63',
            labelStyle:{
                fontSize: 16,
            },
            style:{
                backgroundColor: 'black'
            }
        }
    });
  
    const Drawer = DrawerNavigator({
        Inicio: { screen: Stack },
        Tabs: { screen: Tabs },
        Profile: { screen: Profile },
        Settings: { screen: Settings },
        History: { screen: Historial }        
    },
    {
        drawerWidth: 300,
        contentComponent: SideMenu
    });

    export const SwitchNavigator = createSwitchNavigator({
        Auth: Auth,
        AuthLoading: AuthLoading,
        App: Drawer
    },{
        initialRouteName: 'AuthLoading'
    });
