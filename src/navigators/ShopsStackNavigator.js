import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ShopTopTabsNavigator from './ShopTopTabsNavigator';
import ShopDetailStackNavigator from './ShopDetailStackNavigator';
import ProductsScreen from '../screens/products/ProductsScreen';
import ProductDetailsScreen from '../screens/products/ProductDetailsScreen';
import ProductInformationScreen from '../screens/products/ProductInformationScreen';

const StackNavigator = createStackNavigator();

function ShopsStackNavigator() {

    return (
        <StackNavigator.Navigator
            initialRouteName="ProductsScreen"
            screenOptions={{ headerShown: true, title: "Products"}}>

            <StackNavigator.Screen
                name="ProductsScreen"
                component={ProductsScreen}
            />

            <StackNavigator.Screen
                name="ProductInformationScreen"
                component={ProductInformationScreen}
            />




        </StackNavigator.Navigator>
    )
}

export default ShopsStackNavigator;
