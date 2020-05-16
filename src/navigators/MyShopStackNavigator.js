import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import ShopTopTabsNavigator from './ShopTopTabsNavigator';
import ShopDetailsTopTabsNavigator from './ShopDetailsTopTabsNavigator';
import MyShopsScreen from '../screens/shops/MyShopsScreen';
import MyShopDetailsTopTabsNavigator from './MyShopDetailTopTabsNavigator';

const StackNavigator = createStackNavigator();

function MyShopsStackNavigator() {
    return (
        <StackNavigator.Navigator
            initialRouteName="MyShopsScreen"
            screenOptions={{ headerShown: false}}>

            <StackNavigator.Screen
                name="ShopTopTabsNavigator"
                component={MyShopsScreen}
            />

            <StackNavigator.Screen
                name="MyShopDetailsTopTabsNavigator"
                component={MyShopDetailsTopTabsNavigator} />
        </StackNavigator.Navigator>
    )
}

export default MyShopsStackNavigator;
