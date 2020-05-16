import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ShopDetailsTopTabsNavigator from './ShopDetailsTopTabsNavigator';

const StackNavigator = createStackNavigator();

function ShopDetailStackNavigator() {
    return (
        <StackNavigator.Navigator
            initialRouteName="ProductDetailsTopTabsNavigator"
            backBehavior="initialRoute">

            <StackNavigator.Screen
                options={{
                    title: "Shop",
                    headerShown: false
                }}
                name="ShopDetailsTopTabsNavigator"
                component={ShopDetailsTopTabsNavigator}
            />

        </StackNavigator.Navigator>
    )
}

export default ShopDetailStackNavigator;
