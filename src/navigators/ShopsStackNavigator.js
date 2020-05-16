import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import ShopTopTabsNavigator from './ShopTopTabsNavigator';

import ProductDetailStackNavigator from './ProductDetailStackNavigator';
import ShopDetailStackNavigator from './ShopDetailStackNavigator';
import ProductDetailsTopTabsNavigator from './ProductDetailsTopTabsNavigator';
import ShopDetailsTopTabsNavigator from './ShopDetailsTopTabsNavigator';

const StackNavigator = createStackNavigator();

function ShopsStackNavigator() {

    return (
        <StackNavigator.Navigator
            initialRouteName="ShopTopTabsNavigator"
            screenOptions={{ headerShown: true, title: "Shop"}}>

            <StackNavigator.Screen
                name="ShopTopTabsNavigator"
                component={ShopTopTabsNavigator}
            />

            <StackNavigator.Screen
                options={{
                    title: "Shop Detail"
                }}
                name="ShopDetailsTopTabsNavigator"
                component={ShopDetailsTopTabsNavigator}
            />

            <StackNavigator.Screen
                options={{
                    title: "Product"
                }}
                name="ProductDetailsTopTabsNavigator"
                component={ProductDetailsTopTabsNavigator}
            />

        </StackNavigator.Navigator>
    )
}

export default ShopsStackNavigator;
