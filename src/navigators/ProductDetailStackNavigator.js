import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProductDetailsTopTabsNavigator from './ProductDetailsTopTabsNavigator';

const StackNavigator = createStackNavigator();

function ProductDetailStackNavigator() {
    return (
        <StackNavigator.Navigator
            initialRouteName="ProductDetailsTopTabsNavigator"
            backBehavior="initialRoute">

            <StackNavigator.Screen
                options={{
                    title: "Product",
                    headerShown: false
                }}
                name="ProductsTopTabsNavigator"
                component={ProductDetailsTopTabsNavigator}
            />



        </StackNavigator.Navigator>
    )
}

export default ProductDetailStackNavigator;
