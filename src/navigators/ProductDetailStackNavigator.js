import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProductReviewsScreen from '../screens/products/ProductReviewsScreen';
import ProductInformationScreen from '../screens/products/ProductInformationScreen';

const StackNavigator = createStackNavigator();

function ProductDetailStackNavigator() {

    return (
        <StackNavigator.Navigator
            initialRouteName="ProductInformationScreen"
            backBehavior="initialRoute">

            <StackNavigator.Screen
                options={{
                    title: "Products",
                    headerShown: false
                }}
                name="ProductInformationScreen"
                component={ProductInformationScreen}
            />

            <StackNavigator.Screen
                options={{
                    title: "Product Reviews"
                }}
                name="ProductReviewsScreen"
                component={ProductReviewsScreen}
            />

        </StackNavigator.Navigator>
    )
}

export default ProductDetailStackNavigator;
