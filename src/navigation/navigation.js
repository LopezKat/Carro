import React from 'react';
import {  StackNavigator, DrawerNavigator, createSwitchNavigator } from 'react-navigation';

import Catalog from '../scenes/Catalog';
import CatalogDetail from '../scenes/CatalogDetail';
import { SideMenu } from './side-menu';
import Cart from '../scenes/Cart';
import Login from '../scenes/Login';
import AuthLoading from '../scenes/Login/components/authLoading';
import Profile from '../scenes/Profile';

    export const StackProducts = StackNavigator({
        CatalogScreen: { screen: Catalog },
        CatalogDetailScreen: { screen: CatalogDetail },
        ProfileScreen: { screen: Profile },
    },
    {
        initialRouteName: 'CatalogScreen',
        navigationOptions:{
            //headerTitleAllowFontScaling: true,
            headerBackTitle: 'Atras',
            //getturesEnabled: true
        },
    });
    export const StackCart = StackNavigator({
        CartScreen: { screen: Cart },
    });

    export const Drawer = DrawerNavigator({
        StackScren: { screen: StackProducts },
        StackCarScreen: { screen: StackCart },
    },{
        drawerWidth: 300,
        contentComponent: SideMenu
    });

    export const SwitchNavigator = createSwitchNavigator({
        Login: Login,
        AuthLoading: AuthLoading,
        App: Drawer
    },{
        initialRouteName: 'AuthLoading',
    });