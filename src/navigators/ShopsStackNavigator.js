import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import ShopTopTabsNavigator from './ShopTopTabsNavigator';
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
                name="ShopDetailsTopTabsNavigator"
                component={ShopDetailsTopTabsNavigator} />
        </StackNavigator.Navigator>
    )
}

export default ShopsStackNavigator;
