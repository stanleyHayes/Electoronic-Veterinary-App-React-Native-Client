import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ShopReviewsScreen from '../screens/shops/ShopReviewsScreen';
import ShopInformationScreen from '../screens/shops/ShopInformationScreen';
import ShopProductsStackNavigator from './ShopProductsStackNavigator';

const StackNavigator = createStackNavigator();

function ShopDetailStackNavigator({route}) {

    return (
        <StackNavigator.Navigator
            screenOptions={{
                title: 'Shop Detail',
                headerShown: false
            }}
            initialRouteName="ShopInformationScreen">

            <StackNavigator.Screen
                name="ShopInformationScreen"
                component={ShopInformationScreen}
            />


            <StackNavigator.Screen
                options={{
                    title: "Shop Reviews"
                }}
                name="ShopReviewsScreen"
                component={ShopReviewsScreen}
            />

            <StackNavigator.Screen
                options={{
                    title: "Shop Products"
                }}
                name="ShopProductsStackNavigator"
                component={ShopProductsStackNavigator}
            />

        </StackNavigator.Navigator>
    );
}

export default ShopDetailStackNavigator;
