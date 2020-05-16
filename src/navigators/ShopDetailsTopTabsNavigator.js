import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ShopInformationScreen from '../screens/shops/ShopInformationScreen';
import ShopProductsScreen from '../screens/shops/ShopProductsScreen';
import ShopReviewsScreen from '../screens/shops/ShopReviewsScreen';

const TopTabsNavigator = createMaterialTopTabNavigator();

function ShopDetailsTopTabsNavigator() {

    return (
        <TopTabsNavigator.Navigator>
            <TopTabsNavigator.Screen
                options={{
                    title: "Info"
                }}
                name="ShopInformationScreen"
                component={ShopInformationScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    title: "Products"
                }}
                name="ShopProductsScreen"
                component={ShopProductsScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    title: "Reviews"
                }}
                name="ShopReviewsScreen"
                component={ShopReviewsScreen}
            />
        </TopTabsNavigator.Navigator>
    )
}

export default ShopDetailsTopTabsNavigator;
