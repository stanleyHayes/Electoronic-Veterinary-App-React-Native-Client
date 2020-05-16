import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ShopsScreen from '../screens/shops/ShopsScreen';
import FeaturedShopsScreen from '../screens/shops/FeaturedShopsScreen';
import PopularShopsScreen from '../screens/shops/PopularShopsScreen';

const TopTabsNavigator = createMaterialTopTabNavigator();

function ShopTopTabsNavigator() {
    return (
        <TopTabsNavigator.Navigator>
            <TopTabsNavigator.Screen
                options={{
                    title: "Featured"
                }}
                name="FeaturedShopsScreen"
                component={FeaturedShopsScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    title: "Popular"
                }}
                name="PopularShopsScreen"
                component={PopularShopsScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    title: "Shops"
                }}
                name="ShopsScreen"
                component={ShopsScreen}
            />
        </TopTabsNavigator.Navigator>
    )
}

export default ShopTopTabsNavigator;
