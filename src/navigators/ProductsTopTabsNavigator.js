import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


import ProductInformationScreen from '../screens/products/ProductInformationScreen';
import ProductReviewsScreen from '../screens/products/ProductReviewsScreen';

const TopTabsNavigator = createMaterialTopTabNavigator();

function ProductsTopTabsNavigator() {
    return (
        <TopTabsNavigator.Navigator>

            <TopTabsNavigator.Screen
                options={{
                    title: "Info"
                }}
                name="ProductInformationScreen"
                component={ProductInformationScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    title: "Reviews"
                }}
                name="ProductReviewsScreen"
                component={ProductReviewsScreen}
            />
        </TopTabsNavigator.Navigator>
    )
}

export default ProductsTopTabsNavigator;
