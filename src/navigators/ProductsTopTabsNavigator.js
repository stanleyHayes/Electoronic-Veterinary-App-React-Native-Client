import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


import ProductInformationScreen from '../screens/products/ProductInformationScreen';
import ProductReviewsScreen from '../screens/products/ProductReviewsScreen';

const TopTabsNavigator = createMaterialTopTabNavigator();

function ProductsTopTabsNavigator() {
    return (
        <TopTabsNavigator.Navigator>
            <TopTabsNavigator.Screen name="ProductInformationScreen" component={ProductInformationScreen} />
            <TopTabsNavigator.Screen name="ProductReviewsScreen" component={ProductReviewsScreen} />
        </TopTabsNavigator.Navigator>
    )
}

export default ProductsTopTabsNavigator;
