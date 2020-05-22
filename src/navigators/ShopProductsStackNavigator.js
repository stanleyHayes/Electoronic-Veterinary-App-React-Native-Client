import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ShopProductsScreen from '../screens/shops/ShopProductsScreen';
import ProductDetailStackNavigator from './ProductDetailStackNavigator';

const StackNavigator = createStackNavigator();

function ShopProductsStackNavigator() {

    return (
        <StackNavigator.Navigator
            screenOptions={{
                title: 'Shop Products',
            }}
            initialRouteName="ShopProductsScreen">

            <StackNavigator.Screen
                name="ShopProductsScreen"
                component={ShopProductsScreen}
            />


            <StackNavigator.Screen
                options={{
                    title: "Product Detail"
                }}
                name="ProductDetailsStackNavigator"
                component={ProductDetailStackNavigator}
            />

        </StackNavigator.Navigator>
    );
}

export default ShopProductsStackNavigator;
