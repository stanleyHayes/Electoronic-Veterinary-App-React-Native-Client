import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ShopsScreen from '../screens/shops/ShopsScreen';
import FeaturedItemsScreen from '../screens/others/FeaturedItemsScreen';
import ProductsScreen from '../screens/products/ProductsScreen';

const TopTabsNavigator = createMaterialTopTabNavigator();

function ShopTopTabsNavigator() {
    return (
        <TopTabsNavigator.Navigator>
            <TopTabsNavigator.Screen
                options={{
                    title: "Featured"
                }}
                name="FeaturedItemsScreen"
                component={FeaturedItemsScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    title: "Products"
                }}
                name="ProductsScreen"
                component={ProductsScreen}
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
